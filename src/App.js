import { useState } from 'react'
import { SearchForm } from './components/searchForm'
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
        <div>
          <h3>{'Current results'}</h3>
          <span>{`(${repositories?.length} / ${repositoryResults?.data?.total_count ?? 0})`}</span>
          {repositories.map((repository) => (
            <div
              key={repository.full_name}
              style={{
                width: '50%',
                minHeight: '3rem',
                border: '1px solid green',
                borderRadius: '5px',
                margin: '5px',
                paddingLeft: '10px'
              }}>
              {' '}
              <p>{repository.full_name}</p>
              <p>{repository.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
