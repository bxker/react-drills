import React, {Component} from 'react'

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.image}/>
                <h1>Doggo</h1>    
            </div>
        )
    }
}

export default Image;