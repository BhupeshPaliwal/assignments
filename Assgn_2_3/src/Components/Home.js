import React from 'react';
import "./Home.css";
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector  } from "react-redux";
import { Button, PageHeader } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,UserOutlined,VideoCameraOutlined,UploadOutlined,HomeOutlined,  CustomerServiceOutlined, MenuOutlined} from '@ant-design/icons';
import Aboutme from './Pages/aboutme'
import Contactme from './Pages/contactme'
import Myhome from './Pages/myhome'

const { Header, Sider, Content } = Layout;


const Home = () => {
    const user = useSelector(selectUser);

    const dispatch= useDispatch();
    const handleLogout =(e) => {
        e.preventDefault();

        dispatch(logout());
    };
    

    return (
        <div>
            <Router>
            <Layout>
                <Header className="logo" ><h1>Welcome <span className="user_name">{user.username}</span></h1></Header>
                <PageHeader className="logo" style={{ padding: 0 }} 
                extra={[<Button 
                    type="primary"
                    icon={<PoweroffOutlined />}
                    className="logoutbtn" 
                    onClick= {(e) => handleLogout(e)}>Logout</Button>]}>
                </PageHeader>
                
            </Layout>

            <Layout className="layout">
                <nav>
                <Sider trigger={null}>
                <div className="logo" />
                <Menu theme="light" mode="inline" >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/myhome">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/aboutme">About Me</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CustomerServiceOutlined />}>
                    <   Link to="/contactme">Contact Me</Link>
                    </Menu.Item>
                </Menu>
                
                </Sider>
                </nav>
                    
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >
                <h1>BITS</h1>
                <Switch>
                <Route path="/myhome">
                    <Myhome />
                </Route>
                </Switch>
                <Switch>
                <Route path="/aboutme">
                    <Aboutme />
                </Route>
                </Switch>
                <Switch>
                <Route path="/contactme">
                    <Contactme />
                </Route>
                </Switch>   
                
                </Content>
                            
                </Layout>   
            </Router>
        </div>
    )
}

export default Home;


