import React from "react";
import styled from "styled-components";

const Page = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 936px;
  padding: 80px 0px 0px;
  position: relative;
`;

const TopBar = styled.div`
  align-items: center;
  background-color: #ffffff;
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
  font-family: 'Roboto-Medium', Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
`;

const Navigation = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  position: relative;
`;

const Tab = styled.div`
  color: #000000;
  font-family: 'Roboto-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
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
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  position: relative;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: 'Roboto-Bold', Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
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

const Div = styled.div`
  color: #ffffff;
  font-family: 'Roboto-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const List = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 40px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
`;

const Row = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
  width: 100%;
`;

const Article = styled.div`
  align-items: flex-start;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 16px;
  justify-content: center;
  padding: 16px;
  position: relative;
`;

const ImageContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100px;
  position: relative;
  width: 100px;
`;

const Image = styled.div`
  align-self: stretch;
  background-color: #d8d8d880;
  flex: 1;
  flex-grow: 1;
  position: relative;
`;

const Frame = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  position: relative;
`;

const Title2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: 'Roboto-Medium', Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
`;

const Subtitle = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: 'Roboto-Regular', Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
`;

const Vector = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 636px;
  width: 1440px;
`;

const ContainerWrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  padding: 60px;
  position: relative;
  width: 100%;
`;

const Container2 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 60px;
  height: 100px;
  justify-content: center;
  position: relative;
`;

const Title3 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: 'Roboto-Regular', Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 157px;
`;

const Title4 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: 'Roboto-Regular', Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 166px;
`;

export default function teamSetup() {
  return (
    <Page>
      <Section>
        <Container>
          <TextWrapper>팀 상세 정보</TextWrapper>
          <Primary>
            <Div>관리</Div>
          </Primary>
        </Container>
        <List>
          <Row>
            <Article>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <Frame>
                <Title2>팀 이름</Title2>
                <Subtitle>팀명</Subtitle>
              </Frame>
            </Article>
          </Row>
          <Row>
            <Article>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <Frame>
                <Title2>팀 관리자</Title2>
                <Subtitle>관리자명</Subtitle>
              </Frame>
            </Article>
          </Row>
          <Row>
            <Article>
              <ImageContainer>
                <Image />
              </ImageContainer>
              <Frame>
                <Title2>팀 멤버</Title2>
                <Subtitle>멤버 수</Subtitle>
              </Frame>
            </Article>
          </Row>
        </List>
        <Vector alt="Vector" src="vector-200.svg" />
      </Section>
    </Page>
  );
}