import { useState } from 'react'
import { SearchForm } from './components/searchForm'
import { ResultList } from './components/resultList'

const App = () => {
  const [repositoryResults, setRepositoryResults] = useState({})
  console.log({ repositoryResults })

  const repositories = repositoryResults?.data?.items ?? []
  console.log(repositories)
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
