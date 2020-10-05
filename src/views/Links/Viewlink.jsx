import React from "react";
import axios from "axios";
// @material-ui/core components

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import "react-table/react-table.css";
import ip from "../../variables/ip"
import port from "../../variables/ip2"
const href = `http://${ip}${port}`
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


  let data = values;
const id = data._id
  let t = sessionStorage.getItem("token")
  var config = {
    headers: {'authtoken': t}
  };

   axios.put(`http://${ip}:3002/api/links/editlink/${id}`,data,  config)
   .then( window.location.replace(`${href}/admin/Viewlinks`))
  
  console.log(t)
  
  
  
 }
 
 

class Viewlink extends React.Component  {
constructor(props) {
super(props)
  this.state = {
    userdata: [],
    filtered: [],
    enabled: false,
    id: "",
    authenticated: true
    

   
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
    
    axios.get(`http://${ip}:3002/api/links/${id}`, config)
    .then(res => {
     
        const userdata = res.data;
      

        this.setState({ userdata: userdata, id: userdata._id });
      
     
    
      
    })
    
    
  }
    onDelete ()  {
      let t = sessionStorage.getItem("token")
  
  
      console.log(t)
     

    let data = this.state.id; 
    var config = {
      headers: {'authtoken': t}
    };
     axios.delete(`http://${ip}:3002/api/links/delete/${data}`,  config)
     .then(window.location.replace(`${href}/admin/Viewlinks`))
     .catch(err => console.error("Wasn't able to update property.", err))
    
                     
   }
  
  

  render() {
if (this.state.authenticated){
  return (
  
    <GridContainer>
    
  

  

      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className="cardTitleWhite">
       Links
            </h4>
            <p className="cardCategoryWhite">
             Unlimitik Networks POS system
            </p>
          </CardHeader>
          <CardBody>
          <Styles>

          <h1>Edit Station</h1>
          <h3>Unlimitik POS system V1.0</h3>
       
          
          <Form
            onSubmit={onSubmit}
            initialValues={this.state.userdata }
            render={({ handleSubmit, form, submitting, pristine, values  }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label>HWMode</label>
                  <Field
                    name="HWMode"
                    component="input"
                    type="text"
                    placeholder="HWMode"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                  <label >SSID </label>
                  <Field
                    name="SSID"
                    component="input"
                    type="text"
                    placeholder="SSID"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                  <label>IP Address</label>
                  <Field
                    name="ip"
                    component="input"
                    type="text"
                    placeholder="ip"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                <label>HW Model</label>
                  <Field
                    name="HWModel"
                    component="input"
                    type="text"
                    placeholder="HWModel"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                <label>Antenna Type</label>
                  <Field
                    name="Antennatype"
                    component="input"
                    type="text"
                    placeholder="Antennatype"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                <label>Frequency</label>
                  <Field
                    name="Frequency"
                    component="input"
                    type="text"
                    placeholder="Frequency"
                    disabled={!this.state.enabled}
                  />
                </div>
                <div>
                <label>Station Location</label>
                  <Field
                    name="loc"
                    component="input"
                    type="text"
                    placeholder="Location"
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

export default Viewlink;
