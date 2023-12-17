import React, { Component } from 'react';

export default class ImagePlaceholder extends Component {
    constructor(props){
        super(props);
        this.state={
            image :"",
            display : "none"
        }
    }
    imagLoad = (e) => {
        this.setState({
            display : "block"
        })
    }
    componentDidMount(){
        this.setState({
            image : this.props.src
        })
    }

    componentDidUpdate(prevProps , prevState){
        if(prevProps.src !== this.props.src){
            this.setState({
                image : this.props.src,
                display : "none"
            })
        }
    }

    render(){
        const {display,image} = this.state
        const {type} = this.props;
        return(
            <div>
                {
                display === 'none' ?  
                    type === 'modal' ?
                        <img src={'/images/MaskGroup.png'} />
                        :
                        <img 
                            src={'/images/MaskGroup.png'} 
                            style={{...this.props.style ,display : display === 'none' ? 'block' : 'none'}} 
                            alt={this.props.alt} 
                            title={this.props.title}
                            className={this.props.className} 
                        />
                    : ''
                }
                <img src={image} onLoad={this.imagLoad} style={{display, ...this.props.style }} alt={this.props.alt} title={this.props.title} className={this.props.className} />
            </div>
        )
    }
}