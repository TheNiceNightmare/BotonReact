import { useState } from 'react';
import {AlertComponent} from './components/AlertComponent';
import './App.css';

function App() {
  const [alertShow, setAlertShow] = useState(false);

  return (
    <>
      
      <div>
        {alertShow ? (
          <AlertComponent onClick={()=> setAlertShow(false)}>
            Are you sure?
            </AlertComponent>
        ) : (
          <button onClick={()=> setAlertShow(true)}>Delete</button>
        )} 
      </div>    
    </>
  );
}

export default App;
