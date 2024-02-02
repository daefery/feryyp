
import { useState } from "react"
import { toast } from "react-toastify"
import { Container, Grid, Segment, Header, Form, CardGroup, Card, Divider, Icon, Message } from "semantic-ui-react"
import { TitleSection } from "../Helper"

const Contact = () =>{
    const [loading, setLoading] = useState(false)
    const [isMessageShow, setMessageShow] = useState(false)
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)

    const sendMessage = () =>{
        var formEl = document.forms.contactForm;
        var formData = new FormData(formEl);
        let param = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            phone: formData.get('phone'),
            message: formData.get('message')
        }

        if(param.name === ''){
            toast.warn('Please make sure form is completed before send the message!')
            return false
        }

        setLoading(true)

        fetch('https://mail.natakraf.com/mail.php', {
            method: 'post',
            headers : {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(param)
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            if(res.done){
                document.forms.contactForm.reset()
                setIsError(false)
            }else{
                setIsError(true)
            }

            setMessage(res.message)
            setMessageShow(true)
            setLoading(false)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return(
        <Segment basic className="contactWrapper">
            <Container>
                <Grid columns={'equal'}>
                    <Grid.Column width={12}>
                        <Header as="h2" inverted>Looking Forward to Collaborate!</Header>
                        <p className="descSection">Contact me on any platform and i will happy to help you out.</p>
                        <Divider hidden/>
                        <CardGroup itemsPerRow={2} className="contactCard">
                            <Card>
                                <div></div>
                                <div className="iconContact">
                                    <Icon name="phone"/>
                                </div>
                                <Card.Content>
                                    <Header as="h4">
                                        <p>Contact Me At:</p>
                                        <a href="tel:+6281224641242">+6281224641242</a>
                                    </Header>
                                </Card.Content>
                            </Card>
                            <Card>
                                <div></div>
                                <div className="iconContact">
                                    <Icon name="envelope"/>
                                </div>
                                <Card.Content>
                                    <Header as="h4">
                                        <p>Email At:</p>
                                        <a href="mailto:feryyp.work@gmail.com">feryyp.work@gmail.com</a>
                                    </Header>
                                </Card.Content>
                            </Card>
                            <Card>
                                <div></div>
                                <div className="iconContact">
                                    <Icon name="linkedin"/>
                                </div>
                                <Card.Content>
                                    <Header as="h4">
                                        <p>Linkedin</p>
                                        <a href="https://www.linkedin.com/in/feryyp/" target={'_blank'} rel='noreferrer'>@feryyp</a>
                                    </Header>
                                </Card.Content>
                            </Card>
                        </CardGroup>
                    </Grid.Column>
                    {/* <Grid.Column width={1}></Grid.Column> */}
                    {/* <Grid.Column>
                        <TitleSection text="Any Question?"/>
                        <Header as="h1" className="largeTitleSectionOther">
                            Drop Me A Line
                        </Header>
                        {isMessageShow ? <Message onDismiss={()=>setMessageShow(false)} 
                        success={!isError} error={isError} size="small" className="inverted">
                            {message}
                        </Message> : null}
                        <Form size="large" className="contactForm" id="contactForm">
                            <Form.Group widths={2}>
                                <Form.Input placeholder="Name" name="name" required/>
                                <Form.Input placeholder="Email" name="email" required type="email"/>
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input placeholder="Subject" name="subject" required/>
                                <Form.Input placeholder="Phone" name="phone" required/>
                            </Form.Group>
                            <Form.TextArea placeholder="Message" name="message" required/>
                            <Form.Button content="SEND MESSAGE" primary icon="paper plane" onClick={sendMessage}
                            labelPosition="right" size="large" id="btnSendEmail" disabled={loading} loading={loading}/>
                        </Form>
                    </Grid.Column> */}
                </Grid>
            </Container>
        </Segment>
    )
}

export default Contact
