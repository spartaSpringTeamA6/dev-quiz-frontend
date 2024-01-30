import styled from "styled-components";
import useUserStore from "../../stores/user.store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  PATH_LOGIN,
  PATH_TEAM,
  PATH_TEAM_INFO,
  PATH_TEAM_INVITATION,
} from "../../constants";
import { teamGetTeamsApi } from "../../apis/teamApis";
import {
  userAcceptTeamInvitationApi,
  userGetTeamInvitationApi,
  userRejectTeamInvitationApi,
} from "../../apis/userApis";

const Wrapper = styled.div`
  padding: 80px 0;
  width: calc(100% - 220px);
`;

const IndexWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: stretch;
`;

const Sidebar = styled.div`
  align-items: center;
  background-color: #0000000d;
  display: flex;
  flex-direction: column;
  left: 0;
  padding: 12px 0px;
  top: -10px;
  width: 240px;
  position: relative;
  border-radius: 0 20px 20px 0;
`;

const Item = styled.button`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
  width: 100%;
  border: none;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: white;
  }
`;

const Frame = styled.div`
  background-color: #0000000d;
  border-radius: 12px;
  height: 24px;
  position: relative;
  width: 24px;
`;

const Icon = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 400;
  height: 24px;
  left: 0;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-overflow: ellipsis;
  top: -1px;
  white-space: nowrap;
  width: 24px;
`;

const Title = styled.div`
  color: #000000;
  flex: 1;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
`;

const Section = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  position: relative;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Div = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Section2 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 170px;
  position: relative;
  width: 100%;
`;

const IconWrapper = styled.div`
  background-color: #0000000d;
  border-radius: 50px;
  height: 100px;
  margin-left: -10px;
  position: relative;
  width: 100px;
`;

const Icon2 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 62.5px;
  font-weight: 400;
  height: 100px;
  left: 0;
  letter-spacing: 0;
  line-height: 100px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-overflow: ellipsis;
  top: -1px;
  white-space: nowrap;
  width: 100px;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 400px;
`;

const Title2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
`;

const Button = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-right: -10px;
  position: relative;
  width: 100px;
`;

const Button2 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Seconday = styled.button`
  align-items: center;
  border: 1px solid;
  border-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 100px;
  background-color: white;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title3 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Primary = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 100px;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title4 = styled.div`
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function TeamInvitation() {
  const { user } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const [teamList, setTeamList] = useState();
  const [invitations, setInvitations] = useState();

  const moveTeamListHandler = () => {
    navigate(PATH_TEAM);
  };

  const moveTeamInfoHandler = (id) => {
    navigate(PATH_TEAM_INFO.replace(":teamId", id));
  };

  const getTeamListHandler = async () => {
    const response = await teamGetTeamsApi(userInfo.userId);
    if (response.status === 200) {
      setTeamList(response.data.teamInfoList);
    } else {
      alert(response.message);
      navigate(PATH_LOGIN);
    }
  };

  const moveTeamInvitationsHandler = () => {
    navigate(PATH_TEAM_INVITATION);
  };

  const getTeamInvitationsHandler = async () => {
    const response = await userGetTeamInvitationApi(userInfo.userId);
    if (response.status === 200) {
      setInvitations(response.data.teamInfoList);
    } else {
      alert(response.message);
      navigate(PATH_LOGIN);
    }
  };

  const acceptTeamInvitationHandler = async (id) => {
    const response = await userAcceptTeamInvitationApi(userInfo.userId, id);
    const confirmed = window.confirm("초대를 수락하시겠습니까?");
    if (confirmed) {
      if (response.status === 200) {
      } else {
        alert(response.message);
      }
      window.location.reload();
    }
  };

  const rejectTeamInvitationHandler = async (id) => {
    const response = await userRejectTeamInvitationApi(userInfo.userId, id);
    const confirmed = window.confirm("초대를 거절하시겠습니까?");
    if (confirmed) {
      if (response.status === 200) {
      } else {
        alert(response.message);
      }
      window.location.reload();
    }
  };

  useEffect(() => {
    if (userInfo) {
      getTeamListHandler();
      getTeamInvitationsHandler();
    }
  }, [userInfo]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <IndexWrapper>
      <Sidebar>
        <Item onClick={() => moveTeamListHandler()}>
          <Frame>
            <Icon>💼</Icon>
          </Frame>
          <Title>Team List</Title>
        </Item>
        {teamList !== undefined &&
          teamList.map((team, index) => (
            <Item key={index} onClick={() => moveTeamInfoHandler(team.teamId)}>
              <Frame>
                <Icon>🐶</Icon>
              </Frame>
              <Title>{team.name}</Title>
            </Item>
          ))}
        <Item
          onClick={() => moveTeamInvitationsHandler()}
          backgroundColor={"white"}
        >
          <Frame>
            <Icon>🔔</Icon>
          </Frame>
          <Title>Invitation</Title>
        </Item>
      </Sidebar>

      {invitations !== undefined && (
        <Wrapper>
          <Section>
            <Container>
              <TextWrapper>Invitation Request</TextWrapper>
              <Div>초대요청: {invitations.length}건</Div>
            </Container>
          </Section>
          {invitations !== undefined && invitations.length > 0 ? (
            invitations.map((team, index) => (
              <Section2 key={index}>
                <IconWrapper>
                  <Icon2>🐶</Icon2>
                </IconWrapper>
                <TitleWrapper>
                  <Title2>{team.name}</Title2>
                </TitleWrapper>
                <Button>
                  <Button2>
                    <Seconday
                      onClick={() => acceptTeamInvitationHandler(team.teamId)}
                    >
                      <Title3>accept</Title3>
                    </Seconday>
                    <Primary
                      onClick={() => rejectTeamInvitationHandler(team.teamId)}
                    >
                      <Title4>reject</Title4>
                    </Primary>
                  </Button2>
                </Button>
              </Section2>
            ))
          ) : (
            <Section2>
              <TextWrapper>
                <text style={{ fontSize: "24px", fontWeight: "600" }}>
                  No Invitation
                </text>
              </TextWrapper>
            </Section2>
          )}
        </Wrapper>
      )}
    </IndexWrapper>
  );
}
