import React, { Component } from 'react'
import {HashRouter as Router,Route,Link,NavLink} from "react-router-dom"
import Login from './Login';
import Registration from './Registration';
import TodoItem from './TodoItem';

export default function Home(){
        return (
            <Router>
                  <div className="jumbotron">
                      <ul className="navbar">
                          <li>
                              <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                              <NavLink to="/about">About</NavLink>
                          </li>
                          <li>
                              <NavLink to="/login">Login</NavLink>
                          </li>
                           <li>
                              <NavLink to="/registration">Registration</NavLink>
                          </li>
                         </ul>
                         {/* <Route exact path="/" component={Home}/> */}
                         <Route  path="/about" component={About}/>
                         <Route  path="/login" component={Login}/>
                         <Route  path="/registration" component={Registration}/>
                          <Route  path="/todolist" component={TodoItem}/>
                         </div>          
            </Router>
        );
    }
    function Home1(){
        return (
            <div> 
                <h3>Home</h3>          
            <h3>Welcome to Todo App</h3>
            </div>
        );
    }

    function About(){
        return (
            <div>
            <h2>About</h2>
            <h2>This is a Todo App which manages tasks of day to day professional life.</h2>
            </div>
        );
    }
    

    

