import React from "react";
// @material-ui/core components

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
class  UserProfile extends React.Component  {

  componentDidMount() {
    let t = sessionStorage.getItem("token")
   
   
    console.log(t)
    var config = {
     headers: {'authtoken': t}
   };
     
       axios.get(`http://${ip}:3002/api/users`, config )
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
  onSubmit = async (values) => {
 

let t = sessionStorage.getItem("token")
   
   
console.log(t)
var config = {
 headers: {'authtoken': t}
};

    let data = values;
   
    axios.post(`http://${ip}:3002/api/users/newuser`, {data} , config)
    .then(result => console.log(result), alert('User Created ') ,window.location.replace(`${href}/admin/Viewusers`))
    .catch(err => console.log(err))
    
   
    
    
   }
 

  
 state = {
        authenticated: false
      }


  

 render(){

if (this.state.authenticated) {
  return (<div>

  <Styles>

   <h1>Create New User</h1>
   <h3>Unlimitik POS system V1.0</h3>

   
   <Form
     onSubmit={this.onSubmit}
     initialValues={{ }}
     render={({ handleSubmit, form, submitting, pristine, values  }) => (
       <form onSubmit={handleSubmit}>
         <div>
           <label>Full Name</label>
           <Field
             name="name"
             component="input"
             type="text"
             placeholder="Full Name"
           />
         </div>
         <div>
           <label>Address</label>
           <Field
             name="address"
             component="input"
             type="text"
             placeholder="address"
           />
         </div>
         <div>
           <label>Phone Number</label>
           <Field
             name="phonenumber"
             component="input"
             type="text"
             placeholder="phonenumber"
           />
         </div>
         <div>
         <label>ISP</label>
           <Field
             name="isp"
             component="input"
             type="text"
             placeholder="isp"
           />
         </div>
         <div>
         <label>Account</label>
           <Field
             name="account"
             component="input"
             type="text"
             placeholder="account"
           />
         </div>
         <div>
         <label>Account Type</label>
           <Field
             name="accounttype"
             component="input"
             type="text"
             placeholder="accounttype"
           />
         </div>
         <div>
         <label>Paid</label>
           <Field
             name="paid"
             component="input"
             type="text"
             placeholder="paid"
           />
         </div>
         <div>
         <label>Static IP</label>
           <Field
             name="staticip"
             component="input"
             type="text"
             placeholder="staticip"
           />
         </div>
         <div>
         <label>Static IP Date</label>
           <Field
             name="staticipdate"
             component="input"
             type="date"
             placeholder="staticipdate"
           />
         </div>
         <div>
         <label>Bill</label>
           <Field
             name="bill"
             component="input"
             type="text"
             placeholder="bill"
           />
         </div>
         <div>
         <label>Balance</label>
           <Field
             name="balance"
             component="input"
             type="number"
             placeholder="balance"
           />
         </div>
         <div>
         <label>username</label>
           <Field
             name="username"
             component="input"
             type="text"
             placeholder="username"
           />
         </div>
         <div>
         <label>pass</label>
           <Field
             name="pass"
             component="input"
             type="text"
             placeholder="pass"
           />
         </div>
         <div>
         <label>AP / IP</label>
           <Field
             name="apip"
             component="input"
             type="text"
             placeholder="AP / IP"
           />
         </div>
         <div>
         <label>Summer User</label>
           <Field
             name="isSummer"
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

    

export default UserProfile;
