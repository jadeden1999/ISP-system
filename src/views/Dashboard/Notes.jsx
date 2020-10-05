import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from 'axios';
import avatar from "assets/img/faces/marc.jpg";
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import ip from "../../variables/ip"


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
class  Notes extends React.Component  {

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
  onSubmit = async (values , e) => {
 

let t = sessionStorage.getItem("token")
   
   
console.log(t)
var config = {
 headers: {'authtoken': t}
};

    let data = values;
   
    axios.post(`http://${ip}:3002/notes/newnote`, {data} , config)
    .then(alert('Note Sent!'))
    .catch(err => console.log(err))
    
   
    
    
   }
 

  
 state = {
        authenticated: false
      }


  

 render(){

if (this.state.authenticated) {
  return (<div>

  <Styles>

   <h1>Send Notes</h1>
   <h3>Unlimitik POS system V1.0</h3>

   
   <Form
     onSubmit={this.onSubmit}
     initialValues={{ }}
     render={({ handleSubmit, form, submitting, pristine, values  }) => (
       <form onSubmit={handleSubmit}>

         
        
        
      

       
        
         <div>
           <label>Notes</label>
           <Field name="notes" component="textarea" placeholder="Notes" />
         </div>
         <div className="buttons">
           <button type="submit"  disabled={submitting || pristine} >
             Send
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

    

export default Notes;
