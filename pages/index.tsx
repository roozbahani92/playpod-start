import type { NextPage } from 'next';
import styled from "styled-components";
import Image from "next/image";
import Illustration  from './assets/test.svg';



const Title = styled.h1`
  color: red;
`;


const Home: NextPage = () => {
  return (
    <>
      <Title>
        Hello World!
      </Title>
      <Image src="/test.svg" height={100} width={100} alt="An SVG of an eye"/>
      <Illustration height={100} width={100} title={"An SVG of an eye"}/>
    </>
  )
}

export default Home;
