import { useEffect, useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { VscDiffAdded } from 'react-icons/vsc';
import Logo from '../../assets/images/logo-atletica.png';
import { posts } from '../../repository/posts';
import './style.css';

const FeedPage = ()=>{
    const [session, setSession] = useState();

  useEffect(()=>{
    setSession(JSON.parse(localStorage.getItem('session')))
  },[])
    return(
        <div className="feed-container container">
            {session?.level == 0 ? 
            <button className="card-addPost">
            <VscDiffAdded size={35}/>
          </button> :
          ''    
        }
              
            {posts.map(item=>(
                <div className="card-post">
                    <div className='card-header'>
                        <div className='mini-avatar'>
                          <img src={Logo} alt="" />
                        </div>
                        <div className='card-header-infos container'>
                            <h4>{item.title}</h4>
                            <small>{item.data}</small>
                        </div>
                    </div>
                    <div className='card-body'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='card-footer'>
                        <b>Descrição: </b>
                        {item.description}
                        <div className='footer-actions'>
                            <AiOutlineLike size={25} className={'buttons-like'}/>
                            <AiOutlineDislike size={25} className={'buttons-like'}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeedPage;