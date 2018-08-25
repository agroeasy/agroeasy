import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button} from 'react-bootstrap';
import { InputGroup, InputGroupAddon, Jumbotron, InputGroupText, Input } from 'reactstrap';
import Footer from './footer';
import AnotherList from './anotherlist';
import NavBar from './navbar';
import './home.css';

 class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                  <NavBar />
                  <Jumbotron className="Jumbotron">
                       <h2 style={{color: 'white', fontSize: '45px'}}>Welcome to Agroeasy</h2>
                       <p style={{color: 'white'}}><i>From the farm the market, let us make your buying and selling experience stress-free</i></p>
                        <Link to='/learn-more/'>
                           <Button bsStyle='primary'onClick={this.remove} style={{fontSize: "0.8em",lineHeight: '10px'}}>
                           Learn more</Button>
                       </Link>
                       <br/><br/>
                       <Grid style={{width: '450px', textAlign: 'center'}}>
                       <InputGroup>
                         <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                         <Input placeholder="search" />
                           <Button onClick={this.search}>Ok</Button>
                      </InputGroup>
                      </Grid>
                   </Jumbotron>
               </div>
                <AnotherList />
                <hr />
                <Footer />
            </div>

        );
    }
}
export default Home;
