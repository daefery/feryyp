import { Button, Icon, Segment } from "semantic-ui-react"

const Footer = () =>{
    const goTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <Segment basic className="footerWrapper">
            <p>Copyright © 2022 FYP, ID</p>
            <Button icon className="btnUp" onClick={goTop}>
                <Icon name="arrow up"/>
            </Button>
        </Segment>
    )
}

export default Footer