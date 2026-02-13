import {useEffect, useState} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './/home.css'

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=23d3e2431395c2b303e412c9189d2ba0&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{

        async function loadFillmes(params) {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"23d3e2431395c2b303e412c9189d2ba0",
                    language: "pt-BR",
                    page:1,
                }
            })

           // console.log(response.data.results.slice(0,10));
           setFilmes(response.data.results.slice(2,14))
            setLoading(false);

        }

        loadFillmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>carregando filmes....</h2>
            </div>
        )
    }

    return(
        <div className='container'>
           <div className="lista-filmes">
            {filmes.map((filme) =>{
                return(
                    <article key={filme.id}>

                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <div className="detalhes-filme">
                                <h2>{filme.title}</h2>
                                <div className="flex-buttons">
                                    <Link to={`/filme/${filme.id}`}>Detalhes</Link>
                                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}><i class="fa-solid fa-clapperboard"></i> Trailer</a>
                                </div>
                            </div>

                        </article>
                )
            })}
           </div>
        </div>
    )
}

export default Home;