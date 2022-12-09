import React from 'react';
import { Placeholder } from 'semantic-ui-react';
import './style.scss';

class SlideShowComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slideIndex: 1,
            loaded: false
        }
    }

    componentDidMount(){
        this.showSlides(this.state.slideIndex)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this.setState({loaded: false})
            this.showSlides(this.state.slideIndex)
        }
    }

    plusSlides = (n, e) => {
        let sIndex = this.state.slideIndex
        let sIndexMutate = sIndex += n
        this.setState({slideIndex:  sIndexMutate})
        setTimeout(()=>{
            this.showSlides(this.state.slideIndex);
        }, 100)
    }

    currentSlide = (n, e) => {
        this.setState({slideIndex: n})
        setTimeout(()=>{
            this.showSlides(this.state.slideIndex);
        }, 100)
    }

    showSlides = (n) => {
        let slideIndex = this.state.slideIndex
        var i;
        var slides = document.getElementsByClassName(this.props.id)
        var dots = document.getElementsByClassName(this.props.id+"_DOT");

        if (n > slides.length) {
            slideIndex = 1
        }    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";  
        if(dots.length > 1){
            dots[slideIndex-1].className += " active";
        }

        if(slideIndex !== this.state.slideIndex){
            this.setState({slideIndex: slideIndex})
        }
    }

    render() {
      return (
        <div id="customSlideShow">
            <div className="slideshow-container">
                {this.props.images.map((v, k)=>
                <div className={this.props.id+" fade"} key={k}>
                    {this.props.images.length > 1 ? 
                    <div className="numbertext">{k+1} / {this.props.images.length}</div>
                    : null}
                    {!this.state.loaded ? 
                    <Placeholder inverted>
                        <Placeholder.Image/>
                    </Placeholder>
                    : null}
                    <img alt="slides" src={require('./../../Assets/Projects/'+v+'.png').default} style={this.state.loaded ? {width: "100%"} : {display: 'none'}}
                    onLoad={()=>this.setState({loaded: true})}/>
                </div>
                )}

                {this.props.images.length > 1 ? 
                    <>
                    <div className="prev" onClick={this.plusSlides.bind(null, -1)}>&#10094;</div>
                    <div className="next" onClick={this.plusSlides.bind(null, 1)}>&#10095;</div>    
                    </>
                : null}
            </div>
            {this.props.images.length > 1 ? 
            <>
            <div style={{textAlign: "center"}}>
                {this.props.images.map((v, k)=>
                    <span key={k} className={this.props.id+"_DOT dot"} onClick={this.currentSlide.bind(null, k+1)}></span> 
                )}
            </div>
            </>
            : null}
        </div>
      )
    };
}

export default SlideShowComponent