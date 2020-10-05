import React from "react";
// @material-ui/core components

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
const href = `http://${ip}${port}`

 

 



const columns = [
  {
    Header: 'AP/IP',
    accessor: 'apip' // String-based value accessors!
  },
  {
  Header: 'Name',
  accessor: 'name'
   // String-based value accessors!
}, {
  Header: 'Address',
  accessor: 'address',
  Cell: props => <span className='number'>{props.value}</span>
}, {
  Header: props => <span>Balance</span>, // Custom header components!
  accessor: 'balance'
},
{
  Header: 'Paid',
accessor: 'paid'
},
{
  
  Header: 'Functions',
  accessor: 'id',
Cell: props => <a href={href + '/admin/ViewUser/' + props.value}><button > VIEW</button></a>
}
]

                                    
class OutUsers extends React.Component  {

  

  state = {
    userdata: [],
   authenticated: false
   
  }
  
  
   componentDidMount() {
    let t = sessionStorage.getItem("token")
  
  
    console.log(t)
    var config = {
     headers: {'authtoken': t}
   };
    axios.get(`http://${ip}:3002/debt/out`, config)
    .then(res => {
      if (res.status > 300) {
        this.setState({authenticated: false})
          }
          else if (res.status === 200)  {
            this.setState({authenticated: true})
            const userdata = res.data;
      

            this.setState({ userdata });
          }
    
    
      console.log(res.status)
      
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
             Advance Payments
                </h4>
                <p className="cardCategoryWhite">
                 Unlimitik Networks POS system V 1.0
                </p>
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
        <h1> </h1>
      )
    }
    // <Table
    //   tableHeaderColor="primary"
    //    tableHead={["ID", "Name", "Paid", "Address", "Number", "Actions"]}
    //   tableData={this.state.userdata}
    // />
  }
  

    }
    

   

export default OutUsers;
