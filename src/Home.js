import { Component } from 'react'
export default class Login extends Component{
    state = {
        username: "",
        password:""
    }
    handleChange = (a) => {
        this.setState({
            [a.target.name]:a.target.value
        })
    }
    handleClick = () => {
        console.log(this.state.username,this.state.password)
    }
    render() {
        return (
            <div>
                <input  name="username" onChange={this.handleChange} placeholder='Enter Username' />
                <br />
                <input name="password" onChange={this.handleChange} placeholder='Enter password' />
               <br/>
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}
