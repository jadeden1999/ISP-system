import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";

import CardFooter from "components/Card/CardFooter.jsx";
import ReactTable from "react-table";
import axios from "axios";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";



import ip from "../../variables/ip"
console.log(ip)

class Dashboard extends React.Component {
constructor(props){
  super(props)
  this.state = {
    value: 0,
    revenue: 0,
    number: '',
    notes: [],
    id: '',
    
  };
 
}




  componentDidMount() {
    let t = sessionStorage.getItem("token")
  
  
  
    var config = {
     headers: {'authtoken': t}
   };
   axios.get(`http://${ip}:3002/debt`, config) 
.then(res =>  {
const data = res.data;
console.log('datadebt' ,data)




})
    axios.get(`http://${ip}:3002/api/users/revenue`, config)
    .then(res => {
      const userdata = res.data;
      
console.log(userdata)
      this.setState({ number: userdata });
    
      
    })
    // axios.get(`http://1localhost:3002/api/users/usernumber`)
    // .then(res => {
     

    //   this.setState({ number: res.data });
    
      
    // })
    axios.get(`http://${ip}:3002/notes`, config) 
.then(res =>  {
const data = res.data;
console.log('data' ,data)
this.setState({notes: data})



})

    
    
    
    
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
 
  render() {
    const { classes } = this.props;
    const columns = [
      {
        Header: ' Note',
        accessor: 'Note' // String-based value accessors!
      },
      
    {
      
      Header: 'Functions',
      accessor: '_id',
    Cell: props => <button onClick={() => {
    const i = sessionStorage.getItem('token')
  const  config ={ headers: {'authtoken': i}}
    
    let x = `http://${ip}:3002/notes/delete/`
    let  y = x + props.value;

    console.log('y', y)
    
axios.delete(y, config)
.then(window.location.reload())
    }}> Delete </button>
    }
    ]
   
    return (
      <div>
        <GridContainer>
         
          
         
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Users</p>
                <h3 className={classes.cardTitle}>{this.state.number}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <ReactTable
        data={this.state.notes}
        columns={columns}
       
        onFilteredChange={filtered => this.setState({ filtered })}


      />
        
        
        
        </GridItem>
        
        </GridContainer>
       
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
