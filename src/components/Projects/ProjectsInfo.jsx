import { Title, Wrapper, Subtitle, Item, Image, Box, Link} from "./ProjectsInfo.styled"
import { AiFillGithub } from 'react-icons/ai';
import { BsFolderSymlink} from 'react-icons/bs';


const ProjectsInfo = ({ id, label, link, repo, preview, info, tech }) => {
    return (
        <>
        <Item> 
        <Box>
        <Title> {label}  </Title> 
        <Subtitle>{info} </Subtitle>
        <Image src={preview} alt={label}  loading="lazy" />
        <Wrapper> 
                        <Link href={link} target="_blank" rel="noreferrer" > <BsFolderSymlink size={50}  /> </Link>
                        <Link href={repo} target="_blank" rel="noreferrer" > <AiFillGithub size={50}  /> </Link>
        </Wrapper>
        </Box>
        </Item>
        
        </> )
}

export default ProjectsInfo;

