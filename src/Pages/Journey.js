
import { Container, Segment, Header, Grid, Divider, Icon, Image, Modal } from "semantic-ui-react"
// import SlideShowComponent from "../Components/ImageSlide"
import { TitleSection } from "../Helper"
import journeyJSON from '../Data/Journey.json'
import { useState } from "react"
import cert1 from '../Assets/sitefinity.png'
import cert2 from '../Assets/kominfo.png'

const Journey = (props) =>{
    const [journeyList] = useState(journeyJSON)
    let firstArr = journeyJSON.first_section
    const [journeyListAll] = useState(firstArr.concat(journeyJSON.second_section))
    const certificate = [cert1, cert2]

    const generateInfo = (data, k) =>{
        return(
            <li key={k}>
                <div className="timelineColumn">
                    <div className={(k+1)%2!==0 ? "timelineIcon" : "timelineIcon left"}>
                        <Icon name={data.type === "job" ? "suitcase" : "graduation cap"}/>
                    </div>
                    <div className={(k+1)%2!==0 ? "timelineInfo" : "timelineInfo left"}>
                        <Header as="h2">
                            <p dangerouslySetInnerHTML={{__html: data.period}}/>
                            {data.title}
                        </Header>
                        <p dangerouslySetInnerHTML={{__html: data.description}}/>
                    </div>
                </div>
            </li>
        )
    }
    return(
        <Segment basic className="journeyWrapper">
            <Container textAlign="center">
                <TitleSection text="Employment & Education"/>
                <Header as="h1" className="largeTitleSectionOther">
                    My Experience Journey
                </Header>
            </Container>
            <Divider hidden/>
            <Divider hidden/>
            <Container>
                <Grid columns={'equal'} id="journeyImage">
                    <Grid.Column className="mobileOnly">
                        <ul className="journeyTimeline">
                            {journeyListAll.map((v, k)=>
                                generateInfo(v, k)
                            )}
                        </ul>
                    </Grid.Column>
                    <Grid.Column className="desktopOnly">
                        <ul className="journeyTimeline">
                            {journeyList.first_section.map((v, k)=>
                                generateInfo(v, k)
                            )}
                        </ul>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column className="desktopOnly">
                        <ul className="journeyTimeline">
                            {journeyList.second_section.map((v, k)=>
                                generateInfo(v, k)
                            )}
                        </ul>
                    </Grid.Column>

                    <Grid.Row columns={4}>
                        <Grid.Column width={16}>
                        <Header inverted as="h3">
                            <Icon name="file alternate"/> Certificate
                        </Header>
                        <Divider hidden/>
                        </Grid.Column>
                        {certificate.map((v, k)=>
                        <Modal key={k} closeIcon trigger={<Grid.Column className="certificateImage">
                        <Image src={v}/>
                        </Grid.Column>}>
                            <Image src={v}/>
                        </Modal>
                        )}
                        <Grid.Column/>

                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Journey