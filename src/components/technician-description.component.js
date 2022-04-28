import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import TransferredTicketList from './transferred-ticket-list.component';

class TechnicianDescription extends Component{

    constructor(props) {
        super(props);
        this.state = {
          showTransferredTicketsComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);

        if(localStorage.getItem("loginData") == null){
          this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "technician"){
          this.props.history.push("/selectrole");
        }
        
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


    
    
        return(
            <div style={styles}>
                <h2 >Welcome KP</h2>

                <div className="d-flex flex-column rolealign">
                    <h3 className="p-2 col-example text-left">Want to View Open Tickets ? <Link to="/technician/tickets/open"><Button variant="primary">See Open Tickets</Button></Link></h3>
                    <h3 className="p-2 col-example text-left">Want to View Past Tickets ? <Link to="/technician/tickets/closed"><Button variant="primary">See Past Tickets</Button></Link></h3>
                    <div className="p-2 col-example text-left">
                        <h3 style={styles}>Want to View Transferred Tickets ? <Button variant="primary" onClick={this._onButtonClick}>See Transferred Tickets</Button></h3>
                        {this.state.showTransferredTicketsComponent ?
                        <TransferredTicketList /> :
                        null
                        }
                    </div>
                </div>

            </div>
        );
    };

}

export default TechnicianDescription;