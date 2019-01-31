import React from 'react';
import Editable from './editable';
import {Button} from 'reactstrap';

const columns = ({
  remove,
  edit,
  data
}) => {
  return [{
    Header: 'Name',
    accessor: 'name',
    width: 150,
    Cell: props => <Editable
    handleEdit={edit} 
    cellInfo={props}
    data={data} />
  }, {
    Header: 'Balance',
    accessor: 'balance',
    Cell: props => <Editable
    handleEdit={edit} 
    cellInfo={props}
    data={data} />
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <Editable
    handleEdit={edit} 
    cellInfo={props}
    data={data} />
  }, {
    Header: 'Company',
    accessor: 'company',
    Cell: props => <Editable
    handleEdit={edit} 
    cellInfo={props}
    data={data} />
  }, {
    Header: 'Phone',
    accessor: 'phone',
    width: 150,
    Cell: props => <Editable
    handleEdit={edit} 
    cellInfo={props}
    data={data} />
  }, {
    Header: 'Actions',
    Cell: props => {
      return <div className="actions center-cell">
        <Button size="sm" color="primary" className="action-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </Button>

        <Button 
        onClick={() => remove(props.original)} 
        className="action-button"
        color="primary"
        size="sm">
          <i 
          className="fa fa-trash-o" 
          aria-hidden="true"></i>
        </Button>
      </div>
    }
  }]
}

export default columns
