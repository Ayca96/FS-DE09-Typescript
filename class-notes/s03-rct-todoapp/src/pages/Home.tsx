import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { Container } from "@mui/material";
import axios from "axios";
import TodoListItem from "../components/TodoListItem";
import { notify, SweetAlertIcons } from "../helper/notify";

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}

const Home = () => {
  //    const [todos,setTodos] = useState([] as ITodoType[]);
  //    const [todos,setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); // yaygin olan kullanim.


 const getTodos = async ()=>{
  try {
    const {data}= await axios<ITodoType[]>(url)
    console.log(data);
    setTodos(data)
    
  } catch (error) {
    console.log(error);
    
  }
 }
//! 1. Yol 
//  const addTodo = async (text:string)=>{
//   try {
//      await axios.post(url,{task:text, isDone:false})
//      getTodos()
//   } catch (error) {
//     console.log(error);
    
//   }
  
//  }

//  useEffect(()=>{
//  getTodos()
//  },[])


//!2. Yol 

// type AddFn = (text:string)=> Promise <void>

const addTodo: AddFn = async (text)=>{
  try {
     await axios.post(url,{task:text, isDone:false})
     notify("Todo created successfully", SweetAlertIcons.SUCCESS)
     getTodos()
  } catch (error) {
    notify("Todo not created!", SweetAlertIcons.ERROR)
    console.log(error);
    
  }
  
 }

 useEffect(()=>{
 getTodos()
 },[])



 const toggleTodo:ToggleFn = async(todo)=> {
  try {
    await axios.put(`${url}/${todo.id}`, {...todo, isDone:!todo.isDone})
  } catch (error) {
    console.log(error);
    
  }finally{
    getTodos()
  }
 }

 const deleteTodo:DeleteFn = async(id)=> {
  try {
    await axios.delete(`${url}/${id}`)
  } catch (error) {
    console.log(error);
    
  }finally{
    getTodos()
  }
 }


  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo}/>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </Container>
  );
};

export default Home;
