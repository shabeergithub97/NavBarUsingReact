/*import React from 'react'
class StateExample extends React.Component{
    state = {
        name: "JavaScript",
        number:"1788965656"
    }
    render() {
        setInterval(() => {
            this.setState({
                name:"Codegnan"
            })
        }, 3000)
        return (
            <div>
                <p> Name:{this.state.name}</p>
            </div>
        )
    }
}

export default StateExample;*/

import React from 'react'

class StateExample extends React.Component{
    render() {
        //console.log(this.props.employees)
        return (
            <div>
                from state StateExample
                {/*<p>Name:{this.props.employees[0].name}</p>
                <p>Age:{this.props.employees[0].age}</p>
                <p>Name:{this.props.employees[1].name}</p>
                <p>Age:{this.props.employees[1].age}</p>
                <p>Name:{this.props.employees[2].name}</p>
                <p>Age:{this.props.employees[2].age}</p>
                <p>Name:{this.props.employees[3].name}</p>
                <p>Age:{this.props.employees[3].age}</p>
                <p>Name:{this.props.employees[4].name}</p>
        <p>Age:{this.props.employees[4].age}</p>*/}
                {
                    this.props.employees.map((employee) => (
                        <div>
                            <p>Name :{employee.name}</p>
                            <p>Age : {employee.age}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default StateExample

