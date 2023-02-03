// import logo from './logo.svg';
import './App.css';
import Formirput from './component/Formirput';
import List from './component/List';
import Foter from './component/Foter';
import { Dataprovider } from './component/Dataprovider';
import './index.css'
function App() {
  return (
    
    <Dataprovider>
    <div className="App c1">
        <h1>TO DO LIST</h1>
        <Formirput/>
        <List/>
        <Foter/> 
    </div>
    </Dataprovider>
    
   
  );
}


export default App;
//how to reverse html code to jsx?
