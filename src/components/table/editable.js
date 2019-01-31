import React, { Component } from 'react';
import {Input} from 'reactstrap';

class Editable extends Component {
  state = {
    editable: false
  }

  onClick = () => {
    this.setState({editable: true})
  }

  onBlur = (e) => {
    let {original, index, column} = this.props.cellInfo;
    let data = {...original}
    data[column.id] = e.target.value

    this.setState({editable: false})
    this.props.handleEdit({index, data})
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    let {editable} = this.state
    let {data, cellInfo} = this.props
    let value = data[cellInfo.index][cellInfo.column.id]

    return editable ?
      <Input 
      type="text" 
      autoFocus 
      onBlur={this.onBlur}
      defaultValue={value} /> :
      <div className="cell" onClick={this.onClick}>{value ? 
        <span className="value">{value}</span> : 
        <span className="empty">Na</span>}</div>
  }
}

export default Editable
