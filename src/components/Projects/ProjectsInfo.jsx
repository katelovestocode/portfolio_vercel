import { Title, Wrapper, Subtitle, Item, Image, Box, Link, Tech, TechItem} from "./ProjectsInfo.styled"
import { AiFillGithub } from 'react-icons/ai';
import { BsFolderSymlink} from 'react-icons/bs';


const ProjectsInfo = ({ id, label, link, repo, preview, info, tech }) => {
    return (
        <>
        <Item> 
        <Box>
        <Title> {label}  </Title> 
        
        <Image src={preview} alt={label}  loading="lazy" />
        <Wrapper> 
                        <Link href={link} target="_blank" rel="noreferrer" > <BsFolderSymlink size={50}  /> </Link>
                        <Link href={repo} target="_blank" rel="noreferrer" > <AiFillGithub size={50}  /> </Link>
        </Wrapper>
              
        
        </Box>
            <Subtitle>{info} </Subtitle>     
        <Tech>
          {tech.map(({ id, name }) => (
            <TechItem key={id}>[{name}]</TechItem>
          ))}
        </Tech>
        </Item>
        
        </> )
}

export default ProjectsInfo;

