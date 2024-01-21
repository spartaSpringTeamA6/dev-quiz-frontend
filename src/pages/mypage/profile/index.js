import React from "react";
import styled from "styled-components";

const Index = styled.div`
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

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 560px;
`;

const TextWrapper = styled.div`
  text-align: left;
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

const ChipGroup = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Chip = styled.div`
  align-items: center;
  background-color: #0000000d;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8px 10px;
  position: relative;
`;

const Text = styled.div`
  color: #000000;
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

const Button = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 160px;
`;

const Button2 = styled.div`
  align-items: flex-start;
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
  width: 100px;

  &:focus {
    outline: none;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const Title3 = styled.div`
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

const Title4 = styled.div`
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

const List = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  width: 70%;
  margin: 0 auto;
`;

const Metric = styled.div`
  align-items: flex-start;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 200px;
`;

const Title5 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  color: #00000080;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Data = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 28px;
  font-weight: 500;
  height: 36px;
  letter-spacing: 0;
  line-height: 36px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Change = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 30px;
`;

const ContainerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 600px;
`;

const Container4 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 600px;
`;

const Title6 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  padding: 0 0 48px 0;
  position: relative;
  text-align: center;
`;

const Section3 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 20px 20px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  width: 100%;
`;

const TextWrapper2 = styled.button`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    font-weight: 600;
  }
`;

const Container5 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
`;

export default function Profile() {
  return (
    <Index>
      <Section>
        <Container>
          <Title>Welcome to DevQuiz</Title>
        </Container>
      </Section>
      <Div>
        <Avatar />
        <Container2>
          <TextWrapper>User</TextWrapper>
          <ChipGroup>
            <Chip>
              <Text>Programming</Text>
            </Chip>
            <Chip>
              <Text>Design</Text>
            </Chip>
            <Chip>
              <Text>Writing</Text>
            </Chip>
            <Chip>
              <Text>Marketing</Text>
            </Chip>
          </ChipGroup>
        </Container2>
        <Button>
          <Button2>
            <Secondary>
              <Title2>Edit</Title2>
            </Secondary>
            <Primary>
              <Title3>Log out</Title3>
            </Primary>
          </Button2>
        </Button>
      </Div>
      <Section2>
        <Container3>
          <Title4>User Status</Title4>
          <List>
            <Metric>
              <Title5>Solve</Title5>
              <Data>341</Data>
            </Metric>
            <Metric>
              <Title5>Fail</Title5>
              <Data>12</Data>
            </Metric>
            <Metric>
              <Title5>Pass</Title5>
              <Data>4</Data>
            </Metric>
          </List>
        </Container3>
      </Section2>
      <Section>
        <ContainerWrapper>
          <Container4>
            <Title6>맞은 문제</Title6>
            <Section3>
              <TextWrapper2>222</TextWrapper2>
            </Section3>
          </Container4>
        </ContainerWrapper>
      </Section>
      <Section>
        <Container5>
          <Title6>틀린 문제</Title6>
          <Section3>
            <TextWrapper2>222</TextWrapper2>
          </Section3>
        </Container5>
      </Section>
      <Section>
        <ContainerWrapper>
          <Container4>
            <Title6>모르는 문제</Title6>
            <Section3>
              <TextWrapper2>222</TextWrapper2>
            </Section3>
          </Container4>
        </ContainerWrapper>
      </Section>
    </Index>
  );
}
