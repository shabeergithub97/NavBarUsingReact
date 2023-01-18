/*import React from 'react'

class Events extends React.Component{
    state = {
        username:"",
        passcode:""
    }
    save = (e) => {
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    password = (e) => {
        this.setState({
            passcode:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input placeholder='Enter user name' onChange={this.save} />
                <input placeholder='Enter Pass word' onChange={this.password} />
                <p>{this.state.username}</p>
            </div>
        )
    }
}
export default Events

import {Component} from "react"     // {Component} instead of 'react' it is called naming event

export default class Events extends Component{
    state = {
        username:"",
        password:""
    }
    handleChange=(a)=>{
        this.setState({
            username:a.target.value
        })
    }
    handlePassword = (b) => {
        this.setState({
            password:b.target.value
        })
    }
    handleClick=()=>{
        console.log(this.state.username)
        console.log(this.state.password)
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} placeholder="Enter User Name" /> <br/>
                <input  onChange={this.handlePassword} placeholder="Enter Password"/>
                <button onClick={this.handleClick}>Submit</button>
                
            </div>
        )
    }

}*/

import { Component } from 'react'

export default class Events extends Component{
    state = {
        username: "",
        password:""
    }
    handleChange=(a)=>{
        this.setState({
            [a.target.name]:a.target.value
        })
    }
    
    handleClick=()=>{
        console.log(this.state.username,this.state.password)
   }
    render() {
        return (
            <div>
                <input name="username" onChange={this.handleChange} placeholder="Enter Username" />
                <input name="password" onChange={this.handleChange} placeholder="Enter password" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}