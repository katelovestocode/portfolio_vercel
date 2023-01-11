import React from 'react'
import girl from "../../icons/hero_colorEdited.jpg"
import  Container from "../../components/Container/Container"
import {FlexContainer, Title, SubTitle, Text} from "./Home.styled"
import { IoCaretForward } from "react-icons/io5"


const Home = () => {
    return (

      <main>
        <Container> 
        <FlexContainer> 
               <div> 
               <Title> Hi, I'm Kate</Title>
               <SubTitle> Full Stack Developer</SubTitle>
               <Text> Thank you for stoping by at my website where you can find more information about me and work I do.</Text>
                <button> Portfolio
                <span> <IoCaretForward /> </span>
                </button> 
                </div>
               
               
                <div> <img src={girl} alt="busy girl" /></div>


               </FlexContainer>
                
        </Container>
 </main>
       
          
    ) }

export default Home;