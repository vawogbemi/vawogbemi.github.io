import './Home.css';
import {Grid, GridItem } from "@chakra-ui/core"; 

function Home(props){
    return(
        <Grid templateColumns='repeat(5, [col-1] 20vw [col-5])' gap={0}>
            <GridItem colSpan={1} h="70vh" bg="#f58b57"/>
            <GridItem colSpan={3} h="70vh" bg="#f58b57">
                {/*<img id='One' src='One.jpg'></img>
                <img id='Zero' src='Zero.jpg'></img>*/}
                <div id ='lifeof'>
                    THE LIFE OF &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VICTOR
                    <br></br>
                    THE LIFE OF  &nbsp;&nbsp; VICTOR
                    <br></br>
                    THE LIFE OF  &nbsp;&nbsp; VICTOR
                    <br></br>
                    THE LIFE OF  &nbsp;&nbsp; VICTOR
                    <br></br>
                    THE LIFE OF  &nbsp;&nbsp; VICTOR
                    <br></br>
                    <br></br>
                    THE LIFE OF &nbsp;&nbsp;&nbsp;&nbsp; VICTOR
                    <br></br>
                    <br></br>
                </div>
                <div id='left'>
                    WHICH/ONE 
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                </div>
                <div id='right'>
                    WHICH/ONE 
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                    WHICH/ONE
                    <br></br>
                </div>
            </GridItem>
            <GridItem colSpan={1} h="70vh" bg="#f58b57"/>
            
        </Grid>
    )
}


export default Home