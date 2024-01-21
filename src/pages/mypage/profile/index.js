import styled from "styled-components";

const SectionContainer = styled.div`
  align-self: stretch;
  padding: 60px 170px;
  justify-content: center;
  align-items: center;
  gap: 60px;
  display: inline-flex;
`;

const Divider = styled.div`
  width: 1440px;
  height: 0;
  border: 1px rgba(0, 0, 0, 0.1) solid;
`;

const ContentContainer = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: inline-flex;
`;

const WelcomeText = styled.div`
  width: 865px;
  height: 36px;
  text-align: center;
  color: black;
  font-size: 40px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`;

export default function Profile() {
  return (
    <>
      <SectionContainer>
        <Divider />
        <ContentContainer>
          <WelcomeText>Welcome to DevQuiz</WelcomeText>
        </ContentContainer>
      </SectionContainer>
    </>
  );
}
