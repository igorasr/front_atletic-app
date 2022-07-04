import camisa from './produtos/camisa.jpeg';
import caneca from './produtos/caneca.jpeg';
import cordao from './produtos/cordao-caneca.jpg';

export const products = [{
    id:parseInt(new Date().getTime()*Math.random()),
    name: 'Camisa Boladona',
    price: '15,50',
    description: 'Camisa muito doida',
    image: camisa
},
{
    id:parseInt(new Date().getTime()*Math.random()),
    name: 'Caneca Boladona',
    price: '15,50',
    description: 'Caneca pra micareta',
    image: caneca
},
{
    id:parseInt(new Date().getTime()*Math.random()),
    name: 'Cordao Boladao',
    price: '10,00',
    description: 'Cordao para caneca',
    image: cordao
}]