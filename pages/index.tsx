import type { NextPage } from 'next';
import styled from "styled-components";


const Title = styled.h1`
  color: red;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Title>
        Hello World!
      </Title>
    </Container>
  )
}

export default Home;
