import React, { Component } from 'react'
import NGOItem from './NGOItem';

export class NGO extends Component {
  render() {
    return this.props.Ngos.map((ngo)=>(
        <NGOItem key={ngo.id} ngos={ngo} />
    ))
  }
}

export default NGO;
