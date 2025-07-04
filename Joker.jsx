import {useState , useEffect} from 'react';

function Joker()
{
    const URL = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] = useState({});

    const getNewJoke = async ()=>{
       let response =  await fetch(URL);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       setJoke({ setup : jsonResponse.setup , punchline : jsonResponse.punchline });
    };

    useEffect( ()=> {
        async function getFirstJoke(){
            let response =  await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({ setup : jsonResponse.setup , punchline : jsonResponse.punchline });    
        } 
        getFirstJoke()
    }, [] );

    return(
        <div>
            <h4>Joker!</h4>
            {joke.setup}
            {joke.punchline}
            <br></br><br></br>
            <button onClick={getNewJoke}> Get new joke</button>
        </div>
    )
}
export default Joker;