import React from 'react';
import {
    Col,
    Container,
    Row} from 'reactstrap';

export default class NaviApp extends React.Component {
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
       <div className="footer">
           <Container>
               <Row>
                    <Col>
                         <h3 style={{textAlign: 'center', color: 'white', fontSize: '20px'}}><i>Your satisfaction, our priority...</i></h3>
                    </Col>
               </Row>
           </Container>
       </div>
    );
  }
}