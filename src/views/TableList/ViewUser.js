import React from "react";
// @material-ui/core components

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from "axios";

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import "react-table/react-table.css";
import {AuthProvider} from "react-check-auth";
import ip from "../../variables/ip"
import port from "../../variables/ip2"
const href= `http://${ip}${port}`
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const onSubmit = async values => {
  let t = sessionStorage.getItem("token")
  let i = this.props.match.params.page
  
  
  var config = {
   headers: {'authtoken': t}
 };

  let data = values;
 
  axios.put(`http://${ip}:3002/api/users/edituser/${data._id}`, {data}, config)
  .then(res => alert('User updated'),window.location.replace(`${href}/admin/${i}`))
  .catch(err => console.error("Wasn't able to update property.", err))
 
  
  
 
}; 

class ViewUser extends React.Component  {
constructor(props) {
super(props)
  this.state = {
    userdata: [],
    filtered: [],
    enabled: false,
    id: ""
    

   
  }
  this.onDelete = this.onDelete.bind(this);

}
  
 
 
  
componentDidMount() {
    const id = this.props.match.params.id ;
    let t = sessionStorage.getItem("token")
  
  
    console.log(t)
    var config = {
     headers: {'authtoken': t}
   };
    
    axios.get(`http://${ip}:3002/api/users/${id}`, config)
    .then(res => {
      if (res.status > 300 ) {
        this.setState({authenticated: false}
        )
      }
      else if (res.status == 200) {
        this.setState({authenticated: 1}
          )
        const userdata = res.data ;
      

        this.setState({ userdata: userdata, id: userdata._id });
      }
     
    
      
    })
    
    
  }
    onDelete ()  {
      let t = sessionStorage.getItem("token")
  let i = this.props.match.params.page;
  
      console.log(t)
      var config = {
       headers: {'authtoken': t}
     };

    let data = this.state.id;
 
    axios.delete(`http://${ip}:3002/api/users/delete/${data}`,config)
    .then(window.location.replace(`${href}/admin/${i}`))
    .catch(err => console.error("Wasn't able to delete property.", err))
   
    alert("user deleted")
    
   }
  
  

  render() {
if (this.state.authenticated){
  return (
    <AuthProvider  authUrl={'http://localhost:3002/api/users/admin/auth'}  >
    <GridContainer>
    
  

  

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className="cardTitleWhite">
           Users 
            </h4>
            <p className="cardCategoryWhite">
             Unlimitik Networks POS system V 1.0
            </p>
          </CardHeader>
          <CardBody>
<Styles>
          <Form
          onSubmit={onSubmit}
          initialValues={this.state.userdata }
          render={({ handleSubmit, form, submitting, pristine, values  }) => (
            <form  onSubmit={handleSubmit}>
              <div>
                <label>Full Name</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Full Name"
                disabled={!this.state.enabled}
                />
              </div>
              <div>
                <label>Address</label>
                <Field
                  name="address"
                  component="input"
                  type="text"
                  placeholder="address"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
                <label>Phone Number</label>
                <Field
                  name="phonenumber"
                  component="input"
                  type="text"
                  placeholder="phonenumber"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>ISP</label>
                <Field
                  name="isp"
                  component="input"
                  type="text"
                  placeholder="isp"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Account</label>
                <Field
                  name="account"
                  component="input"
                  type="text"
                  placeholder="account"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Account Type</label>
                <Field
                  name="accounttype"
                  component="input"
                  type="text"
                  placeholder="accounttype"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Paid</label>
                <Field
                  name="paid"
                  component="input"
                  type="text"
                  placeholder="paid"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Static IP</label>
                <Field
                  name="staticip"
                  component="input"
                  type="text"
                  placeholder="staticip"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Static IP Date</label>
                <Field
                  name="staticipdate"
                  component="input"
                  type="date"
                  placeholder="staticipdate"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Bill</label>
                <Field
                  name="bill"
                  component="input"
                  type="text"
                  placeholder="bill"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Balance</label>
                <Field
                  name="balance"
                  component="input"
                  type="number"
                  placeholder="balance"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>username</label>
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="username"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>pass</label>
                <Field
                  name="pass"
                  component="input"
                  type="text"
                  placeholder="pass"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>AP / IP</label>
                <Field
                  name="apip"
                  component="input"
                  type="text"
                  placeholder="AP / IP"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Summer User</label>
                <Field
                  name="isSummer"
                  component="input"
                  type="checkbox"
                  disabled={!this.state.enabled}
                />
              </div>
              <div>
              <label>Is Stopped (Y/N)</label>
                <Field
                  name="isStopped"
                  component="input"
                  type="text"
                  disabled={!this.state.enabled}
                />
              </div>
             
              
             
             
           
    
            
             
             
              <div className="buttons">
                <button type="submit"  disabled={submitting || pristine} >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}

                 
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => this.setState({enabled: true})}
                  
                 
                >
                
                 Edit
                </button>
                <button
                type="button"
                onClick={ this.onDelete}
                
               
              >
              
               Delete
              </button>
              </div>
             
            </form>
          )}
        />
        </Styles>

          
          



          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
   </AuthProvider>
   
   
  );

}
   else return (
     <h1> </h1>
   )

  }
  // <Table
  //   tableHeaderColor="primary"
  //    tableHead={["ID", "Name", "Paid", "Address", "Number", "Actions"]}
  //   tableData={this.state.userdata}
  // />
}

export default ViewUser;
