import React, { useState, useEffect } from 'react'

import client from '../../services/client-graphql'
import { wealthSummary } from '../../services/queries/wealthSummary'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import Card from '../../components/Card'

import './styles.scss'

export default function Home() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const [btnVerMais, setBtnVerMais] = useState(false);

  const [valorInvestido, setValorInvestido] = useState(0)
  const [rentabilidadeMes, setRentabilidadeMes] = useState(0)
  const [valorCDI, setValorCDI] = useState(0)
  const [ganhoMes, setGanhoMes] = useState(0)

  const menu = (
    <Menu>
      <Menu.Item key="0">1st menu item</Menu.Item>
      <Menu.Item key="1">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

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
          <h2 className="tituloHeader">Olá, Usuário</h2>
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
          <div className="containerCardsHome">
            <Card>
              <div className="containerCardSeuResumo">
                <div className="containerTitulo">
                  <span className="tituloResumo">Seu resumo</span>
                  <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      <img className="iconeVerMais" src="/assets/more_vert-24px.svg" />
                    </a>
                  </Dropdown>
                </div>
                <div className="containerValorInvestido">
                    <span className="infoValor">Valor investido</span>
                    <span className="valorInvestido">{valorInvestido}</span>
                </div>
                <div className="containerRentabilidade">
                  <div className="ant-row">
                    <span className="infoValor">Rentabilidade/mês</span>
                    <span className="valoresRentabilidade">{rentabilidadeMes}</span>
                  </div>
                  <div className="ant-row">
                    <span className="infoValor">CDI</span>
                    <span className="valoresRentabilidade">{valorCDI}</span>
                  </div>
                  <div className="ant-row">
                    <span className="infoValor">Ganho/mês</span>
                    <span className="valoresRentabilidade">{ganhoMes}</span>
                  </div>
                </div>
                <div className="containerDivider"></div>
                <div className="containerBtn">
                  <button className="btnVerMais" onClick={() => setBtnVerMais(!btnVerMais)}>{btnVerMais ? "VER MENOS" : "VER MAIS"}</button>
                </div>
              </div>
            </Card>
            {
              btnVerMais ? 
              (
                <Card>
                  <p>bla1</p>
                  <p>bla2</p>
                  <p>bla3</p>
                </Card>
              ) : null
            }
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}