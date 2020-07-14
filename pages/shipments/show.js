import React from 'react';
import Layout from '../../components/Layout';
import Shipment from '../../backend/contractInstances/shipment';
import { Card,Grid,Button,Form,Input,Message, Icon } from 'semantic-ui-react';
import web3 from '../../backend/web3';
import user from '../../backend/contractInstances/user';
import File from '../../components/uploadFile'
import Purchaser from '../../backend/contractInstances/purchaser'
import { Router } from '../../routes';
import { Link } from '../../routes';

class Show extends React.Component{
  state = {
    purch: '',
    shipAdd: '',
    errorMsg: '',
    loading:false,
  }

    static async getInitialProps(props) {
        const shipment = Shipment(props.query.address);
        console.log(props.query.add);
        const summary = await shipment.methods.getUser().call();
        console.log(summary);

        return {
            address: props.query.address,
            description: summary[0],
            amount: summary[1]
        };
    }
    renderCards() {
          const {
              description,amount} = this.props;

          const items = [
              {
                  header:'Description',
                  description: description,
                  style: { overflowWrap: 'break-word',
                            fluid :'red' }
              },
              {
                  header: 'Quantity',
                  description: amount
                }
          ];
          return <Card.Group items={items} />;
      }
      onClick = async (event) =>
      {
        event.preventDefault();
        this.setState({loading: true, errorMsg: 'Creating...'})
        try{
        const accounts = await web3.eth.getAccounts();
        const stake = await user.methods.val(this.state.purch).call();
        console.log(stake);
        const purchaser = Purchaser(stake);
        await purchaser.methods
        .getAdd(this.props.address,this.state.purch)
        .send({
            from: accounts[0]
        });
       setTimeout(Router.pushRoute(`/producer/${accounts[0]}`),3500);
      }catch(err)
      {
        this.setState({errorMsg: err.message});
      }
    
    if(this.state.errorMsg==="Creating..."){
      this.setState({errorMsg: "success",loading: true});
   
  }
  else
  this.setState({loading: false});
  };


    render() {
        return(
          <Layout>
          <h3 style={{color:'white'}}>Shipment Dashboard</h3>
          <Grid>
              <Grid.Row>
              <Grid.Column width={10}>
              {this.renderCards()}
              </Grid.Column>
              <Grid.Column width={6}>
            <File address={this.props.address}/>
            </Grid.Column>
              </Grid.Row>
          </Grid>
          <h1></h1>
          <Form onSubmit = {this.onClick} error={!!this.state.errorMsg}>
          <h3 style={{color:'white'}}>Send Shipment </h3>
          <Form.Field>
              <label style={{color:'white'}}>Purchaser Address</label>
              <Input
              value ={this.state.purch}
              onChange={event => this.setState ({ purch: event.target.value })} />
              
              </Form.Field>
              {this.state.errorMsg==="success" ? <Message positive header="Shipment Status" content="Sent!"></Message>:
                (this.state.errorMsg==='Creating...') ? <Message positive header="Shipment status" content="Sending..."></Message>:
                <Message
                error
                header="Please check the entered address!"
                //content={this.state.errorMsg}
                />}
              <Button
              primary 
              animated 
              loading={this.state.loading}>
               <Button.Content visible>
                               Send!

                           </Button.Content>
                           <Button.Content hidden>
                               <Icon name="paper plane"/>
                           </Button.Content>
                </Button>
                
          
          </Form>
          </Layout>
        );
    }
}

export default Show;
