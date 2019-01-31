import React, { Component } from 'react';
import ReactTable from 'react-table'
import columns from './columns';


class TableComponent extends Component {
  render() {
    return (
      <ReactTable
      minRows={0}
      data={this.props.data}
      columns={columns({
        data: this.props.data,
        remove: this.props.handleRemove,
        edit: this.props.handleEdit
      })} />
    );
  }
}

export default TableComponent;
