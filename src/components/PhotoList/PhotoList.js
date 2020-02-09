import React, { Component } from 'react';
import Photo from "../Photo/Photo";
import  {data} from'./data';
import "./PhotoList.scss";

class PhotoList extends Component {
   state={
       photos:data

    }
    removePhoto=(id)=>{
    const removed=this.state.photos.filter(photo=>photo.id!==id)
    this.setState({photos:removed})
}
    render() {
        const {photos}=this.state;
        return (
            <section className="photoList">
              
{photos.map(photo=>
    {
        return(<Photo key={photos.id} photos={photo} removePhoto={this.removePhoto}/>)
    })}


            </section>
        );
    }
}

export default PhotoList;