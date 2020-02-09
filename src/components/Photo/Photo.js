import React, { Component } from 'react';
import "./Photo.scss";
import {img1} from './urls';

class Photo extends Component {
    constructor()
    {
        super();
        this.state={
            showInfo:false
        }
    }
    showInfo=()=>{
     this.setState({showInfo:!this.state.showInfo})
    }
    render() {
       
       const{id,title,img,info}=this.props.photos;
   console.warn(info)

       return (
            <article className="photo">
<div className="img-container">
    <img  src={img} />

    <span className="close-btn"><i className="fas fa-window-close" onClick={()=>this.props.removePhoto(id)}/></span>

    <div className="pic-info">
        <h3>{title}</h3>
        <h4>{id}</h4>
        <h4>info  <span><i className="fas fa-caret-square-down" onClick={this.showInfo}/></span></h4>
        {this.state.showInfo? <p>
            {info}
        </p>:null}
    </div>
</div>
            </article>
        );
    }
}

export default Photo;