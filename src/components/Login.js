import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loginCheck} from '../actions/todoActions';

 class Login extends Component {
    constructor(props){
     super(props);
     this.state={
        userDetails:[],
        email:'',
        password:'',
        error:''
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
             email:this.state.email,
             password:this.state.password
         }
         this.props.loginCheck(user,this.props.history)
         if(this.props.history){
             this.setState({
                 error: 'wrong id and password'
             })
         }
     }
    render() {
        const {error} = this.state;
        return (
            <div>
                <h3>Login Page </h3>
               <form onSubmit={this.onSubmit}>
                <input type="email" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangeUser} /><br/>
                <input type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangeUser}/><br/>
                    <p className="error">{error}</p>
                   <input type="submit" />
           
               </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  userDetails: state.userDetails
});


export default connect(mapStateToProps, {loginCheck})(Login);
