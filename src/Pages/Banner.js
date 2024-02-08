import { Container, Segment, Header, Divider, Button, Icon, Image, Transition } from "semantic-ui-react"
import { TitleSection } from "../Helper"
import i1 from '../Assets/Images/i1.svg'
import i2 from '../Assets/Images/i2.svg'
import i3 from '../Assets/Images/i3.svg'
import avatar from '../Assets/Images/avatar6.png'
import { useState, useEffect } from "react"
import pdfFile from '../Assets/CV.pdf';

const Banner = (props) =>{
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
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
        }
    })
    
    return(
        <Segment basic className="bannerWrapper">
            <Container className="bannerInfo">
                <Image src={avatar} className="avatar" size="small" centered circular bordered/>
                <TitleSection text="Software Engineer"/>
                <Header as="h1" className="largeTitleSection">
                    Fery <span>Yundara Putera {props.animated1}</span>
                </Header>
                
                <Divider hidden/>

                <p className="descSection">Highly-skilled software development professional bringing more than seven years in software design, development and integration. Advanced knowledge of Frontend and Backend programming such as React JS, Javascript, PHP, Python and C#. Software Developer skilled at technical leadership, communication and presentations. Experienced in full project life-cycle from design to implementation.</p>
                
                <Divider hidden/>
                <Divider hidden/>
                
                <div className="bannerGroupBtn">
                <Button secondary size="big" icon labelPosition="right" id="btnDownloadCV" onClick={()=>window.open(pdfFile, '_blank')}>
                    DOWNLOAD CV <Icon name="download"/>
                </Button>
                <Button primary size="big" id="btnAboutMe" onClick={()=> window.scrollTo({
                    top: document.getElementById('aboutMe').offsetTop-70,
                    behavior: 'smooth'
                })}>
                    MORE ABOUT ME
                </Button>
                </div>

                
                <Divider hidden/>
                <div className="socialMediaIcon">
                    <Icon name="linkedin" size="large" onClick={()=>window.open('https://www.linkedin.com/in/feryyp/', '_blank')} link circular/>
                    <Icon name="github"  size="large" onClick={()=>window.open('https://github.com/daefery', '_blank')} link circular/>
                </div>
            </Container>

            <Transition visible={show} duration={500} animation='fade right'>
            <Image src={i1} size="tiny" className="i1"/>
            </Transition>
            <Transition visible={show2} duration={500} animation='fade up'>
            <Image src={i2} size="tiny" className="i2"/>
            </Transition>
            <Transition visible={show3} duration={500} animation='fade up'>
            <Image src={i3} size="tiny" className="i3"/>
            </Transition>
        </Segment>
    )
}

export default Banner