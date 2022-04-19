<<<<<<< HEAD
import logo from '../../assets/images/logo-atletica.png'
=======
>>>>>>> 8f95f71d7f7a2276a5d8eda768f6ca0967a1a7e0
import './styles.css'

export default function LoginPage (){
    return(
        
        <div className='wrapper' id='wrapper-login'> 
           <div id='card-login'>
<<<<<<< HEAD
               <div id='logo'>
                    <img src={logo} alt="" />
               </div>
=======
               <div id='logo'>Login</div>
>>>>>>> 8f95f71d7f7a2276a5d8eda768f6ca0967a1a7e0
                <form className='container' >
                    <input type="text" placeholder='Usuário'/>
                    <br /><br />
                    <input type="password" placeholder='Senha'/>
                    <br /><br />
                    <button>Entrar</button>
                </form> 
           </div>
        </div>
    )
}