import React from "react";
import styled from 'styled-components';

const StyledPage = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 80px 0px 0px;
  position: relative;
`;

const TopBar = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 6px #0000001f;
  display: flex;
  gap: 20px;
  height: 80px;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 1440px;
`;

const Rectangle = styled.div`
  background-color: #0000001a;
  border-radius: 100px;
  height: 40px;
  position: relative;
  width: 40px;
`;

const StyledTitle = styled.div`
  color: #000000;
  flex: 1;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
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

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Roboto-Bold", Helvetica;
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
  font-family: "Roboto-Regular", Helvetica;
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

const Div = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
`;

const TextField = styled.div`
  align-self: stretch;
  background-color: #FFFFFF;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
`;

const Button = styled.div`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
`;

const Primary = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
`;

const Title2 = styled.div`
  color: #FFFFFF;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Image = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 216px;
  width: 1440px;
`;

const PrimaryWrapper = styled(Button)`
  /* 스타일을 Button 컴포넌트로부터 상속 */
`;

const TitleWrapper = styled(Primary)`
  /* 스타일을 Primary 컴포넌트로부터 상속 */
`;

const Vector2 = styled(Image)`
  /* 스타일을 Image 컴포넌트로부터 상속 */
  top: 240px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 64px;
`;

const Text = styled.div`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function PageComponent() {
  return (
    <StyledPage>
      <Section>
        <Container>
          <TextWrapper>팀 관리</TextWrapper>
          <Description>팀 상세 정보와 관리 기능을 제공합니다.</Description>
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>팀에 유저 초대</TextWrapper>
          <Input>
            <Div>초대할 유저 이메일</Div>
            <TextField />
          </Input>
          <Button>
            <Primary>
              <Title2>저장</Title2>
            </Primary>
          </Button>
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>팀 이름 변경</TextWrapper>
          <Input>
            <Div>새로운 팀 이름</Div>
            <TextField />
          </Input>
          <PrimaryWrapper>
            <TitleWrapper>
              <Title2>변경</Title2>
            </TitleWrapper>
          </PrimaryWrapper>
          <Image alt="Vector" src="vector-200-2.svg" />
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>팀 관리자 변경</TextWrapper>
          <PrimaryWrapper>
            <TitleWrapper>
              <Title2>변경</Title2>
            </TitleWrapper>
          </PrimaryWrapper>
          <Vector2 alt="Vector" src="vector-200-3.svg" />
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>팀 멤버 추방</TextWrapper>
          <Selection>
            <Div>추방할 멤버 이름</Div>
            <ChipGroup>
              <Chip>
                <Text>멤버 1</Text>
              </Chip>
              <Chip>
                <Text>멤버 2</Text>
              </Chip>
              <Chip>
                <Text>멤버 3</Text>
              </Chip>
            </ChipGroup>
          </Selection>
          <PrimaryWrapper>
            <TitleWrapper>
              <Title2>추방</Title2>
            </TitleWrapper>
          </PrimaryWrapper>
          <Image alt="Vector" src="vector-200-4.svg" />
        </Container>
      </Section>
      <Section>
        <Container>
          <TextWrapper>팀 삭제</TextWrapper>
          <Input>
            <Div>팀 삭제 확인</Div>
            <TextField />
          </Input>
          <PrimaryWrapper>
            <TitleWrapper>
              <Title2>삭제</Title2>
            </TitleWrapper>
          </PrimaryWrapper>
          <Image alt="Vector" src="vector-200-5.svg" />
        </Container>
      </Section>
    </StyledPage>
  );
}
