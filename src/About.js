import { Grid, GridItem} from '@chakra-ui/core';
import './About.css';

function About(props){
    return(
        <Grid templateColumns='repeat(5, [col-1] 20vw [col-5])' gap={0}>
            <GridItem colSpan={1} h="70vh" bg="#f58b57"/>
            <GridItem colSpan={3} h="70vh" bg="#f58b57">
                <h1>ABOUT ME</h1>
                <p>
                    Hi, I'm Victor. I'm in my 3rd year at the University of Ottawa. 
                    Some of the things I love are cooking, listening to music and reading novels. I'm interested in data engineering, data visualization and distributed systems.
                    Last summer I worked at a small logistics company, building a backend app to automate their email marketing outreach.
                    Next summer I will be working as a data engineering intern at Facebook.
                    Right now I'm looking for internship opportunities remote or in Canada for winter/spring 2021.
                </p>
                <h1>ABOUT SITE</h1>
                <p>
                    As you've guessed the site is inspired by my favourite artist Kanye West. This site was made with React and is still a WIP, I plan on adding more
                    detail later.
                </p>
                
            </GridItem>
            <GridItem colSpan={1} h="70vh" bg="#f58b57"/>
        </Grid>
    )
}

export default About