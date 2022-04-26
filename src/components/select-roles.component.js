import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class SelectRoles extends Component {

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
                <div className="p-2 col-example text-left"><Link to='/enduser'><Button variant="primary" size="lg">End User</Button></Link></div>
                <div className="p-2 col-example text-left"><Link to='/technician'><Button variant="primary" size="lg">Technician</Button></Link></div>
                <div className="p-2 col-example text-left"><Link to='/admin'><Button variant="primary" size="lg">Admin</Button></Link></div>
            </div>
            </div>
        );
    };
};

