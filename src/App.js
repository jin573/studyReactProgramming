import './App.css';
import Todo from './Todo';
import React, { useState } from 'react';
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";

function App() {
  const[items, setItems] = useState([
  {
    id:"0",
    title: "Hello World 1",
    done: true
  },
  {
    id:"1",
    title: "Hello World 2",
    done: true
  }]);

//AddTodo 에 넘겨줄 addItem 함수 생성
  const addItem=(item) => {
    item.id = "ID-" + items.length; //key를 위한 id
    item.done = false; //done 으로 초기화
    setItems([...items, item]); //items 배열을 spread 하고 item 추가
    console.log("items: ", items);
  };


  let todoItems = 
    items.length > 0 && (
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item)=>(
          <Todo item={item} key={item.id}/>
        ))}
      </List>
    </Paper>
    );

  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/> {/**addItem 속성에 addItem 함수 넣어서 전달 */}
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
