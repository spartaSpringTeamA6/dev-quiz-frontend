import React from "react";
import styled from "styled-components";

// Styled Components 정의
const IndexWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 220px;
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

const Item = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  width: 100%;
`;

const Frame = styled.div`
  background-color: #0000000d;
  border-radius: 12px;
  height: 24px;
  width: 24px;
`;

const Icon = styled.div`
  color: #000000;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  flex: 1;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  padding: 60px;
  width: 800px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  width: 520px;
  line-height: 48px;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 600px;
`;

const Title2 = styled.div`
  color: #000000;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  width: 520px;
`;

const Description = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

const Img = styled.img`
  height: 1px;
  left: 0;
  position: absolute;
  top: 216px;
  width: 1220px;
`;

const Section2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  padding: 60px;
  width: 100%;
`;

const Section3 = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  padding: 60px 170px;
  width: 100%;
`;

const Container3 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 600px;
`;

const DivWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: center;
  width: 600px;
`;

const Input = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;

const Title3 = styled.div`
  align-self: stretch;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

const Input2 = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 240px;
`;

const Textfield = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 6px;
  display: flex;
  flex-grow: 1;
  gap: 4px;
  padding: 8px 12px;
`;

const Title4 = styled.div`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

const Primary = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Title5 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

const Vector2 = styled.img`
  height: 1px;
  left: 0;
  position: absolute;
  top: 252px;
  width: 1100px;
`;

export default function GroupSetting() {
  return (
    <IndexWrapper>
      <Sidebar>
        <Item>
          <Frame>
            <Icon>😃</Icon>
          </Frame>
          <Title>Groups</Title>
        </Item>
        <Item>
          <Frame>
            <Icon>👥</Icon>
          </Frame>
          <Title>Members</Title>
        </Item>
        <div />
        <Item>
          <Frame>
            <Icon>⚙️</Icon>
          </Frame>
          <Title>Settings</Title>
        </Item>
      </Sidebar>
      <Section>
        <Container>
          <TextWrapper>Group Name</TextWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <Container2>
            <Title2>Group Setting</Title2>
            <Description>Group Setting</Description>
          </Container2>
        </Container>
      </Section>
      <Section2>
        <Section3>
          <Container3>
            <Title2>Invite Member</Title2>
            <DivWrapper>
              <Input>
                <Title3>Invite User Name</Title3>
                <Input2>
                  <Textfield>
                    <Title4>ddd</Title4>
                  </Textfield>
                  <Primary>
                    <Title5>invite</Title5>
                  </Primary>
                </Input2>
              </Input>
            </DivWrapper>
          </Container3>
        </Section3>
        <Section3>
          {/* Delete Member Section */}
          {/* Update Group Name Section */}
          {/* Update Group Admin Section */}
          {/* Delete Group Section */}
          {/* Withdraw From Group Section */}
        </Section3>
      </Section2>
    </IndexWrapper>
  );
}
