import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  let title = "제목";
  
  let output = <div className='App'>
  <Todo />
  <Todo />
  <h2>{title}</h2>
  </div>;

  return (
    output

  );
}

export default App;
