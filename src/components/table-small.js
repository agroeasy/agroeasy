import React from 'react';
import { Table } from 'reactstrap';
import './home.css'

export default class Example extends React.Component {
  render() {
    return (
      <Table className="little-details" size="sm" secondary>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Imo</td>
            <td>Niger</td>
            <td>Delta</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Kaduna</td>
            <td>Ondo</td>
            <td>Benue</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Anambra</td>
            <td>Lagos</td>
            <td>Eboyin</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Abia</td>
            <td>Bayelsa</td>
            <td>Rivers</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Kano</td>
            <td>Ekiti</td>
            <td>Enugu</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
