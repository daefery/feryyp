import { Button, Icon, Segment } from "semantic-ui-react"

const Footer = () =>{
    const year = new Date().getFullYear()
    const goTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return(
        <Segment basic className="footerWrapper">
            <p>Copyright © {year} Fery Yundara Putera</p>
            <Button icon className="btnUp" onClick={goTop}>
                <Icon name="arrow up"/>
            </Button>
        </Segment>
    )
}

export default Footer