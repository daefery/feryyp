import Header from "./Pages/Header";
import Banner from './Pages/Banner';
import AboutMe from './Pages/AboutMe';
import Expertise from './Pages/Expertise';
import Portfolio from "./Pages/Portfolio";
import Journey from "./Pages/Journey";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import "./Style.scss";
import {useState, useEffect, useCallback} from 'react'
import { Sidebar, Menu, Container, Icon, Image, Divider } from "semantic-ui-react";
import logo from './Assets/Images/logo.svg'

function App() {
  const [y, setY] = useState(window.scrollY);
  const [classMenu, setClassMenu] = useState('transparent');
  const [activeIndex, setActiveIndex] = useState(0)
  const [animated, setAnimated] = useState(false)
  const [animated2, setAnimated2] = useState(false)
  const [animated3, setAnimated3] = useState(false)
  const [animated4, setAnimated4] = useState(false)
  const [animated5, setAnimated5] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      
      if (y > window.scrollY) {
        if(window.scrollY < 300){
          setClassMenu('transparent')
          setActiveIndex(0)
        }else{
          arrangeActiveIndex(window.scrollY)
        }
      } else if (y < window.scrollY) {
        if(window.scrollY > 300){
          setClassMenu('colored')
        }
        arrangeActiveIndex(window.scrollY)
      }
      setY(window.scrollY);
    }, [y] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const arrangeActiveIndex = (y) =>{
    let m1 = document.getElementById('aboutMe').offsetTop - 80
    let m2 = document.getElementById('portfolio').offsetTop - 80
    let m3 = document.getElementById('journey').offsetTop - 80
    let m4 = document.getElementById('contact').offsetTop - 80

    if(y >= m1 && y < m2){
      setActiveIndex(1)
    }else if(y >= m2 && y < m3){
      setActiveIndex(2)
    } else if(y >= m3 && y < m4){
      setActiveIndex(3)
    }else if(y >= m4){
      setActiveIndex(4)
    }else if(!animated){
      setAnimated(true)
    }

    if(y >= m1/2 && y < m2/2 && !animated2){
      setAnimated2(true)
    }

    if(y >= m1+150 && y < m2 && !animated3){
      setAnimated3(true)
    }

    if(y >= m2-300 && y < m3 && !animated4){
      setAnimated4(true)
    }

    if(y >= m3-300 && y < m4 && !animated5){
      setAnimated5(true)
    }
  }

  useEffect(() => {
    setY(window.scrollY);
    arrangeActiveIndex(window.scrollY)
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]); // eslint-disable-line react-hooks/exhaustive-deps

  const clickMenu = (p, e) =>{
    window.scrollTo({
        top: document.getElementById(p).offsetTop-70,
        behavior: 'smooth'
    });
    setOpen(false)
  }

  return (
    <div>
      <Sidebar.Pushable>
        <Sidebar as={Menu}
          className="borderless"
          animation="push"
          inverted
          onHide={()=>setOpen(false)}
          vertical
          visible={isOpen}>
            <Container textAlign="center">
              <Image src={logo} centered size="tiny"/>
            </Container>
            {/* <Divider/> */}
            <Menu.Item link active={activeIndex === 0} onClick={clickMenu.bind(null, 'banner')}>HOME</Menu.Item>
            <Menu.Item link active={activeIndex === 1} onClick={clickMenu.bind(null, 'aboutMe')}>ABOUT</Menu.Item>
            <Menu.Item link active={activeIndex === 2} onClick={clickMenu.bind(null, 'portfolio')}>WORKS</Menu.Item>
            <Menu.Item link active={activeIndex === 3} onClick={clickMenu.bind(null, 'journey')}>JOURNEY</Menu.Item>
            <Menu.Item link active={activeIndex === 4} onClick={clickMenu.bind(null, 'contact')}>CONTACT</Menu.Item>
            <Container textAlign="center">
              <Divider/>
              <div className="socialMediaIcon">
                  <Icon name="linkedin" size="large" onClick={()=>window.open('https://www.linkedin.com/in/feryyp/', '_blank')} link circular/>
                  <Icon name="github"  size="large" onClick={()=>window.open('https://github.com/daefery', '_blank')} link circular/>
                  <Icon name="twitter" size="large" onClick={()=>window.open('https://twitter.com/feryyp', '_blank')} link circular/>
              </div>
            </Container>
        </Sidebar>
        <Sidebar.Pusher dimmed={isOpen}>
        <section id="header">
          <Header class={classMenu} activeIndex={activeIndex}/>
          <Menu fixed="top" inverted stackable borderless id="mobileNav" className={classMenu} size="large">
            <Container>
                <Menu.Item id="bars">
                    <Icon name={isOpen ? "times" : "bars"} onClick={()=>setOpen(true)}/>
                </Menu.Item>
            </Container>
          </Menu>
        </section>
        <section id="banner">
          <Banner isAnimated={animated}/>
        </section>
        <section id="aboutMe">
          <AboutMe isAnimated={animated2}/>
        </section>
        <section id="expertise">
          <Expertise isAnimated={animated3}/>
        </section>
        <section id="portfolio">
          <Portfolio isAnimated={animated4}/>
        </section>
        <section id="journey">
          <Journey isAnimated={animated5}/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <section id="footer">
          <Footer/>
        </section>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      {/* <section id="header">
        <Header class={classMenu} activeIndex={activeIndex}/>
      </section>
      <section id="banner">
        <Banner isAnimated={animated}/>
      </section>
      <section id="aboutMe">
        <AboutMe isAnimated={animated2}/>
      </section>
      <section id="expertise">
        <Expertise isAnimated={animated3}/>
      </section>
      <section id="portfolio">
        <Portfolio isAnimated={animated4}/>
      </section>
      <section id="journey">
        <Journey isAnimated={animated5}/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section> */}
    </div>
  );
}

export default App;
