import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-atletica.png";
import { users } from './../../repository/users';
import "./styles.css";

export default function LoginPage() {
  const [inputNome, setInputNome] = useState('');
  const [inputSenha, setInputsenha] = useState('');
    let navigate = useNavigate();

  
    function handleOnSubmit(e){
        e.preventDefault();

        for(let i = 0; i < users.length; i++){
          if(Object.keys(users[i]) == inputNome && users[i][inputNome].senha == inputSenha){
            localStorage.setItem('session', JSON.stringify(users[i][inputNome]));
              navigate('app', {replace:true})
              break;
            }else{
              alert('Usuario ou Senha incorretos, tente novamente.')
            }
        }

    }

  return (
    <div className="wrapper" id="wrapper-login">
      <div id="card-login">
        <div className="banner">
          <div className="banner-logo">
            <img src={Logo} alt="Logo Atletica Castores" />
          </div>
          <div className="banner-text">
            <p>
              <strong>Os castores </strong> é uma das atleticas mais
              tradicionais de Belo Horizonte, buscando sempre promover a
              interatividade entre os estudantes através de eventos esportivos e
              festas.
            </p>
          </div>
        </div>
        <div className="form-login">
            <h1>Login</h1>
          <form onSubmit={handleOnSubmit} action='/app'>
            <div className="input-container">
                <label htmlFor="user">Usuario</label>
                <input type="text" name="user" id="user" value={inputNome} onChange={(e)=>setInputNome(e.target.value)} required/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" value={inputSenha} onChange={(e)=>setInputsenha(e.target.value)} required/>
            </div>
            <button type="submit">Acessar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
