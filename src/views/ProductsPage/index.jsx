import { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { products } from '../../repository/products';
import './style.css';

const ProductsPage = ()=>{

    const [session, setSession] = useState();

  useEffect(()=>{
    setSession(JSON.parse(localStorage.getItem('session')))
  },[])

    return(
        <>
        <div className="container products-container">
            {session?.level == 0 ? 
             <div className='container card-small' id='addProduct'>
             <AiOutlinePlusSquare/>
             </div>
            : ''}
       
            {
                products.map(value=>(
                <div className="container card-small" style={{background: `url(${value.image})`, 
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                    <div className='productDetails' >
                        <h4>{value.name}</h4>
                        <p><span>Valor</span>: R${value.price}</p>
                        <p><span>Descrição</span>: {value.description}</p>
                        <button><a href="http://instagram.com/castoresemge" target='_blank'>Saiba Mais</a></button>
                    </div>
                </div>
                ))
            }
         
        </div>
        </>
    )
}

export default ProductsPage;