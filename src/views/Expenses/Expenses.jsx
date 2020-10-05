import React from "react";
// @material-ui/core components
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
import ip from "../../variables/ip"
import port from "../../variables/ip2"
const href= `http://${ip}${port}`





const columns = [
  {
    Header: 'Date',
    accessor: 'date' // String-based value accessors!
  },
  {
  Header: 'Expense',
  accessor: 'expense'
   // String-based value accessors!
}, {
  Header: 'Amount',
  accessor: 'amount',
  Cell: props => <span className='number'>{props.value}</span>
}, 

  {
  Header: 'Paid',
  accessor: 'paid'
   // String-based value accessors!
},
{
  Header: 'Note',
  accessor: 'note'
   // String-based value accessors!
},
{
  
  Header: 'Functions',
  accessor: '_id',
Cell: props => <a href={`${href}/admin/Viewexpense/` + props.value}><button > VIEW</button></a>
}
]


class Expenses extends React.Component  {

  

  state = {
    userdata: [],
   authenticated: false,
   
   
  }
  
  
   componentDidMount() {
    let t = sessionStorage.getItem("token")
  
  
   
    var config = {
     headers: {'authtoken': t}
   };
    axios.get(`http://${ip}:3002/api/expenses/`, config)
    .then(res => {
      
        if (res.status > 300) {
      this.setState({authenticated: false})
        }
        else if (res.status === 200) {
          this.setState({authenticated: true})
          const userdata = res.data;
      
console.log(userdata)
          this.setState({ userdata });
          
        }
     
    
    
    
  })
}
  
    
  

  render() {
    if(this.state.authenticated){
      return (
        <GridContainer>
        
      
  
      
  
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader plain color="primary">
                <h4 className="cardTitleWhite">
   Expenses
                </h4>
               <a href={`${href}/admin/Newexpense`}> <Button className='primary'> Add Expense</Button></a>
              </CardHeader>
              <CardBody>
              <ReactTable
              data={this.state.userdata}
              columns={columns}
              filterable
              filtered={this.state.filtered}
              onFilteredChange={filtered => this.setState({ filtered })}
  
  
            />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
  
    }
    else {
      return (
        <h1></h1>
      )
    }
    // <Table
    //   tableHeaderColor="primary"
    //    tableHead={["ID", "Name", "Paid", "Address", "Number", "Actions"]}
    //   tableData={this.state.userdata}
    // />
  }
  

    }
    

   

export default Expenses;
