import { personalProjects, teamProjects } from "../../utils/projects";
import { Title, List, Main } from "../Projects/Projects.styled";
import Container from "../../components/Container/Container"
import ProjectsInfo from "../../components/Projects/ProjectsInfo"



const Projects = () => {
    return (
        <Main> 
        <Container> 
        <Title> 
            [ Personal Projects] 
        </Title>
        
        <List> 
      
        
                {personalProjects.map(({ id, label, link, repo, preview, info, tech }) => (
                    <ProjectsInfo key={id} label={label} link={link} repo={repo} preview={preview} info={info} tech={tech} />
                ))}

        </List>
      
        <Title> [ Team Projects ] </Title>
        <List>
              
                    {teamProjects.map(({ id, label, link, repo, preview, info, tech }) => (
                    <ProjectsInfo key={id} label={label} link={link} repo={repo} preview={preview} info={info} tech={tech} />
                ))}
        
        </List>

            </Container>
            </Main>
    )
}


export default Projects;