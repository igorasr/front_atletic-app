import './styles.css'

export default function LoginPage (){
    return(
        
        <div className='wrapper' id='wrapper-login'> 
           <div id='card-login'>
               <div id='logo'>Login</div>
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