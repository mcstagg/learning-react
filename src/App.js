import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
    <Greeting name="Mike" favNumber={420} />
    <h1>
      Hello from React !!!!!!!!!!
    </h1>
    <h2>This shit is declicious!</h2>
    <h2>How did she get there?!</h2>
    <Greeting name="Tom" favNumber={69} />
    <Greeting name="Mark" favNumber={99} />
    {/* <Greeting name="Travis" favNumber={710} /> */}
    </>
  );
}

export default App;
