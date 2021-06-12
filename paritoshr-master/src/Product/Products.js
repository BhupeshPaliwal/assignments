import React, { Component , Fragment, useDebugValue} from 'react';
import ReactDOM from "react-dom";
import history from '../history';
import { useHistory, Link } from "react-router-dom";
import { Button, Layout, Menu, Divider, Input, TreeSelect, Select } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Home from '../Home/Home';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';




import { products } from '../data';
const options = ['contains', 'startswith'];
const { SubMenu } = Menu;
const { Search } = Input;
const { Header, Footer , Sider, Content } = Layout; 
async function onclickcontactme(){
  history.push('/ContactMe');

}
async function handleClick(){  
  console.log('click ');}

export default function Products (){




            
      return (
         
        <Layout>
          <Sider>
          <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        
        <SubMenu key="sub1" icon={<MailOutlined />} title="Menu">
        <input placeholder="input search text"  />
          <Menu.ItemGroup key="g1" title="Home">
                <Menu.ItemGroup key="1"title="Module 1">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="2" title="Module2">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="3" title="Module 3">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="4" title="Module 4">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="5" title="Module 5">
                    <Menu.Item key="1">Sub Module 1</Menu.Item>
                    <Menu.Item key="2">Sub Module 2</Menu.Item>
                    <Menu.Item key="3">Sub Module 3</Menu.Item>
                    <Menu.Item key="4">Sub Module 4</Menu.Item>
                    <Menu.Item key="5">Sub Module 5</Menu.Item>
                </Menu.ItemGroup>
          </Menu.ItemGroup>
        </SubMenu>
 
      </Menu>
      </Sider>
      
        <Layout className="layout">
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}> */}
        <Header>
        <div/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
           
            <Menu.Item key="1"> Home </Menu.Item>
            <Menu.Item key="2">About Me</Menu.Item>
            <Menu.Item key="3" onClick={onclickcontactme} >Contact Me
            </Menu.Item>
            </Menu>
            <Menu>
          
        <Divider orientation="right" >
            <Menu.Item> Welcome User </Menu.Item>
            <Menu.Item><Button> <Link to="/"> LOGOUT </Link></Button></Menu.Item>
        </Divider>
        </Menu>
        </Header>
        <Content></Content>
        <Footer></Footer>
        </Layout>
      </Layout> 
      
     
        

    )



       
    

}