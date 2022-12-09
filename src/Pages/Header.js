import { Container, Menu, Image } from "semantic-ui-react"
import logo from '../Assets/Images/logo.svg'
const Header = (props) =>{
    const clickMenu = (p, e) =>{
        window.scrollTo({
            top: document.getElementById(p).offsetTop-70,
            behavior: 'smooth'
        });
    }

    return(
        <>
        <Menu borderless fixed="top" inverted size="massive" stackable id="headerNav" className={props.class}>
            <Container>
                <Menu.Item id="logoMenu"><Image src={logo} size="tiny"/></Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item link active={props.activeIndex === 0} onClick={clickMenu.bind(null, 'banner')}>HOME</Menu.Item>
                    <Menu.Item link active={props.activeIndex === 1} onClick={clickMenu.bind(null, 'aboutMe')}>ABOUT</Menu.Item>
                    <Menu.Item link active={props.activeIndex === 2} onClick={clickMenu.bind(null, 'portfolio')}>WORKS</Menu.Item>
                    <Menu.Item link active={props.activeIndex === 3} onClick={clickMenu.bind(null, 'journey')}>JOURNEY</Menu.Item>
                    <Menu.Item link active={props.activeIndex === 4} onClick={clickMenu.bind(null, 'contact')}>CONTACT</Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
        </>
        
    )
}

export default Header