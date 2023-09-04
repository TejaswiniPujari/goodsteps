import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HomeOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, Row, Col, Button } from 'antd';
import './header.css';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function getItem(label, key, icon, link, children) {
        label = <NavLink className="nav-link active" aria-current="page" to={link} onClick={()=>{toggleCollapsed()}}>{label}</NavLink>
        return { key, icon, children, label };
    }
    
    const items = [
        getItem('Home', '1', <HomeOutlined />, '/home'),
        getItem('Login', '2', <HomeOutlined />, '/'),
        getItem('Sign Up', '3', <HomeOutlined />, '/sign-up'),
    ];

    return (
        <Row>
            <Col md={6} lg={4}>
                <div className='menulist'>
                    {collapsed ?
                        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                        :
                        <Menu
                            defaultOpenKeys={window.innerWidth <= 480 ? [] : ['sub1', 'sub2']}
                            mode="inline"
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    }
                </div>
            </Col>
        </Row>
    );
};

export default Header;