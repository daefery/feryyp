import { useState } from "react"
import { Container, Segment, Header, Grid, Menu, Card, Image, Transition, Modal, TransitionablePortal, Icon } from "semantic-ui-react"
import { TitleSection } from "../Helper"
import PortfolioJSON from '../Data/Portfolio.json'
import SlideShowComponent from "../Components/ImageSlide"

const Portfolio = () =>{
    const [activeTab, setActiveTab] = useState(0)
    const [portfolioList, setPortfolioList] = useState(PortfolioJSON)
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [selectedPorto, setSelectedPorto] = useState(null)

    const changeTab = (p, e) =>{
        setLoading(true)
        let data = PortfolioJSON
        switch (p) {
            case 1:
                data = data.filter(x=>x.category.includes('WEBSITE'))
                break;

            case 2:
                data = data.filter(x=>x.category.includes('UX'))
                break;
            default:
                break;
        }

        setTimeout(()=>{
            setLoading(false)
            setPortfolioList(data)
            setActiveTab(p)
        }, 500)
    }

    const selectPortfolio = (p, e) =>{
        setSelectedPorto(p)
        setOpenModal(true)
    }

    return(
        <Segment basic className="portfolioWrapper">
            <Container>
                <Grid columns='equal' className="portfolioGrid">
                    <Grid.Column>
                        <TitleSection text="Portfolio"/>
                        <Header as="h1" className="largeTitleSectionOther">
                            My Creative Work
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Menu borderless secondary inverted size="massive" id="portoTab">
                            <Menu.Item active={activeTab === 0} link onClick={changeTab.bind(null, 0)}>All</Menu.Item>
                            <Menu.Item active={activeTab === 1} link onClick={changeTab.bind(null, 1)}>Website</Menu.Item>
                            <Menu.Item active={activeTab === 2} link onClick={changeTab.bind(null, 2)}>UX/UI</Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid>
                <Transition visible={!loading} duration={500} animation='fade right'>
                    <Grid columns={4} className="portfolioGallery">
                        {portfolioList.map((v, k)=>
                        <Grid.Column key={k}>
                            <Card link onClick={selectPortfolio.bind(null, v)}>
                                <div></div>
                                <Image src={require('./../Assets/Projects/'+v.thumbnail+'.png').default}/>
                                <Segment textAlign="center" className="portfolioInfo">
                                    <Header as="h2" inverted>{v.title}</Header>
                                    <Header as="h5" inverted>{v.category}</Header>
                                </Segment>
                            </Card>
                        </Grid.Column>
                        )}
                    </Grid>
                </Transition>
            </Container>

            <TransitionablePortal open={openModal}>
                <Modal open={openModal} closeIcon onClose={()=>setOpenModal(false)} className="portfolioModal">
                    {selectedPorto !== null ? 
                    <Modal.Content>
                        <Grid columns={'equal'}>
                            <Grid.Column width={4} id="PortfolioDetail">
                                <Header as="h2">
                                    {selectedPorto.title}
                                    <p>{selectedPorto.description}</p>
                                </Header>
                                <Header as="h5">
                                    <p><Icon name="code"/>Languages</p>
                                    {selectedPorto.project.languages}
                                </Header>

                                <Header as="h5">
                                    <p><Icon name="hashtag"/>Category</p>
                                    {selectedPorto.category}
                                </Header>

                                {selectedPorto.project.url !== undefined ? <Header as="h5">
                                    <p><Icon name="linkify"/>Source</p>
                                    <a href={selectedPorto.project.url} target="_blank" rel="noreferrer">{selectedPorto.project.url}</a>
                                </Header> : null}
                            </Grid.Column>
                            <Grid.Column>
                                <SlideShowComponent id={"slide-about-"+selectedPorto.id} images={selectedPorto.images}/>
                            </Grid.Column>
                        </Grid>
                    </Modal.Content>
                    : null}
                    
                </Modal>
            </TransitionablePortal>
            
        </Segment>
    )
}

export default Portfolio
