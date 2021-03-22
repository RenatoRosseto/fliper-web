import React, { useState, useEffect } from 'react'

import client from '../../services/client-graphql'
import { wealthSummary } from '../../services/queries/wealthSummary'

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
  const [collapsed, setCollapsed] = useState(true);

  const [valorInvestido, setValorInvestido] = useState(0)
  const [rentabilidadeMes, setRentabilidadeMes] = useState(0)
  const [valorCDI, setValorCDI] = useState(0)
  const [ganhoMes, setGanhoMes] = useState(0)

  useEffect(() => {
    async function carregaDados() {
      client.query({
        query: wealthSummary
      }).then((res) => {
        console.log(res.data.wealthSummary[0])
        setValorInvestido(res.data.wealthSummary[0].total)
        setRentabilidadeMes(res.data.wealthSummary[0].profitability)
        setValorCDI(res.data.wealthSummary[0].cdi)
        setGanhoMes(res.data.wealthSummary[0].gain)
      })
    }
      carregaDados()
    }, []) 

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)} >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
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
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          header
        </Header>
        <Content
          className="site-layout-background"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#e8ebf6'
          }}
        > 
          Content
        </Content>
      </Layout>
    </Layout>
  );
}