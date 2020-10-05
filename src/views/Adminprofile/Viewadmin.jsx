import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from "axios";

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import "react-table/react-table.css";
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
  
  
  
  var config = {
   headers: {'authtoken': t}
 };

  let data = values;
 
  axios.put(`http://${ip}:3002/admin/edit/${data._id}`, {data}, config)
  .then(res => alert('admin updated'))
  .catch(err => console.error("Wasn't able to update property.", err))
 
  
  
 
}; 
 

class Viewadmin extends React.Component  {
constructor(props) {
super(props)
  this.state = {
    userdata: [],
    filtered: [],
    enabled: false,
    id: "",
    authenticated: false
    

   
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
   
    axios.get(`http://${ip}:3002/admin/${id}`, config)
    .then(res => {
     this.setState({authenticated: true})
        const userdata = res.data
        delete userdata.password
      

        this.setState({ userdata: userdata, id: userdata._id });
      
     
    
      
    })
    
    
  }
    onDelete ()  {

      let t = sessionStorage.getItem("token")
  
  
 
      var config = {
       headers: {'authtoken': t}
     };
    let data = this.state.id; 
    axios.delete(`http://${ip}:3002/admin/delete/${data}`, config)
    .then(res => window.location.replace(`${href}`))
    .catch(err => alert("Wasn't able to delete property.", err))
   
                     
   }
  
  

  render() {
if (this.state.authenticated){
  return (
  
    <GridContainer>
    
  

  

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className="cardTitleWhite">
    Admin
            </h4>
            <p className="cardCategoryWhite">
             Unlimitik Networks POS system
            </p>
          </CardHeader>
          <CardBody>
          <Styles>

          <h1>Edit Admin</h1>
          <h3>Unlimitik POS system V1.0</h3>
       
          
          <Form
            onSubmit={onSubmit}
            initialValues={this.state.userdata  }
            render={({ handleSubmit, form, submitting, pristine, values  }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="name"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                  <label > Password </label>
                  <Field
                    name="password"
                    component="input"
                    type="text"
                    placeholder="password"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                <label>Is Master (Can edit / delete/ create data )</label>
                <Field name="isMaster" component="input" type="checkbox" />
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

export default Viewadmin;
