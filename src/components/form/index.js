import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import _ from 'lodash'

const fields = [{
  name: 'name',
  label: 'Name',
  type: 'text'
}, {
  name: 'balance',
  label: 'Balance',
  type: 'text'
}, {
  name: 'age',
  label: 'Age',
  type: 'text'
}, {
  name: 'company',
  label: 'Company',
  type: 'text'
}, {
  name: 'phone',
  label: 'Phone',
  type: 'text'
}]


const initial = {
  name: "",
  balance: "",
  age: "",
  company: "",
  phone: "",
  error: ""
}

class FormComponent extends Component {
  state = {
    ...initial
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value, error: ""})
  }

  handleSubmit = e => {
    e.preventDefault()

    if(!this.state.name) {
      return this.setState({error: 'Name field is required!'})
    }
    
    let data = _.omit(this.state, ['errors']);
    this.props.handleCreate(data)
    this.reset()
  }

  reset = e => {
    this.setState({...initial})
  }

  renderFields = () => {
    return fields.map(field => {
      return <FormGroup key={field.name}>
        <Label for={field.name}>{field.label}</Label>
        <Input 
        onChange={this.handleChange}
        value={this.state[field.name]}
        type={field.type} 
        name={field.name} 
        id={field.name} 
        placeholder={field.label} />
      </FormGroup>
    })
  }

  render() {
    let {error} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderFields()}
        {error && <FormFeedback>{error}</FormFeedback>}
        <Button 
        size="sm"
        color="primary">Add user</Button>
      </Form>
    );
  }
}

export default FormComponent
