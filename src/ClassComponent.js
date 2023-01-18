import React from 'react'
import StateExample from './StateExample'
import FunctionalExample from './FunctionalExample'

class ClassComponent extends React.Component{
    state = {
        students:[
            { name: "vasu", age: 23 },
            { name: "dev", age: 423 },
            { name: "modi", age: 523 },
            { name: "rahul", age: 253 }, 
            { name: "virat", age: 293 }
            
        ]
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1> this is class Component {this.props.demo} </h1>
                <StateExample employees={this.state.students} />
                <FunctionalExample employees={this.state.students}/>
                
            </div>
        )
    }
}

export default ClassComponent