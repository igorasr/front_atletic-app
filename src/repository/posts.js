import csgo from './posts/csgo.jpg';
import Futebol_Salao from './posts/Futebol_Salao.jpg';
import matematica from './posts/matematica.png';
import volei from './posts/volei.jpeg';

export const posts = [{
    id: parseInt(Math.random()*new Date().getTime()),
    title: 'Jogo de Futebol',
    description: 'Jogo de futebol quadra de futsal blabla',
    data: '30/06/2022',
    image: Futebol_Salao
},
{
    id: parseInt(Math.random()*new Date().getTime()),
    title: 'Campeonato de CS Go',
    description: 'Muito Tiro',
    data: '30/06/2022',
    image: csgo
},
{
    id: parseInt(Math.random()*new Date().getTime()),
    title: 'Volei',
    description: 'Jogo de volei',
    data: '30/06/2022',
    image: volei
},
{
    id: parseInt(Math.random()*new Date().getTime()),
    title: 'Campeonato de matematica',
    description: 'Jogo de futebol quadra de futsal blabla',
    data: '30/06/2022',
    image:matematica
}]