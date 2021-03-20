import React, { useState } from 'react'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './styles.scss'

export default function Home() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <button type="submit" className="ant-btn ant-btn-secondary ant-btn-lg sc-dmlrTW kSBIxJ" onClick={() => setCollapsed(!collapsed)}>Teste abre menu</button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        > 
          Content
        </Content>
      </Layout>
    </Layout>
  );
}