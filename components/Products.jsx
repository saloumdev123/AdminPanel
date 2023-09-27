import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default class Products extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <h3>products</h3>
      </div>
    )
  }
}
