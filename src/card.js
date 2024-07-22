import React from "react";
import './fruit.css'
class Card extends React.Component{
    render() {
        const {image, title} = this.props.items
        return(
            <div className="container">
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
        )
    }
}

export default Card