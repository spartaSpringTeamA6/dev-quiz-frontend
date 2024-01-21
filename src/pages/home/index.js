import React from "react";
import styled from "styled-components";

import {
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

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  position: relative;
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
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: black;
  }
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
      </Div>
    </Page>
  );
}
