import React from 'react';
import {
  Collapse, Form, FormGroup, Label, Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from 'reactstrap';

export default class AppTop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      
    return (
      <div>
          <Navbar dark expand="md" className="pix">
                  <NavbarBrand href="/" style={{ fontStyle: "italic", fontSize: "25px", color: 'darkkhaki'}}>STOCK INVENTORY</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
        <Form inline>
               <Button color="secondary" size="small" href="contact">Contact</Button>&nbs;
               <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
               <Label for="exampleEmail" className="mr-sm-2" color="light">Email</Label>
               <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.com" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="input password" />
        </FormGroup>
              <Button color="warning" size="small">Login</Button>
        </Form>&nbs;
            <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <Button color="danger" size="small"> Menu</Button>
                  </DropdownToggle>
               <DropdownMenu right>
                  <DropdownItem>
                    Create account
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    Our Services
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Terms & Conditions
                  </DropdownItem>
             </DropdownMenu>
         </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}