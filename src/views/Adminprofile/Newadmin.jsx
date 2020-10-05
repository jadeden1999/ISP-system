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


class  NewAdmin extends React.Component  {

  componentDidMount() {
    let t = sessionStorage.getItem("token")
   
   
    console.log(t)
    var config = {
     headers: {'authtoken': t}
   };
     
       axios.get(`http://${ip}:3002/admin`, config )
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
 
alert('Admin Created ')
let t = sessionStorage.getItem("token")
   
   
console.log(t)
var config = {
 headers: {'authtoken': t}
};

    let data = values;
   
    axios.post(`http://${ip}:3002/admin/register`, {data}, config )
    .then(result => alert('Admin created', result))
    .catch(err => console.log(err))
    
   
    
    
   }
 

  
 state = {
        authenticated: false
      }


  

 render(){

if (this.state.authenticated) {
  return (<div>

  <Styles>

   <h1>Create New Admin</h1>
   <h3>Unlimitik POS system V1.0</h3>

   
   <Form
     onSubmit={this.onSubmit}
     initialValues={{isMaster: false }}
     render={({ handleSubmit, form, submitting, pristine, values  }) => (
       <form onSubmit={handleSubmit}>
         <div>
           <label>Name</label>
           <Field
             name="name"
             component="input"
             type="text"
             placeholder="name"
           />
         </div>
         <div>
           <label >Password</label>
           <Field
             name="password"
             component="input"
             type="text"
             placeholder="password"
           />
         </div>
         <div>
           <label>Is Master (can add/edit/delete data)</label>
           <Field
             name="isMaster"
             component="input"
             type="checkbox"
            
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
           <a href={href +"/root"}> 
            <button
             type="button"
             onClick={form.reset}
            
           >
            Back
           </button>
           </a>
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

    

export default NewAdmin;
