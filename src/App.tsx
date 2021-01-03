import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Collapse, Button } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Switch, Route, Link, BrowserRouter, Router } from 'react-router-dom';

import CurrentDate from './components/CurrentDate';
import UsersList from './components/UsersList';
import UsersEdit from './components/UsersEdit';
import RolesAndPermissions from './components/RolesAndPermissions';
import Settings from './components/Settings';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  const [openKeys, setOpenKeys] = useState('');

  const toggleMenu = () => {
    openKeys === '' ? setOpenKeys('sub1') : setOpenKeys('');
  }

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} className="site-layout-background" theme="light">
          <Button 
            type="text" 
            icon={<MenuOutlined />}
            onClick={toggleMenu}
          >
          </Button>
          <CurrentDate/>
          <Menu
            mode="inline"
            openKeys={[openKeys]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title="Users" icon={<UserOutlined />}>
              <Menu.Item key="1"><Link to="/users-list">Users List</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/users-edit">Users Edit</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/roles-and-permissions">Roles and permissions</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/settings">Settings</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route path="/users-list" component={UsersList}/>
              <Route path="/users-edit" component={UsersEdit}/>
              <Route path="/roles-and-permissions" component={RolesAndPermissions}/>
              <Route path="/settings" component={Settings}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
};

export default App;
