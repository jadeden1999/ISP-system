import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import axios from 'axios';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import ImageResponsive from 'react-image-responsive';
import loginPageStyle from "./Styles";
import logo from "assets/img/Capture.JPG";
import image from "assets/img/bg7.jpg";
import ip from  "../../variables/ip"
import port from "../../variables/ip2"
import { inherits } from "util";

const href = `http://${ip}${port}`

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {Username: '',
                  Password: ''

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKey = this.handleKey.bind(this)
  }
  handleChange(event) {
    this.setState({Username: event.target.value});

  }
  handleChange2(event) {
    this.setState({Password: event.target.value});
  }

  handleSubmit(event) {
let values = {
  "Username" : this.state.Username,
  "Password": this.state.Password
}



    axios.post(`http://${ip}:3002/admin/login`, values)
    .then(res => {
   
      sessionStorage.setItem('token', res.headers.authtoken)
      window.location.href = `${href}/admin/dashboard`;
    })
    
  }
  handleKey(event) {
   
    var code = event.keyCode || event.which;
    if (code == 13) {
      let values = {
        "Username" : this.state.Username,
        "Password": this.state.Password
      }
      
      
      
          axios.post(`http://${ip}:3002/admin/login`, values)
          .then(res => {
         
            sessionStorage.setItem('token', res.headers.authtoken)
            window.location.href = `${href}/admin/dashboard`;
          })

    }
    
        
      }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
  
    const { classes, ...rest } = this.props;
    return (
      <div>
        
        <div
          className={classes.pageHeader}

          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container} style={{
            
          }}>
            <GridContainer justify="center">
              <GridItem xs={6} sm={6} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
              
                  <form className={classes.form}>
                 
                  
                    <CardBody>
                    <img src={logo} 
                  style = {{
                    width: "100%",
                    height: "100%"
               
                  }}

                  />
                      <CustomInput
                        labelText="Username"
                        id="Username"

                        formControlProps={{
                          fullWidth: true
                        }}
                      
                        inputProps={{
                          onChange:  this.handleChange,
                          onKeyPress : this.handleKey,
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        onChange={this.handleChange2}
                        formControlProps={{
                          fullWidth: true
                        }}
          
                        inputProps={{
                          onChange:  this.handleChange2,
                          onKeyPress : this.handleKey,
                          
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.handleSubmit}>
                 LOGIN
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
       
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
