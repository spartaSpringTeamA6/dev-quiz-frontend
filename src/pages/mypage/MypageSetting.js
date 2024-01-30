import { useEffect, useState } from "react";
import styled from "styled-components";
import useUserStore from "../../stores/user.store";
import { useNavigate } from "react-router-dom";
import { PATH_MYPAGE } from "../../constants";
import { userGetMyInfoApi, userUpdateInfoApi } from "../../apis/userApis";
import { skillGetSkillsApi } from "../../apis/skillApis";

const IndexWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
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
  padding: 60px 170px;
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

const Title = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  height: 36px;
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 865px;
`;

const Vector = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 156px;
  width: 1440px;
`;

const Div = styled.div`
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

const Avatar = styled.div`
  background-color: #d8d8d880;
  border-radius: 50px;
  height: 100px;
  position: relative;
  width: 100px;
`;

const Icon = styled.div`
  color: #000000;
  display: flex;
  font-size: 64px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 560px;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  text-align: left;
`;

const ChipGroup = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: inline-flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Chip = styled.button`
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#0000000d"};
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  position: relative;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  color: ${(props) => props.color || "#000000"};
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const DivWrapper = styled.div`
  align-items: center;
  background-color: #0000000d;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 64px;
`;

const Button = styled.div`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100px;
`;

const Button2 = styled.div`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Secondary = styled.button`
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

const Title2 = styled.div`
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

const Img = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 220px;
  width: 1440px;
`;

const Section2 = styled.div`
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

const Container3 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 1000px;
`;

const Title3 = styled.div`
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

const Description = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Input = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 600px;
`;

const Title4 = styled.div`
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

const Textfield = styled.input`
  align-items: center;
  align-self: stretch;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 0 0 auto;
  gap: 4px;
  padding: 8px 12px;
  position: relative;
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

const Text2 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #00000080;
  display: -webkit-box;
  flex: 1;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  width: 160px;
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
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Vector2 = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 372px;
  width: 1440px;
`;

const Selection = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 600px;
`;

const Info = styled.div`
  align-self: stretch;
  color: #00000080;
  font-family: "Roboto", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16px;
  position: relative;
`;

const ChipGroup2 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 8px 8px;
  position: relative;
  width: 100%;
`;

const Chip2 = styled.div`
  align-items: center;
  background-color: #00000099;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  position: relative;
`;

const Text3 = styled.div`
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Vector3 = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 392px;
  width: 1440px;
`;

export default function MyPageSetting() {
  const { user, setUser } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const [updateMyName, setUpdateMyName] = useState("");
  const [skills, setSkills] = useState("");
  const [changeSkills, setChangeSkills] = useState([]);

  const moveMypageHandler = () => {
    navigate(PATH_MYPAGE);
  };

  const setUpdateMyNameHandler = async (event) => {
    await setUpdateMyName(event.target.value);
  };

  const updateMyNameHandler = async () => {
    const data = {
      username: updateMyName,
      skillList: changeSkills,
    };
    const response = await userUpdateInfoApi(userInfo.userId, data);

    if (response.status === 200) {
      const getMyInfo = await userGetMyInfoApi();
      if (response.status === 200) {
        setUser(getMyInfo.data);
      }
    } else {
      alert(response.message);
    }
    setUpdateMyName("");
  };

  const getSkillsHandler = async () => {
    const response = await skillGetSkillsApi();
    if (response.status === 200) {
      setSkills(response.data);
      if (userInfo) {
        const mySkills = userInfo.skillList.map((skill) => skill.userSkill);
        setChangeSkills(mySkills);
      }
    } else {
      alert(response.message);
    }
  };

  useEffect(() => {
    console.log(changeSkills);
  }, [changeSkills]);

  const changeSkillHandler = (skill) => {
    if (changeSkills.includes(skill)) {
      setChangeSkills(changeSkills.filter((item) => item !== skill));
    } else {
      setChangeSkills([...changeSkills, skill]);
    }
  };

  useEffect(() => {
    getSkillsHandler();
  }, [userInfo]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {userInfo && (
        <IndexWrapper>
          <Section>
            <Container>
              <Title>Welcome to DevQuiz</Title>
            </Container>
          </Section>
          <Div>
            <Avatar>
              <Icon>🧑🏻‍💻</Icon>
            </Avatar>
            <Container2>
              <TextWrapper>{userInfo.username}</TextWrapper>
              <ChipGroup>
                {userInfo.skillList !== null &&
                  userInfo.skillList.map((skill, index) => (
                    <Chip key={index}>
                      <Text>{skill.userSkill}</Text>
                    </Chip>
                  ))}
              </ChipGroup>
            </Container2>
            <Button>
              <Button2>
                <Secondary onClick={() => moveMypageHandler()}>
                  <Title2>Save</Title2>
                </Secondary>
              </Button2>
            </Button>
          </Div>
          <Section2>
            <Container3>
              <Title3>Change Username</Title3>
              <Description>Update your username</Description>
              <Input>
                <Textfield
                  value={updateMyName}
                  onChange={setUpdateMyNameHandler}
                  placeholder="Enter your new username"
                />
              </Input>
              <Button2>
                <Primary onClick={() => updateMyNameHandler()}>
                  <Title5>Save</Title5>
                </Primary>
              </Button2>
            </Container3>
          </Section2>
          <Section2>
            <Container3>
              <Title3>Choose Skills</Title3>
              <Description>Select your skills</Description>
              <Selection>
                <ChipGroup2>
                  {skills &&
                    changeSkills &&
                    skills.map((skill, index) => (
                      <Chip
                        key={index}
                        backgroundColor={
                          changeSkills.includes(skill) && "black"
                        }
                        onClick={() => changeSkillHandler(skill)}
                      >
                        <Text color={changeSkills.includes(skill) && "white"}>
                          {skill}
                        </Text>
                      </Chip>
                    ))}
                </ChipGroup2>
              </Selection>
              <Button2>
                <Primary onClick={() => updateMyNameHandler()}>
                  <Title5>Save</Title5>
                </Primary>
              </Button2>
            </Container3>
          </Section2>
        </IndexWrapper>
      )}
    </>
  );
}
