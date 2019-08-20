import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        // binds 'this' to all of the classes methods
        this.handleName1 = this.handleName1.bind(this)
        this.handleName2 = this.handleName2.bind(this)
        this.buttonAlert = this.buttonAlert.bind(this)
    }
    
    // uses the first input to grab value of input field and update the username value
    handleName1(val){
        this.setState({username: val})
    }  

    // uses the second input to grab value of second input field and update the password value
    handleName2(val){
        this.setState({password: val})
    }

    // the onClick event calls this method and alerts the user with the username and password that they entered
    buttonAlert(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() { 
        return (
            <div>
                <input onChange={ (e) => this.handleName1(e.target.value)}></input>
                <input onChange={ (e) => this.handleName2(e.target.value)}></input>
                <button onClick={this.buttonAlert}>Login</button>
            </div>
        )
    }
}

export default Login;