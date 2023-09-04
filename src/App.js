import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { BrowserRouter, Routes, Route, NavLink ,Redirect} from "react-router-dom";
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import { BaseUrl } from './Constant';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState('false');

  const onFinish = async (values) => {
    // const response = await fetch(`${BaseUrl}/login`, {
    //   method: "POST", 
    //   body: JSON.stringify(values), 
    // });
    // console.log(response,'response')
    setLoggedIn('true');
    localStorage.setItem("logged", 'true');


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setLoggedIn('false');
    localStorage.setItem("logged", 'false');
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoggedIn(localStorage.getItem('logged'));
  //     setLoading(false);
  //   }, [1000])
  // }, [])

  return (
    <div className='app'>
        <Spin spinning={loading}>
          {loggedIn === 'true' ?
            // <Home />
            <Home/>
            :
            <Login onFinish={onFinish} onFinishFailed={onFinishFailed} />
          }
        </Spin>
    </div>
  );
};

export default App;