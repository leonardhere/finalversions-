import React from 'react';
import s from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import Form from "./pages/form/Form";
function App() {

  return (
      <div className={s.app}>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"}  element={<Main/>}/>
                  <Route path={"/form"} element={<Form/>}>
              </Route>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
