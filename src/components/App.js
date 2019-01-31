import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Table from 'components/table';
import Form from 'components/form';
import users from 'data/users';
import uuidv1 from 'uuid/v1';


class App extends Component {
  state = {
    users: []
  }

  componentWillMount = () => {
    this.setState({users})
  }

  handleRemove = row => {
    this.setState(({users}) => ({
      users: users.filter(user => {
        return row._id !== user._id
      })
    }))
  }

  handleEdit = ({data}) => {
    this.setState(({users}) => ({
      users: users.map(user => {
        return user._id === data._id ? data : user
      })
    }))
  }

  handleCreate = (user) => {
    user._id = uuidv1()
    this.setState(({users}) => ({users: [...users, user]}))
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row mt={2}>
            <Col 
            className="mt-5" 
            md={{size: 8}}
            xl={{size: 8}}>
              <Table 
              data={this.state.users}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit}/>
            </Col>

            <Col 
            className="mt-5" 
            xl={{size: 4}}>
              <Form handleCreate={this.handleCreate} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
