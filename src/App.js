import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe'


function App() {
  const App_Id = "cf1c2e2f";
  const App_Key = "03ace65c956d84624c5c42a54c4d820b	";
  const [recipes , setRecipes] = useState([]);
  const [search , setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe(); 
  },[query])

  const getRecipe = () => {
    axios.get (`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`)
         .then (res => {
           const data = res.data;
           console.log (data.hits)
            setRecipes(data.hits);
         })
  }
  const updateSearch = e => {
    setSearch(e.target.value);

  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch } />
        <button className="search-button" type='submit'>Search</button>
      </form>
      <div className='Recipe'>
        {recipes.map((recipe , index )=> (
          <Recipe key={index}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
