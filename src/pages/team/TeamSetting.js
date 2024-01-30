import styled from "styled-components";
import useUserStore from "../../stores/user.store";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PATH_LOGIN,
  PATH_TEAM,
  PATH_TEAM_INFO,
  PATH_TEAM_INVITATION,
  PATH_TEAM_SETTING,
} from "../../constants";
import {
  teamDeleteTeamApi,
  teamDeleteTeamUserApi,
  teamGetTeamInfoApi,
  teamGetTeamsApi,
  teamInviteUserApi,
  teamUpdateTeamAdminApi,
  teamUpdateTeamNameApi,
  teamWithdrawTeamApi,
} from "../../apis/teamApis";

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
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const Title2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const Description = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
`;

const Section2 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0px 60px 60px 60px;
  position: relative;
  width: 100%;
`;

const Section3 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0px;
  position: relative;
  width: 100%;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const DivWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const Input = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
`;

const Title3 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  text-align: left;
`;

const Input2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 240px;
`;

const Textfield = styled.input`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 4px;
  padding: 8px 12px;
  position: relative;
  &:focus {
    outline: none;
    border-color: black;
    color: black;
  }
  &:hover {
    border-color: black;
  }
`;

const Title4 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 16px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Primary = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  position: relative;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title5 = styled.div`
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const PrimaryWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const TitleWrapper = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title6 = styled.div`
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function TeamSetting(props) {
  const { user } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const { teamId } = useParams();
  const navigate = useNavigate();

  const [teamList, setTeamList] = useState();
  const [teamInfo, setTeamInfo] = useState();
  const [inviteTeamUser, setInviteTeamUser] = useState("");
  const [deleteTeamUser, setDeleteTeamUser] = useState("");
  const [updateTeamName, setUpdateTeamName] = useState("");
  const [updateTeamAdmin, setUpdateTeamAdmin] = useState("");

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

  const setInviteTeamUserHandler = async (event) => {
    await setInviteTeamUser(event.target.value);
  };

  const inviteTeamUserHandler = async (id) => {
    const data = {
      username: inviteTeamUser,
    };
    const confirmed = window.confirm("멤버를 초대하시겠습니까?");
    if (confirmed) {
      const response = await teamInviteUserApi(id, data);
      if (response.status === 200) {
        navigate(PATH_TEAM_SETTING.replace(":teamId", id));
      } else {
        alert(response.message);
      }
    }
    setInviteTeamUser("");
  };

  const setDeleteTeamUserHandler = async (event) => {
    await setDeleteTeamUser(event.target.value);
  };

  const deleteTeamUserHandler = async (id) => {
    const data = {
      username: deleteTeamUser,
    };
    const confirmed = window.confirm("멤버를 강퇴하시겠습니까?");
    if (confirmed) {
      const response = await teamDeleteTeamUserApi(id, data);
      if (response.status === 200) {
        navigate(PATH_TEAM_SETTING.replace(":teamId", id));
      } else {
        alert(response.message);
      }
    }
    setDeleteTeamUser("");
  };

  const setUpdateTeamNameHandler = async (event) => {
    await setUpdateTeamName(event.target.value);
  };

  const updateTeamNameHandler = async (id) => {
    const data = {
      name: updateTeamName,
    };
    const confirmed = window.confirm("팀 이름을 변경하시겠습니까?");
    if (confirmed) {
      const response = await teamUpdateTeamNameApi(id, data);
      if (response.status === 200) {
        navigate(PATH_TEAM_INFO.replace(":teamId", id));
      } else {
        alert(response.message);
      }
    }
    setUpdateTeamName("");
  };

  const setUpdateTeamAdminHandler = async (event) => {
    await setUpdateTeamAdmin(event.target.value);
  };

  const updateTeamAdminHandler = async (id) => {
    const data = {
      username: updateTeamAdmin,
    };
    const confirmed = window.confirm("팀 관리자를 변경하시겠습니까?");
    if (confirmed) {
      const response = await teamUpdateTeamAdminApi(id, data);
      if (response.status === 200) {
        navigate(PATH_TEAM_INFO.replace(":teamId", id));
      } else {
        alert(response.message);
      }
    }
    setUpdateTeamAdmin("");
  };

  const deleteTeamHandler = async (id) => {
    const confirmed = window.confirm("팀을 삭제하시겠습니까?");
    if (confirmed) {
      const response = await teamDeleteTeamApi(id);
      if (response.status === 200) {
        navigate(PATH_TEAM);
      } else {
        alert(response.message);
      }
    }
  };

  const withdrawTeamHandler = async (id) => {
    const confirmed = window.confirm("팀에서 탈퇴하시겠습니까?");
    if (confirmed) {
      const response = await teamWithdrawTeamApi(id);
      if (response.status === 200) {
        navigate(PATH_TEAM);
      } else {
        alert(response.message);
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

  return (
    <>
      {teamInfo && teamList && (
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
            <Item
              onClick={() => moveTeamSettingHandler(teamInfo.id)}
              backgroundColor={"white"}
            >
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
          <Section>
            <Container>
              <TextWrapper>{teamInfo.name}</TextWrapper>
            </Container>
          </Section>
          <Section2>
            {userInfo.username === teamInfo.admin && (
              <>
                <Section3>
                  <Container2>
                    <Title2>Invite Member</Title2>
                    <DivWrapper>
                      <Input>
                        <Title3>Invite User Name</Title3>
                        <Input2>
                          <Textfield
                            value={inviteTeamUser}
                            onChange={setInviteTeamUserHandler}
                            placeholder="user name"
                          />
                          <Primary
                            onClick={() => inviteTeamUserHandler(teamInfo.id)}
                          >
                            <Title5>invite</Title5>
                          </Primary>
                        </Input2>
                      </Input>
                    </DivWrapper>
                  </Container2>
                </Section3>

                <Section3>
                  <Container2>
                    <Title2>Delete Member</Title2>
                    <DivWrapper>
                      <Input>
                        <Title3>Delete User Name</Title3>
                        <Input2>
                          <Textfield
                            value={deleteTeamUser}
                            onChange={setDeleteTeamUserHandler}
                            placeholder="user name"
                          />
                          <Primary
                            onClick={() => deleteTeamUserHandler(teamInfo.id)}
                          >
                            <Title5>delete</Title5>
                          </Primary>
                        </Input2>
                      </Input>
                    </DivWrapper>
                  </Container2>
                </Section3>
                <Section3>
                  <Container2>
                    <Title2>Update Team Name</Title2>
                    <DivWrapper>
                      <Input>
                        <Title3>New Team Name</Title3>
                        <Input2>
                          <Textfield
                            value={updateTeamName}
                            onChange={setUpdateTeamNameHandler}
                            placeholder="team name"
                          />
                          <Primary
                            onClick={() => updateTeamNameHandler(teamInfo.id)}
                          >
                            <Title5>update</Title5>
                          </Primary>
                        </Input2>
                      </Input>
                    </DivWrapper>
                  </Container2>
                </Section3>
                <Section3>
                  <Container2>
                    <Title2>Update Team Admin</Title2>
                    <DivWrapper>
                      <Input>
                        <Title3>New Team Admin</Title3>
                        <Input2>
                          <Textfield
                            value={updateTeamAdmin}
                            onChange={setUpdateTeamAdminHandler}
                            placeholder="user name"
                          />
                          <Primary
                            onClick={() => updateTeamAdminHandler(teamInfo.id)}
                          >
                            <Title5>update</Title5>
                          </Primary>
                        </Input2>
                      </Input>
                    </DivWrapper>
                  </Container2>
                </Section3>
                <Section3>
                  <Container2>
                    <Title2>Delete Team</Title2>
                    <DivWrapper>
                      <PrimaryWrapper>
                        <TitleWrapper
                          onClick={() => deleteTeamHandler(teamInfo.id)}
                        >
                          <Title6>delete</Title6>
                        </TitleWrapper>
                      </PrimaryWrapper>
                    </DivWrapper>
                  </Container2>
                </Section3>
              </>
            )}
            <Section3>
              <Container2>
                <Title2>Withdraw From Team</Title2>
                <DivWrapper>
                  <PrimaryWrapper>
                    <TitleWrapper
                      onClick={() => withdrawTeamHandler(teamInfo.id)}
                    >
                      <Title6>withdraw</Title6>
                    </TitleWrapper>
                  </PrimaryWrapper>
                </DivWrapper>
              </Container2>
            </Section3>
          </Section2>
        </IndexWrapper>
      )}
    </>
  );
}
