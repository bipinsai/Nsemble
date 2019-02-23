import React, { Component } from 'react'

export class NGOItem extends Component {
  render() {
    return (
      <div>
        <h3 className="NGOSSS">{this.props.ngos.title}</h3>
      </div>
    )
  }
}

export default NGOItem
 