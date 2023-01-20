import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        Data: [
       /* { id: 1, name: "ravi" },
        { id: 2, name: "siva" },
        { id: 3, name: "ram" },
        { id: 4, name: "teja" },*/
        { id: 1, name: "redmi" },
        { id: 2, name: "iphone" },
        { id: 3, name: "realme" },
        { id: 4, name: "hp Spectre x360" },
        { id: 5, name: "iPad Pro (6th Gen)" },
        { id: 6, name: "Hero Xpulse 200 4V (2022)" },
        { id: 7, name: "Samsung Galaxy S22+" },
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
      <div className='searchBar'>
        <input name='text' className='se22e'
          placeholder='Search for a product'
          onChange={this.handleSave}
          style={{ width:"55%",padding:"1% "}}
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
