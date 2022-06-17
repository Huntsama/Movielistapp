import React , {useState} from 'react'
import { Cards } from '../components/Cards';

export const AddList = () => {

    const apikey = 'b1337ae045f564677780e8542849dac7';
    const[query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e =>{
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
            
          )
          .then((res) => res.json())
          .then((data) => {
            if (!data.errors) {
                setResults(data.results);
              } else {
                setResults([]);
              }
            
          });
    }

    return (
        <div className='flex flex-col justify-center max-w-lg my-8 mx-auto  '>
            <input className="appearance-none bg-gray-800 border-none w-full text-white mr-3 leading-tight focus:outline-none  rounded-xl  shadow-xl p-3  "
             type="text" 
             placeholder="Search Movie"
             value={query}
             onChange={onChange}

             />
             {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <Cards movie={movie} />
                </li>
              ))}
            </ul>
          )}
              
        </div>
    )
}

export default AddList;