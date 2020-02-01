import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from './../services/api';

import Card from './components/Card';
import NullSearch from './components/NullSearch';

function Home() {
  
  document.title = 'Home - Search GitHub Repos';

  const history = useHistory();

  if(!sessionStorage.getItem('login')){
    history.push('/');
  };

  const [InputValue, setInputValue] = useState('');
  const [thisPage, setThisPage] = useState(1);
  const [searchReturn, setSearchReturn] = useState({ query: '', items: [] });
  const [hideNav, setHidenav] = useState('none');
  const perPage = 16;
  const prevButton = document.getElementById('prevButton');

  async function loadSearch(querySearch, thisPage){
    const response = await api.get(`repositories?q=${querySearch}&page=${thisPage}&per_page=${perPage}`);
    setSearchReturn({
      query: querySearch,
      items: response.data.items
    });
  }
  
  function handleChangeInput(e){
    setInputValue(e.target.value);
  };
  
  async function handleSubmit(e){
    e.preventDefault();
    await loadSearch(InputValue, 1);
    prevButton.disabled = true;
    setHidenav('flex');
  };

  function handlePreviusPage(){
    const prevPage = parseInt(thisPage) - 1;
    if(prevPage === 1){
      prevButton.disabled = true;
    };
    setThisPage(prevPage);
    loadSearch(InputValue, prevPage);
  };
  
  function handleNextPage(){
    if(prevButton.disabled === true){
      prevButton.disabled = false;
    };
    const nextPage = parseInt(thisPage) + 1;
    setThisPage(nextPage);
    loadSearch(InputValue, nextPage);
  };

  return (
    <div className="my-boxHome">

      <div className="my-boxSearch">

        <div className="my-content-search-title">
          Search GitHub Repos
        </div>
        <div className="my-content-search-subtitle">
          Search for GitHub repos using the following form
        </div>

        <div className="my-form-group">
          <div className="my-fg-row1">
            <form onSubmit={handleSubmit}>

              <div className="input-group mb-2">
                <input  type="text" 
                        className="form-control" 
                        id="inlineFormInputGroup" 
                        placeholder="Search Repos"
                        value={InputValue}
                        onChange={handleChangeInput}
                        name="search" />

                <button type="submit" className="input-group-text">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              
            </form>
          </div>
        </div>
        
      </div>
      <div className="my-content-list" id="my-list">
        <NullSearch />

        {
          searchReturn.items.map(returns => (
            <Card key={returns.id} 
                  name={returns.name}
                  username={returns.owner.login}
                  description={returns.description}
                  url_avatar={returns.owner.avatar_url}
                  url_repo={returns.html_url}
                  stars={returns.stargazers_count} />
          ))
        }

        <div className="my-content-nav-buttons" style={{display: hideNav}}>
          <button onClick={handlePreviusPage} className="my-nav-button" id="prevButton" >
          <i className="fas fa-chevron-left"></i> Previus
          </button>
          <button onClick={handleNextPage} className="my-nav-button">
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
