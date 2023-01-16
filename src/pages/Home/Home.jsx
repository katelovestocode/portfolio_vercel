import React from 'react'
import girl from "../../icons/profiles/hero_colorEdited.jpg"
import {FlexContainer, Title, SubTitle, Text} from "./Home.styled"
import { IoCaretForward } from "react-icons/io5"
import {Button, NavItem} from "../../utils/commonStyles"


const Home = () => {
    return (

  <main>
      <FlexContainer> 
       <div>                      
               <Title>  Hi, I'm Kate </Title>
               <SubTitle> Full Stack Developer</SubTitle>
               <Text> Thank you for stoping by at my website where you can find more information about me and work I do.</Text>

          <NavItem to="/about" key={"about"}> <Button>About_Me<IoCaretForward/> </Button> </NavItem>   
        </div>
          
               
        <div> <img src={girl} alt="busy girl" /></div>
      </FlexContainer>
                
  </main>
       
          
    ) }

export default Home;