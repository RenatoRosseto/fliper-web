import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './styles.scss'

export default function Login() {
  const [mostraSenha, setMostraSenha] = useState(false);
  const [checkboxSalvaDados, setCheckboxSalvaDados] = useState(false);
  
  function onChangeCheckbox(e) {
    console.log(`checked = ${e.target.checked}`);
    setCheckboxSalvaDados(e.target.checked)
  }

  return (
    <div className="ant-row ant-row-space-around ant-row-middle sc-iMedgv cBougk">
      <div className="ant-col ant-col-24 ant-col-md-12">
        <div className="sc-fVfVBW hMPvwS intro-leftside-appear-done intro-leftside-enter-done">
          <img className="imgLogo" alt="logo fliper" src="/assets/fliper.logo@2x.png"/>
        </div>
      </div>

      <div className="ant-col ant-col-24 ant-col-md-12">
        <div className="sc-iJmhdZ ilqVkw intro-rightside-appear-done intro-rightside-enter-done">
          <div className="sc-fSnZzA fjfPfa">
            <div className="sc-hKKeuH dBpnMu">
              <h1>Olá!</h1>
              <h3>Seja bem vindo(a)</h3>
            </div>
            <form id="login-form" className="ant-form ant-form-horizontal">
              <div className="sc-fcmPfK XNwXh">
                <div className="ant-row ant-form-item">
                  <div className="ant-col ant-form-item-control">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content">
                        <input placeholder="Email" id="login-form_email" className="ant-input sc-bkzZxe gjQfWK" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-row ant-form-item">
                  <div className="ant-col ant-form-item-control">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content">
                        <span className="ant-input-affix-wrapper ant-input-password sc-idOhPF fTZgxx">
                          <input placeholder="Senha" id="login-form_password" action="click" type={mostraSenha ? "text" : "password" } className="ant-input"/>
                            <span className="ant-input-suffix" onClick={() => setMostraSenha(!mostraSenha)}>
                              <img src={mostraSenha ? "/assets/eye.icon.svg" : "/assets/eye.closed.svg"} className="ant-input-password-icon"/>
                            </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sc-bjPnff jhoAUI">
                <div className="ant-row ant-form-item signinbtn-container">
                  <div className="ant-col ant-form-item-control">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content">
                        <Link to="/teste">
                          <button type="submit" className="ant-btn ant-btn-secondary ant-btn-lg sc-dmlrTW kSBIxJ">
                            <span>Entrar</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ant-row ant-form-item remember-check">
                  <div className="ant-col ant-form-item-control">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content d-flex">
                        <label className="ant-checkbox-wrapper sc-bBXqnf bHDNuO">
                          <Checkbox checked={checkboxSalvaDados} onChange={onChangeCheckbox}>Salvar os dados e manter conectado</Checkbox>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="ant-btn ant-btn-link sc-dmlrTW hqqMXw forgot-button">
                  <span>Esqueceu a senha?</span>
                </button>
              </div>
            </form>
          </div>
            
            <div className="sc-eTLWQi ioRIdA">
              <p>Novo por aqui? <strong><a href="#">Faça agora o seu cadastro!</a></strong></p>
            </div>
          </div>
        </div>
    </div>
  )
}