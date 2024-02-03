import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import useUserStore from "../../stores/user.store";
import { useNavigate, useParams } from "react-router-dom";
import {
  teamCreateTeamApi,
  teamGetTeamInfoApi,
  teamGetTeamsApi,
} from "../../apis/teamApis";
import {
  PATH_LOGIN,
  PATH_TEAM,
  PATH_TEAM_INFO,
  PATH_TEAM_INVITATION,
} from "../../constants";

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
    border-color: black;
    color: black;
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
  width: 520px;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 560px;
`;

const Description = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 560px;
`;

const List = styled.div`
  align-items: flex-start;
  align-self: stretch;
  text-align: center;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 40px 40px;
  position: relative;
  justify-content: center;
  margin: auto;
`;

const Div = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 40px;
  padding: 20px 0px;
  position: relative;
  width: 560px;
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

const IconWrapper = styled.button`
  background-color: #0000000d;
  border-radius: 50px;
  height: 100px;
  position: relative;
  width: 100px;
  border: none;

  &:focus {
    outline: none;
    border-color: black;
    color: black;
  }
  &:hover {
    border-color: black;
  }
`;

const Icon2 = styled.div`
  color: #000000;
  display: flex;
  font-size: 62.5px;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.button`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Title2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const Input = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 360px;
`;

const Textfield = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  color: #00000080;
  flex: 1;
  font-size: 14px;
  height: 20px;
  padding: 8px 12px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: black;
    color: black;
  }
  &:hover {
    border-color: black;
  }
`;

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  border-radius: 8px;
  flex-direction: column;
  background-color: #000000;
  gap: 12px;
  position: relative;
  padding: 12px;
  width: 160px;
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title3 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function TeamList(props) {
  const { user } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const [teamList, setTeamList] = useState();
  const [createTeamName, setCreateTeamName] = useState("");

  const moveTeamListHandler = () => {
    navigate(PATH_TEAM);
  };

  const moveTeamInfoHandler = (id) => {
    navigate(PATH_TEAM_INFO.replace(":teamId", id));
  };

  const moveTeamInvitationsHandler = () => {
    navigate(PATH_TEAM_INVITATION);
  };

  const setCreateTeamNameHandler = async (event) => {
    await setCreateTeamName(event.target.value.trim());
  };

  const createTeamHandler = async () => {
    if (createTeamName.length < 2) {
      alert("팀 이름은 2글자부터 가능합니다.");
      setCreateTeamName("");
      return;
    }

    if (createTeamName.length > 9) {
      alert("팀 이름은 9글자까지 가능합니다.");
      setCreateTeamName("");
      return;
    }
    const data = {
      name: createTeamName,
    };
    const response = await teamCreateTeamApi(data);

    if (response.status === 201) {
      getTeamListHandler();
    } else if (response.status === 409) {
      alert(response.message);
    }
    setCreateTeamName("");
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

  useEffect(() => {
    if (userInfo) {
      getTeamListHandler();
    }
  }, [userInfo]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {user !== null && (
        <IndexWrapper>
          <Sidebar>
            <Item
              onClick={() => moveTeamListHandler()}
              backgroundColor={"white"}
            >
              <Frame>
                <Icon>💼</Icon>
              </Frame>
              <Title>Team List</Title>
            </Item>
            {teamList !== undefined &&
              teamList.map((team, index) => (
                <Item
                  key={index}
                  onClick={() => moveTeamInfoHandler(team.teamId)}
                >
                  <Frame>
                    <Icon>🐶</Icon>
                  </Frame>
                  <Title>{team.name}</Title>
                </Item>
              ))}
            <Item onClick={() => moveTeamInvitationsHandler()}>
              <Frame>
                <Icon>🔔</Icon>
              </Frame>
              <Title>Invitation</Title>
            </Item>
          </Sidebar>
          <Wrapper>
            <Section>
              <Container>
                <TextWrapper>My Teams</TextWrapper>
                <Description>List of teams you are part of</Description>
                <List>
                  <Div>
                    {teamList !== undefined &&
                      teamList.map((team, index) => (
                        <Item2 key={index}>
                          <IconWrapper
                            onClick={() => moveTeamInfoHandler(team.teamId)}
                          >
                            <Icon2>🐶</Icon2>
                          </IconWrapper>
                          <TitleWrapper
                            onClick={() => moveTeamInfoHandler(team.teamId)}
                          >
                            <Title2>{team.name}</Title2>
                          </TitleWrapper>
                        </Item2>
                      ))}
                  </Div>
                </List>
              </Container>
            </Section>
            <Section>
              <Container>
                <TextWrapper>Create New Team</TextWrapper>
                <Input>
                  <Textfield
                    className="textfield"
                    placeholder="team name"
                    type="text"
                    value={createTeamName}
                    onChange={setCreateTeamNameHandler}
                  />
                </Input>
                <StyledButton onClick={() => createTeamHandler()}>
                  <Title3>Create</Title3>
                </StyledButton>
              </Container>
            </Section>
          </Wrapper>
        </IndexWrapper>
      )}
    </>
  );
}
