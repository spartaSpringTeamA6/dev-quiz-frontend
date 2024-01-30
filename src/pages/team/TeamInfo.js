import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { teamGetTeamInfoApi, teamGetTeamsApi } from "../../apis/teamApis";
import { useCookies } from "react-cookie";
import useUserStore from "../../stores/user.store";
import {
  PATH_LOGIN,
  PATH_TEAM,
  PATH_TEAM_INFO,
  PATH_TEAM_INVITATION,
  PATH_TEAM_SETTING,
} from "../../constants";

const Wrap = styled.div`
  padding: 0px 0 80px 0;
`;

const IndexWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 220px;
  position: relative;
`;

const Sidebar = styled.div`
  align-items: center;
  background-color: #0000000d;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 12px 0px;
  position: absolute;
  top: -10px;
  width: 220px;
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
  color: #000000;
  display: flex;
  font-size: 15px;
  height: 24px;
  justify-content: center;
  align-items: center;
  width: 24px;
`;

const Title = styled.div`
  color: #000000;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
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
  width: 800px;
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
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Title2 = styled.div`
  color: #000000;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const List = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  width: 100%;
`;

const Item2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 204px;
  justify-content: center;
  padding: 12px 0px;
  position: relative;
  width: 160px;
`;

const IconWrapper = styled.div`
  background-color: #0000000d;
  border-radius: 50px;
  height: 100px;
  position: relative;
  width: 100px;
`;

const Icon2 = styled.div`
  color: #000000;
  display: flex;
  font-size: 62.5px;
  height: 100px;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const Frame2 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Title3 = styled.div`
  align-self: stretch;
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const Subtitle = styled.div`
  align-self: stretch;
  color: #00000080;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
`;

const Subtitle2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26px;
  position: relative;
  text-align: center;
`;

const Section2 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px;
  position: relative;
  width: 800px;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const Title4 = styled.div`
  align-self: stretch;
  color: #000000;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const Description = styled.p`
  align-self: stretch;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
`;

const List2 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 40px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
  justify-content: center;
`;

const Item3 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 204px;
  justify-content: center;
  padding: 12px 0px;
  position: relative;
  width: 160px;
`;

export default function TeamInfo() {
  const { user } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [teamList, setTeamList] = useState();
  const [teamInfo, setTeamInfo] = useState();

  const moveTeamListHandler = () => {
    navigate(PATH_TEAM);
  };

  const moveTeamInfoHandler = (id) => {
    navigate(PATH_TEAM_INFO.replace(":teamId", id));
  };

  const moveTeamSettingHandler = (id) => {
    navigate(PATH_TEAM_SETTING.replace(":teamId", id));
  };

  const moveTeamInvitationsHandler = () => {
    navigate(PATH_TEAM_INVITATION);
  };

  const getTeamListHandler = async () => {
    const response = await teamGetTeamsApi(user.userId);
    if (response.status === 200) {
      setTeamList(response.data.teamInfoList);
    } else {
      alert(response.message);
      navigate(PATH_LOGIN);
    }
  };

  const getTeamInfoHandler = async () => {
    const response = await teamGetTeamInfoApi(teamId);
    if (response.status === 200) {
      setTeamInfo(response.data);
    } else {
      alert(response.message);
      if (response.status === 403) {
        navigate(PATH_TEAM);
      } else {
        navigate(PATH_LOGIN);
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      getTeamListHandler();
      getTeamInfoHandler(teamId);
    }
  }, [userInfo]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  useEffect(() => {
    if (userInfo) {
      getTeamListHandler();
      getTeamInfoHandler(teamId);
    }
  }, [teamId]);

  return (
    <>
      {teamInfo && teamList && (
        <IndexWrapper>
          <Sidebar>
            <Item onClick={() => moveTeamListHandler()}>
              <Frame>
                <Icon>🐾</Icon>
              </Frame>
              <Title>Team List</Title>
            </Item>
            {teamList !== undefined &&
              teamList.map((team, index) => (
                <Item
                  key={index}
                  onClick={() => moveTeamInfoHandler(team.teamId)}
                  backgroundColor={team.teamId.toString() === teamId && "white"}
                >
                  <Frame>
                    <Icon>🐶</Icon>
                  </Frame>
                  <Title>{team.name}</Title>
                </Item>
              ))}
            <Item onClick={() => moveTeamSettingHandler(teamInfo.id)}>
              <Frame>
                <Icon>⚙️</Icon>
              </Frame>
              <Title>Settings</Title>
            </Item>
            <Item onClick={() => moveTeamInvitationsHandler()}>
              <Frame>
                <Icon>🔔</Icon>
              </Frame>
              <Title>Invitation</Title>
            </Item>
          </Sidebar>
          <Wrap>
            <Section>
              <Container>
                <TextWrapper>{teamInfo.name}</TextWrapper>
              </Container>
            </Section>
            <Section>
              <Container>
                <Title2>Team Information</Title2>
                <List>
                  <Item2>
                    <IconWrapper>
                      <Icon2>💼</Icon2>
                    </IconWrapper>
                    <Frame2>
                      <Title3>Team Name</Title3>
                      <Subtitle>{teamInfo.name}</Subtitle>
                    </Frame2>
                  </Item2>
                  <Item2>
                    <IconWrapper>
                      <Icon2>👨‍💼</Icon2>
                    </IconWrapper>
                    <Frame2>
                      <Title3>Admin</Title3>
                      <Subtitle>{teamInfo.admin}</Subtitle>
                    </Frame2>
                  </Item2>
                  <Item2>
                    <IconWrapper>
                      <Icon2>🧑‍💻</Icon2>
                    </IconWrapper>
                    <Frame2>
                      <Title3>Team Members</Title3>
                      <Subtitle2>{teamInfo.userList.length}</Subtitle2>
                    </Frame2>
                  </Item2>
                </List>
              </Container>
            </Section>
            <Section2>
              <Container2>
                <Title4>Team Members</Title4>
                <Description>View details about each team member</Description>
              </Container2>
              <List2>
                {teamInfo.userList.length > 0 ? (
                  teamInfo.userList.map((user, index) => (
                    <Item3>
                      <IconWrapper>
                        <Icon2>🧑🏻‍💻</Icon2>
                      </IconWrapper>
                      <Frame2>
                        <Title3>{user.username}</Title3>
                        {/* <Subtitle>score: 0</Subtitle> */}
                      </Frame2>
                    </Item3>
                  ))
                ) : (
                  <>
                    <Frame2>
                      <Title3>Please invite the members!</Title3>
                    </Frame2>
                  </>
                )}
              </List2>
            </Section2>
          </Wrap>
        </IndexWrapper>
      )}
    </>
  );
}
