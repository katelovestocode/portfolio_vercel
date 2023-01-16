import profilePicture from "../../icons/profiles/profilePictureEdit.jpg"
import { Button, NavItem, } from "../../utils/commonStyles"
import { Box, LeftBox, RightBox, TextBox, TitleText, Text} from "./AboutMe.styled"
import { IoCaretForward } from "react-icons/io5"
import TechSkills from "../../components/TechSkills/TechSkills"


const AboutMe = () => {

  return (

<main>  
    <Box > 
   
      <LeftBox >
      <img src={profilePicture}  alt='Kate Vaskevich' />
      </LeftBox>
                
      <RightBox >
      <TextBox>
      <TitleText> Hi, there. </TitleText>
        <Text>  I love programming and didn't realize it until I decided to commit myself to a one-year course. And now I can't get enough of it.
          I am a full stack developer with MERN (Mongo, Express, React, Node.js) web-development stack. I enjoy back-end development as well as front-end. 
           I am highly organized, proactive and punctual with a team-oriented mentality. You can see my projects on the next page as well as you can connect and discuss opportunities on the Contact me page. I am looking forward to hearing from you.
        </Text>  
        </TextBox>
          
      <NavItem to="/projects" key={"projects"}> <Button>Projects<IoCaretForward /> </Button></NavItem>
      </RightBox>   
    </Box>
        
    <TechSkills/>
 
    </main>)
}


export default AboutMe;