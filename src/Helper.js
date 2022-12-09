import {Header, Image} from 'semantic-ui-react';
import line from './Assets/Images/line.svg'

export const TitleSection = (props) =>{
    return(
        <Header as="h1" className="titleSection">
            <Image size="massive" src={line}/> {props.text}
        </Header>
    )
}