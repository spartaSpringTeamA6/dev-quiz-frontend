import React from "react";
import styled from "styled-components";
import {
  logo_devquiz,
  img_computer_science,
  img_database,
  img_design_pattern,
  img_java,
  img_jpa,
  img_spring,
} from "../../assets/images";

const Page = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 80px 0px 0px;
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
  font-family: "Roboto-Bold", Helvetica;
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
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px;
  position: relative;
  width: 1000px;
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

const List = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  width: 100%;
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

const Article = styled.button`
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
  background-color: white;
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
  font-family: "Roboto-Medium", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
`;

const Subtitle = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
`;

const Span = styled.span`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
`;

const Img = styled.img`
  height: 100px;
  object-fit: cover;
  position: relative;
  width: 99px;
`;

const ImageContainer2 = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100px;
`;

const Vector2 = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 708px;
  width: 1000px;
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
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 97px;
`;

const Title4 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 54px;
`;

const Title5 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 124px;
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

const DevquizLogo = styled.img`
  height: 60px;
  margin-bottom: -10px;
  margin-top: -10px;
  position: relative;
  width: 60px;
`;

const Title6 = styled.div`
  color: #000000;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
  width: 130px;
`;

const Navbar = styled.div`
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
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Title7 = styled.div`
  color: #000000;
  flex: 1;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
`;

const Button = styled.button`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  margin-bottom: -4px;
  margin-top: -4px;
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

const Title8 = styled.div`
  color: #ffffff;
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

export default function Home() {
    return (
      <Page>
        <Div>
          <Container>
            <TextWrapper>Categories</TextWrapper>
            <List>
              <Row>
                <Article>
                  <ImageContainer>
                    <Image>
                      <Img alt="Computer Science" src={img_computer_science} />
                    </Image>
                  </ImageContainer>
                  <Frame>
                    <Title2>Computer Science</Title2>
                    <Subtitle>Test your Computer Science knowledge</Subtitle>
                  </Frame>
                </Article>
                <Article>
                  <ImageContainer>
                    <Image>
                      <Img alt="Design Pattern" src={img_design_pattern} />
                    </Image>
                  </ImageContainer>
                  <Frame>
                    <Title2>Design Pattern</Title2>
                    <Subtitle>Test your Design Pattern knowledge</Subtitle>
                  </Frame>
                </Article>
              </Row>
              <Row>
                <Article>
                  <ImageContainer>
                    <Image>
                      <Img alt="Database" src={img_database} />
                    </Image>
                  </ImageContainer>
                  <Frame>
                    <Title2>Database</Title2>
                    <Subtitle>Test your Database knowledge</Subtitle>
                  </Frame>
                </Article>
                <Article>
                  <ImageContainer>
                    <Image>
                      <Img alt="Java" src={img_java} />
                    </Image>
                  </ImageContainer>
                  <Frame>
                    <Title2>Java</Title2>
                    <Subtitle>Test your Java knowledge</Subtitle>
                  </Frame>
                </Article>
              </Row>
              <Row>
                <Article>
                  <ImageContainer>
                    <Image>
                      <Img alt="Spring" src={img_spring} />
                    </Image>
                  </ImageContainer>
                  <Frame>
                    <Title2>Spring</Title2>
                    <Subtitle>Test your Spring knowledge</Subtitle>
                  </Frame>
                </Article>
                <Article>
                  <ImageContainer2>
                    <Image>
                      <Img alt="JPA" src={img_jpa} />
                    </Image>
                  </ImageContainer2>
                  <Frame>
                    <Title2>JPA</Title2>
                    <Subtitle>Test your JPA knowledge</Subtitle>
                  </Frame>
                </Article>
              </Row>
            </List>
          </Container>
          <Vector2 alt="Vector" src="vector-200-2.svg" />
        </Div>
        
      </Page>
    );
  }
  
  
