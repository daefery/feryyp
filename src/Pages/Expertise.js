import { Container, Segment, Header, Grid, Progress, Transition, Icon, Divider } from "semantic-ui-react"
import { TitleSection } from "../Helper"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import expertiseJSON from '../Data/Expertise.json'

const Expertise = () =>{
    return(
        <Segment basic className="expertiseWrapper">
            <Container>
                <Grid columns="equal">
                <Grid.Column>
                        <TitleSection text="Expertise"/>
                        <Header as="h1" className="largeTitleSectionOther">
                            My Skills & Personality
                        </Header>
                        <Header as="h2" inverted className="subHeaderDesc">Every Day is a New Challenge</Header>
                        <p className="descSection">I keep developing myself by taking many courses and trainings, not only for my hard skill but also my personality, how to be a leader for our self and can bring the positive to others.</p>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column>
                        <Header as="h3" inverted>
                            <Icon name="id badge"/> Soft Skills
                        </Header>

                        {expertiseJSON.soft_skills.map((v, k)=>
                        // <Transition key={k} visible={show} duration={500} animation='fade right'>
                        //     <div>
                        //         <div className="progressWrapper">
                        //             <span>HTML</span>
                        //             <div className="indicator">
                        //                 <Progress percent={80} size="small"/>
                        //                 <span>80</span>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </Transition>
                        <div className="progressWrapper" key={k}>
                            <span>{v.name}</span>
                            <div className="indicator">
                                <Progress percent={v.value} size="small"/>
                                <span>{v.value}</span>
                            </div>
                        </div>
                        )}

                        {/* <Transition visible={show} duration={500} animation='fade right'>
                            <div>
                                <div className="progressWrapper">
                                    <span>HTML</span>
                                    <div className="indicator">
                                        <Progress percent={80} size="small"/>
                                        <span>80</span>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <Transition visible={show2} duration={500} animation='fade right'>
                            <div>
                                <div className="progressWrapper">
                                    <span>JAVASCRIPT</span>
                                    <div className="indicator">
                                        <Progress percent={80} size="small"/>
                                        <span>80</span>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                        <Transition visible={show3} duration={500} animation='fade right'>
                            <div>
                            <div className="progressWrapper">
                                <span>CSS</span>
                                <div className="indicator">
                                    <Progress percent={80} size="small"/>
                                    <span>80</span>
                                </div>
                            </div>
                            </div>
                        </Transition>
                        <Transition visible={show4} duration={500} animation='fade right'>
                            <div>
                            <div className="progressWrapper">
                                <span>REACT</span>
                                <div className="indicator">
                                    <Progress percent={80} size="small"/>
                                    <span>80</span>
                                </div>
                            </div>
                            </div>
                        </Transition> */}
                    </Grid.Column>
                    <Transition visible duration={500} animation='fade up'>
                    <Grid.Row columns={5} className="circularWrapper">
                        <Header as="h3" inverted>
                            <Icon name="code"/> Hard Skills
                        </Header>
                        <Divider hidden/>
                        {expertiseJSON.hard_skills.map((v, k)=>
                        <Grid.Column key={k} textAlign="center">
                            <div className="circularItem">
                                <CircularProgressbar value={v.value} text={v.value}/>
                                <p>{v.name}</p>
                            </div>
                        </Grid.Column>
                        )}
                    </Grid.Row>
                    </Transition>
                    
                    {/* <Transition visible={show5} duration={500} animation='fade up'>
                        <Grid.Row columns={5} className="circularWrapper" textAlign="center">
                        <Header as="h3" inverted>
                            <Icon name="code"/> Hard Skills
                        </Header>
                        <Divider hidden/>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    </Transition>
                         */}
                        {/* <Grid.Column>
                            <div className="circularItem">
                                <CircularProgressbar value={80} text={'80%'}/>
                                <p>WORDPRESS</p>
                            </div> */}
                        {/* <Transition visible={show5} duration={500} animation='fade up'>
                            <div>
                            <Header as="h3" inverted>
                                <Icon name="gamepad"/> Soft Skill
                            </Header>
                            <div className="circularWrapper">
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                                <div className="circularItem">
                                    <CircularProgressbar value={80} text={'80%'}/>
                                    <p>WORDPRESS</p>
                                </div>
                            </div>
                            </div>
                        </Transition> */}
                        {/* </Grid.Column> */}
                </Grid>
            </Container>
        </Segment>
    )
}

export default Expertise
