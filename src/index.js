import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Addstudent from './Student/Addstudent'; 
import Studentlist from './Student/Studentlist'; 
import Editstudent from './Student/Editstudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <BrowserRouter>
//     <Route path="/" component={App} />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <div>
//      <BrowserRouter>  
//       <Routes>
//           <Route  path="/Studentlist" component={Studentlist}/>
//           <Route  path="/Addstudent" component={Addstudent}/>
//           <Route  path='/edit/:id' component={Editstudent} />  
//         </Routes>
//     </BrowserRouter> 

//  </div>, document.querySelector('.container'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
