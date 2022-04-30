import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import TransferredTicketList from './transferred-ticket-list.component';

class AdminDescription extends Component{

    constructor(props) {
        super(props);
        this.state = {
          showTransferredTicketsComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        
      }
    
      _onButtonClick() {
        this.setState({
          showTransferredTicketsComponent: true,
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
      if(localStorage.getItem("role") != "admin"){
        return (<Redirect to="/selectrole"/>)
      }
    
        return(
            <div style={styles} className = "home_deco">
                {/* <h2 >Welcome Admin</h2> */}
                <h2 >Welcome {JSON.parse(localStorage.getItem('loginData')).profileObj.name}!</h2>
                <div className = "home_div">
                <p >The purpose of this platform is to provide support to the end users who are facing any IT related issues on IITH campus. End users can raise a ticket for their complaint and a technician will be assigned to solve the problem.
                </p>


                <div className="d-flex flex-column rolealign">
                    <h3 className="p-2 col-example text-left">Want to View Open Tickets ? <Link to="/admin/tickets/open"><Button variant="primary">See Open Tickets</Button></Link></h3>
                    <h3 className="p-2 col-example text-left">Want to View Closed Tickets ? <Link to="/admin/tickets/closed"><Button variant="primary">See Closed Tickets</Button></Link></h3>
                    {/* <div className="p-2 col-example text-left">
                        <h3 style={styles}>Want to View Transferred Tickets ? <Button variant="primary" onClick={this._onButtonClick}>See Transferred Tickets</Button></h3>
                        {this.state.showTransferredTicketsComponent ?
                        <TransferredTicketList /> :
                        null
                        }
                    </div> */}
                    <h3 className="p-2 col-example text-left">Want to View Transferred Tickets ? <Link to="/admin/tickets/transfer"><Button variant="primary">See Transferred Tickets</Button></Link></h3>

                </div>
                </div>

            </div>
        );
    };

}

export default AdminDescription;