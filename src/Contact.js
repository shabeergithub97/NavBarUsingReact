import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        Data: [
        { id: 1, name: "ravi" },
        { id: 2, name: "siva" },
        { id: 3, name: "ram" },
        { id: 4, name: "teja" },
      ],
      text:""
  }
  handleSave = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    let pair = this.state.text.toString().trim().toLowerCase();
    let duplicateData = [];
    if (pair && pair.length > 0) {
      duplicateData = this.state.Data.filter((i) => {
        return i.name.toLowerCase().match(pair)
      })
    }
    return (
      <div>
        <input name='text'
          placeholder='enter to search'
          onChange={this.handleSave}
        />
        {
          duplicateData.map((i) => (
            <p key={i.id}>{i.name}</p>
          ))
       }
        </div>
    )
  }
}
