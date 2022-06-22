import { useState } from 'react'

import { SearchForm } from './components/searchForm'
import { ResultList } from './components/resultList'

const App = () => {
  const [repositoryResults, setRepositoryResults] = useState({})
  const repositories = repositoryResults?.data?.items ?? []

  //  const initialState = {
  //    favourites: []
  //  }
  //  const favouritesReducer = (state = initialState, action) =>{
  //    switch(action.type){
  //      case 'favourite/added':
  //        return { [...favourites, action[payload]]}
  //      case 'favourite/removed':
  //        return {//todo add delete logic
  //        }
  //    }
  //
  //  }

  return (
    <div>
      <header>
        <h1> Github Repositories </h1>
      </header>
      <div>
        <SearchForm returnResults={setRepositoryResults} />
        <ResultList {...{ repositories, totalCount: repositoryResults?.data?.total_count ?? 0 }} />
      </div>
    </div>
  )
}

export default App
