
import { Form } from 'antd';
import './login.css';
import { useState } from 'react';

const Login = ({ onFinish, onFinishFailed }) => {
const[steps,setSteps]=useState(1);

    return (<>
     {steps===1 &&
        <div className='step1-page'>
            <div className='login-form'>
                <div className='step1-title center'>Hey there! </div>
                <div className='step1-des center'>We have curated a 3 minute survey to get you started on your GoodStep journey</div>
                <div className='center'><button className='step1-primary-button' onClick={()=>{setSteps(2)}}>Let’s go</button></div>
            </div>
        </div>
}
{steps===2 &&
        <div className='login-box'>
        <div className='login-form'>
            <div className='login-title center'>Let's get started! </div>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <input type='email' placeholder='Enter Email' className='inputBox' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <input type='password' placeholder='Enter Password' className='inputBox' />
                </Form.Item>
                <Form.Item>
                    <div className='center'><button className='primary-button' type="primary" htmlType="submit">Log In</button></div>
                </Form.Item>
            </Form>
        </div>
    </div>
}
    {steps===3 &&
        <div className='login-box'>
            <div className='login-form'>
                <div className='login-title center'>Let's get started! </div>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <input type='email' placeholder='Enter Email' className='inputBox' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <input type='password' placeholder='Enter Password' className='inputBox' />
                    </Form.Item>
                    <Form.Item>
                        <div className='center'><button className='primary-button' type="primary" htmlType="submit">Log In</button></div>
                    </Form.Item>
                </Form>
            </div>
        </div>
}
    </>)
}

export default Login;