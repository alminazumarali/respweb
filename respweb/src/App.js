import {useEffect,useState} from 'react';
import './App.css';
import searchicon from './search.svg';
import Searchmovie from './searchmovie.jsx';
//af6031f6
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=af6031f6'
const App=()=>{
    const[movies,setmovie]=useState([]);
    const search_data=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setmovie(data.Search);
    }
    const[search,setsearch]=useState("");

    useEffect(()=>{search_data('spiderman');},[]);
    return(
        <div className="app">
            <h1>Search your Movies</h1>
            <div className="search">
                <input placeholder="Search your movies"
                value={search}
                onChange={(e)=>setsearch(e.target.value)}/>
                <img src={searchicon} alt="search"
                onClick={()=>search_data(search)}/>
            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                        {movies.map((movie) => (<Searchmovie movie = {movie}/>))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}
export default App;