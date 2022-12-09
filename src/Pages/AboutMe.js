import { CardGroup, Container, Grid, Segment, Card, Header, Divider, Button, Icon, Transition } from "semantic-ui-react"
import { TitleSection } from "../Helper"
import {useState, useEffect} from 'react'
import aboutJSON from '../Data/About.json'

const AboutMe = (props) =>{
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    useEffect(()=>{
        if(props.isAnimated){
            setTimeout(()=>{
                setShow(true)
            }, 500)
    
            setTimeout(()=>{
                setShow2(true)
            }, 800)
    
            setTimeout(()=>{
                setShow3(true)
            }, 1100)
    
            setTimeout(()=>{
                setShow4(true)
            }, 1400)
        }
    })
    

    return(
        <Segment basic className="aboutMeWrapper">
            <Container>
                <Grid columns='equal'>
                    <Grid.Column>
                        <CardGroup itemsPerRow={2}>
                            {aboutJSON.summary.map((v, k)=>
                                <Transition key={k} visible={k === 0 ? show : k === 1 ? show2 : k === 2 ? show3 : show4} duration={500} animation='fade right'>
                                    <Card fluid header={v.total+'+'} description={v.title}/>
                                </Transition>
                            )}
                        </CardGroup>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column>
                        <TitleSection text="About Me"/>
                        <Header as="h1" className="largeTitleSectionOther">
                            Coding is Fun!
                        </Header>
                        <Header as="h2" inverted className="subHeaderDesc">
                        A Lead Frontend Developer, Software Engineer, Fullstack Developer & Web Designer, with 7+ Years of Experience
                        </Header>
                        <p className="descSection">Very positive person, hard working, totally committed to excellence and also someone who wants to continually improve and develop my skillset. i’m professional, i’m able to always follow rules and procedures. i would also describe myself as somebody who is fast learner.</p>
                        
                        <Divider hidden/>
                        <Button primary className="holo" size="big" icon labelPosition="right" onClick={()=>window.open('https://mail.natakraf.com/dir/CV.pdf', '_blank')}>
                            DOWNLOAD CV <Icon name="download"/>
                        </Button>
                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>
    )
}

export default AboutMe
