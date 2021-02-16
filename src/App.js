import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
    <Greeting name="Mike"/>
    <h1>
      Hello from React !!!!!!!!!!
    </h1>
    <h2>This shit is declicious!</h2>
    <h2>How did she get there?!</h2>
    <Greeting name="Tom"/>
    <Greeting name="Mark"/>
    <Greeting name="Travis"/>
    </>
  );
}

export default App;
