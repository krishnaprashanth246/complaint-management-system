import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import TicketList from './ticket-list.component';
import EndUserOpen from './enduser-open.component';
import EndUserClosed from './enduser-closed.component';

class Description extends Component{

    constructor(props) {
        super(props);
        this.state = {
          showTicketsComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showTicketsComponent: true,
        });
      }
    
      
    render()
    {
        const styles = {
            // border: '1px solid rgba(0, 0, 0, 0.05)', 
            textAlign: 'center',
       };


       if(localStorage.getItem("loginData") == null){
        return (<Redirect to="/selectrole"/>)
      }
      if(localStorage.getItem("role") != "enduser"){
        return (<Redirect to="/selectrole"/>)
      }
        return(
            <div style={styles} className = "home_deco">
                <h2 >Welcome {JSON.parse(localStorage.getItem('loginData')).profileObj.name}!</h2>

                <div className = "home_div">
                <p >The purpose of this platform is to provide support to the end users who are facing any IT related issues on IITH campus. End users can raise a ticket for their complaint and a technician will be assigned to solve the problem.
                </p>

                
                <div className="d-flex flex-column rolealign">
                    <h3 className="p-2 col-example text-left"> Have Complaints ? <Link to="/enduser/tickets/create"> <Button variant="primary">Open New Ticket</Button></Link></h3>
                    <div className="p-2 col-example text-left">
                        <h3 style={styles}>Want to View All Tickets ? <Button variant="primary" onClick={this._onButtonClick}>View Tickets</Button></h3>
                        {this.state.showTicketsComponent ?
                        <EndUserOpen showSideBar={'1'}/> :
                        null
                        }
                        {
                          this.state.showTicketsComponent ?
                          <EndUserClosed showSideBar={'1'}/>:
                          null
                        }
                    </div>
                </div>
                </div>

            </div>
        );
    };

}

export default Description;