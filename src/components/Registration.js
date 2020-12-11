import React, { Component } from 'react'
import {registerUser} from '../actions/todoActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 

 class Registration extends Component {
    constructor(props){
     super(props);
     this.state={
        userDetails:[],
        name:'',
        email:'',
        password:''
}    
   this.onSubmit=this.onSubmit.bind(this)
   this.onChangeUser=this.onChangeUser.bind(this)

    }

    onChangeUser(event){
        this.setState({
            [event.target.name]:event.target.value
        })

        

    }
     
     onSubmit(event){
        event.preventDefault();
         const user = {
             name:this.state.name,
             email:this.state.email,
             password:this.state.password
         }
         this.props.registerUser(user, this.props.history);
     }

    render() {
        return (
            <div>
            <h3>Registration Page </h3>
               <form onSubmit={this.onSubmit}>
                <input type="text" id="name" placeholder="Name" name="name" value={this.state.name} onChange={this.onChangeUser} required /><br/>
                <input type="email" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangeUser} required /><br/>
                <input type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangeUser} required /><br/>
                <input type="submit" />
               </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  userDetails: state.userDetails
});


export default connect(mapStateToProps, {registerUser})(Registration);


