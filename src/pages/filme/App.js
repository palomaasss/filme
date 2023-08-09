import axios from 'axios';
import { useState } from 'react';
import './App.scss';

export default function App() {
    
    const [filme, setFilme]= useState('')
    const [lista, setLista]= useState([])
    const [ y, setY]=useState(0)
    const [ f, setF]=useState(0)
    
  

    async function pesq (){
        let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme ;
        let x= await axios.get(url);
        setLista(x.data.Search)

    }
    async function plus (){
      
      let w= y +1
      setY(w)
      let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&page=' + w;
      let x= await axios.get(url);
      setLista(x.data.Search)

  }
  async function more (){
      
    let w= f + 10
    setF(w)
    let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&page=1&pageSize=' + w;
    let x= await axios.get(url);
    setLista(x.data.Search)

}
async function fmovie(){
  let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&type=series';
  let x= await axios.get(url);
  setLista(x.data.Search)

}

async function fserie(){
  let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&type=series';
  let x= await axios.get(url);
  setLista(x.data.Search)

}
async function fgame(){
  let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&type=game';
  let x= await axios.get(url);
  setLista(x.data.Search)

}


    

  return (
    <div className="App">
      
      <div className='cabecalho'> <img src='/assets/images/logo.png' alt=''/> <h1>Portifolio.me</h1></div>

    <div className='s-0'>
        <div className='s1'>

                    <div className='s1-up'> <h1>IMDB</h1> </div>


      <div className='s1-1'>
      <h2> Consulta de Filmes</h2>

        <div className='s1-pesq'>
          <h3>Nome</h3>
          <div className='s1-input'> <input type='text' value={filme} onChange={e => setFilme(e.target.value)}/> 
          <button><img src='/assets/images/pesq.png' onClick={pesq}/></button></div>
      </div>

      </div>






          <div className='s2'>

      

        <table>
          <div className='cima'>
         <thead>
              <tr className='tb-cab'>
              <th >Código</th>
              <th>Título     </th>
                <th>Ano</th>
           </tr>
        </thead>
        </div>
      <tbody >
  
    <div className='scroll'>
      {lista.map(item =>
      <tr className='tb-corp-1'>
        <div className='peste'> <td className='tb-corp'><b> {item.imdbID}</b></td>
        <td className='tb-corp'>{item.Title}</td>
        <td className='tb-corp'>{item.Year}</td>
        <td className='tb-corp'> <img src={item.Poster} alt='' id='img'/>  </td></div>
      
    
    
            
      
    </tr>
    )
      

    }
    </div>
    
  </tbody>

</table>

         </div>

        <div className='botoes'>
          <div>
            <button onClick={more} >Ver mais</button>
            <button onClick={plus}>Próximo</button>
            <button onClick={fmovie}>Filtar Filmes</button>
            <button onClick={fserie}>Filtar Séries</button>
            <button onClick={fgame}>Filtar Games</button>
          </div>
        </div>
      

      </div>

    </div>
      


    </div>
    
  );
}
