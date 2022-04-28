import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class SelectRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    handleInput(e) {
        // e.preventDefault();
        console.log(e.target.value);
        localStorage.setItem("role", e.target.value);
    }
    
    render() {
        return (
            /*<Row className='wrapper'>
                <Link to='/home'>
                    <Col>
                        <Container>
                            <Button variant="primary">End User</Button>
                        </Container>
                    </Col>
                </Link>
                <Col>
                    <Container>
                        <Button variant="primary">Technician</Button>
                    </Container>
                </Col>
                <Col>
                    <div class="col-sm">
                        <Button variant="primary">Admin</Button>
                    </div>
                </Col>
            </Row>
            */
           <div>
           <Container>
               <h1><center>Select a Role</center></h1>
           </Container>
            <div className="d-flex flex-column rolealign">
                <div className="p-2 col-example text-left"><Link to='/login'><Button variant="primary" size="lg" value={'enduser'} onClick={e => this.handleInput(e, "value") }> End User</Button></Link></div>
                <div className="p-2 col-example text-left"><Link to='/login'><Button variant="primary" size="lg" value={'technician'} onClick={e => this.handleInput(e, "value") }>Technician</Button></Link></div>
                <div className="p-2 col-example text-left"><Link to='/login'><Button variant="primary" size="lg" value={'admin'} onClick={e => this.handleInput(e, "value") }>Admin</Button></Link></div>
            </div>
            </div>
        );
    };
};

