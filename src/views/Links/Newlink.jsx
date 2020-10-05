import React from "react";

import axios from 'axios';

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import ip from "../../variables/ip"
import port from "../../variables/ip2"
const href = `http://${ip}${port}`

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class  NewLink extends React.Component  {

  componentDidMount() {
    let t = sessionStorage.getItem("token")
   
   
    console.log(t)
    var config = {
     headers: {'authtoken': t}
   };
     
       axios.get(`http://${ip}:3002/api/links`, config )
       .then(res =>  {
         if (res.status > 300) {
       this.setState({authenticated: false})
         }
         else if (res.status === 200)  {
           this.setState({authenticated: true})
         }
       })
   }


  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
    console.log('data', this.state.name)
  }
  onSubmit = async (values , e) => {
 
alert('Link Created ')
let t = sessionStorage.getItem("token")
   
   
console.log(t)
var config = {
 headers: {'authtoken': t}
};

    let data = values;
   
    axios.post(`http://${ip}:3002/api/links/newlink`, {data}, config )
    .then(result => console.log(result) , window.location.replace(`${href}/admin/Viewlinks`))
    .catch(err => console.log(err))
    
   
    
    
   }
 

  
 state = {
        authenticated: false
        
        
      }


  

 render(){

if (this.state.authenticated) {
  return (<div>

  <Styles>

   <h1>Create New Station</h1>
   <h3>Unlimitik POS system V1.0</h3>

   
   <Form
     onSubmit={this.onSubmit}
     initialValues={{ }}
     render={({ handleSubmit, form, submitting, pristine, values  }) => (
       <form onSubmit={handleSubmit}>
         <div>
           <label>SSID</label>
           <Field
             name="SSID"
             component="input"
             type="text"
             placeholder="SSID"
           />
         </div>
         <div>
           <label > HW mode </label>
           <Field
             name="HWMode"
             component="input"
             type="text"
             placeholder="HWMode"
           />
         </div>
         <div>
           <label>IP Address</label>
           <Field
             name="ip"
             component="input"
             type="text"
             placeholder="ip"
           />
         </div>
         <div>
         <label>HW Model</label>
           <Field
             name="HWModel"
             component="input"
             type="text"
             placeholder="HWModel"
           />
         </div>
         <div>
         <label>Antenna Type</label>
           <Field
             name="Antennatype"
             component="input"
             type="text"
             placeholder="Antennatype"
           />
         </div>
         <div>
         <label>Frequency</label>
           <Field
             name="Frequency"
             component="input"
             type="text"
             placeholder="Frequency"
           />
         </div>
         <div>
         <label>Station Location</label>
           <Field
             name="loc"
             component="input"
             type="text"
             placeholder="location"
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
         </div>
         
       </form>
     )}
   />
 </Styles>

</div>)
  
}
else return ( 
  <h1> </h1>
)
  
}

 }

    

export default NewLink;
