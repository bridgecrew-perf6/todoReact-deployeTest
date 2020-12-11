import React, { Component } from 'react'
import {getAllTodos, createTodo, deleteTodo,updateTodo} from '../actions/todoActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
 class TodoItem extends Component {
     constructor(props){
         super(props);
         this.state = {
             todos : [],
             name:'',
             status:false,
             flag:false
         }
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
         this.onDelete = this.onDelete.bind(this);
         this.onEditHandler = this.onEditHandler.bind(this);
         this.onClickCheckBox = this.onClickCheckBox.bind(this);
     }
    componentWillMount(){
        this.props.getAllTodos();
        this.setState({
            todos:this.props.todos.todos
        })
        console.log(this.state.todos);
    }
    onDelete(event){
        const id = event.target.id;
        console.log(id)
        this.props.deleteTodo(id);
        window.location.reload();

    }
     onUpdate(event){
        const id = event.target.id;
        console.log(id)
        
        window.location.reload();

    }
    onChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit(){
        const newTodo = {
            name:this.state.name,
            status:false,
            flag:false
        }
        this.props.createTodo(newTodo);
    }
   onEditHandler(event){
       console.log(event.target.id)
       console.log(this.state.flag)
    //    const id =event.target.id;
    //     this.props.updateTodo(id)



}

onClickCheckBox(event){
    console.log(event.target.id)
    const id = event.target.id
    
    const todo =  this.props.todos.todos.filter(todo=>{
        console.log(todo.toDoId)
        return  (todo.toDoId === id)
    })
    console.log(todo[0])
}
    render() {
        const {todos} = this.props.todos;
        return (
            
                <div className="jumbotron">
                     
                <h3>Todo List </h3>
             
                <form onSubmit={this.onSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                <button type="submit">Create Todo</button>
                </form>
                <ul >{todos.map((todo,index) =>{
                    return (<li key={index}><div><input type="checkbox" value={todo.name} id={todo.toDoId} onClick={this.onClickCheckBox} />{todo.name}</div>
                    <button id={todo.toDoId} onClick={this.onDelete}>delete</button>|
                    <button id={todo.toDoId} onClick={this.onEditHandler}>edit</button>
                    </li>)
                    })}</ul>
            </div>
        )
    }
}
 TodoItem.propTypes = {
   getAllTodos: PropTypes.func.isRequired,
   createTodo: PropTypes.func.isRequired,
   deleteTodo: PropTypes.func.isRequired,
   updateTodo: PropTypes.func.isRequired
 };

const mapStateToProps = state => ({
  todos: state.todos,
 
});


export default connect(mapStateToProps, {getAllTodos, createTodo, deleteTodo,updateTodo})(TodoItem);
