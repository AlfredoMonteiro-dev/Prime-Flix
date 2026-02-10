import {useEffect, useState} from 'react';
import api from '../../services/api';

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=23d3e2431395c2b303e412c9189d2ba0&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])

    
    useEffect(()=>{

        async function loadFillmes(params) {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"23d3e2431395c2b303e412c9189d2ba0",
                    language: "pt-BR",
                    page:1,
                }
            })

            console.log(response.data);

        }

        loadFillmes();

    }, [])

    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;