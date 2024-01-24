import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import useUserStore from "../../stores/user.store";
import { useParams } from "react-router-dom";
import { teamGetTeamsApi } from "../../apis/teamApis";

const Wrap = styled.div`
  padding: 80px 0;
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
  padding: 12px 0px;
  height: 100%;
  left: 0;
  position: absolute;
  top: -10px;
  width: 220px;
`;

const Item = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
  width: 100%;
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
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Description = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const List = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 40px 40px;
  padding: 20px 0px;
  position: relative;
  width: 100%;
`;

const Div = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 40px;
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
  width: 200px;
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

const TitleWrapper = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Title2 = styled.div`
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
`;

const Button = styled.button`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Primary = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
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

export default function TeamList() {
  const [cookies] = useCookies();
  const { user } = useUserStore();
  // const [userToken, setUserToken] = useState("");

  const { teamId } = useParams();

  const [teams, setTeams] = useState();

  useEffect(() => {
    console.log("teams ", teams);
  }, [teams]);

  useEffect(() => {
    const getTeamsHandler = async () => {
      const getTeams = await teamGetTeamsApi(user.userId);
      setTeams(getTeams.data.teamInfoList);
    };

    getTeamsHandler();
  }, []);

  return (
    <>
      {user !== null && (
        <IndexWrapper>
          <Sidebar>
            <Item>
              <Frame>
                <Icon>🐶</Icon>
              </Frame>
              <Title>Teams</Title>
            </Item>
          </Sidebar>
          <Wrap>
            <Section>
              <Container>
                <TextWrapper>My Teams</TextWrapper>
                <Description>List of teams you are part of</Description>

                <List>
                  {teams !== undefined &&
                    teams.map((team, index) => (
                      <Div key={index}>
                        <Item2>
                          <IconWrapper>
                            <Icon2>🐶</Icon2>
                          </IconWrapper>
                          <TitleWrapper>
                            <Title2>{team.name}</Title2>
                          </TitleWrapper>
                        </Item2>
                      </Div>
                    ))}
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
                  />
                </Input>
                <Button>
                  <Primary>
                    <Title3>Create</Title3>
                  </Primary>
                </Button>
              </Container>
            </Section>
          </Wrap>
        </IndexWrapper>
      )}
    </>
  );
}
