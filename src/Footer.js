import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from "@chakra-ui/core"; 
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const linkeidn = <a href='https://www.linkedin.com/in/victor-a-793612133/'> <FontAwesomeIcon icon={faLinkedin} size = '2x'/> </a>
const github  =  <a href='https://github.com/victorawogbemi'> <FontAwesomeIcon icon={faGithub} size='2x'/> </a> 

function Footer(props){
    return(
        <Box id='icons' h="15vh" w='100%' bg="#f58b57">
            {linkeidn}
            {github}
        </Box>
    )
    
}
export default Footer