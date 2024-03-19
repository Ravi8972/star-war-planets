import React,{useState,useEffect} from 'react';
import PlanetCard from './components/PlanetCard';
import Toggle from './components/Toggle'
import useLocalStorage from './customHook/useLocalStorage';
import axios from 'axios';
import './App.css'
import PageLoader from './components/PageLoader';
const apiUrl = 'https://swapi.dev/api/planets/?format=json'
// const apiUrl = 'https://fakestoreapi.com/products'

function App() {

  // const [pageNo, setPageNo] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [nextPage,setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [isLoanding, setIsLoading] =  useState(true);
  const [isDark, setIsDark]  = useLocalStorage("isDark",false);
  
  useEffect(()=>{
     getPlanets(apiUrl);
  },[]);


  //  Fetching data from API

  const getPlanets = async (apiUrl) => {
    
    try {
      let response = await axios.get(`${apiUrl}`);
      console.log(response.data); // No need to call .json() on axios response
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      setIsLoading(false);
  } catch (error) {
      console.error("Error: " + error.message);
  }
  
  };

  const handleNextPage = () => {
    if(nextPage!==null){
      getPlanets(nextPage)
      // setPageNo((oldVal)=> oldVal+1);
    }
    else{
      console.log("No More Planets")  
      }           
  }

  const handlePrevPage = () => {
    if(prevPage !== null){
      getPlanets(prevPage)
      // setPageNo((oldVal)=> oldVal-1);
    } 
    else {
      console.log("You are at the first page.")
    }
  }


  return (
    <div className="App" data-theme={isDark?"dark" : "light"} >
       <h1 className='title'>Star War Planets</h1>
        
        <Toggle  className='toggle'
           isChecked={isDark}
           handleChange={()=>setIsDark(!isDark)}
        />

        {isLoanding ? <PageLoader className ='loader'/> : 
        <>  
          <div className="Planets">
            {
            planets.map((planet, index)=>(
              <PlanetCard className ='card' key={index} planet={planet}/>
            ))
            }
          </div>
        </>
        }
        <div className="buttons">
          <button className='prev' onClick={handlePrevPage} disabled={!prevPage} >Prev Page</button>
           {/* <span>{pageNo}</span> */}
          <button className='next' onClick={handleNextPage} disabled={!nextPage} >Next Page</button>
        </div>
        
    </div>
  );
}

export default App;



