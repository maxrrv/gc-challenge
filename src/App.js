import { useState } from 'react'
import { fetchRepositoriesForTerm } from './api/fetchRepositories'
const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleFormChange = (event) => setSearchQuery(event.target.value)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetchRepositoriesForTerm(searchQuery)
  }
  return (
    <div>
      <header>
        <h1> Github Repositories </h1>
      </header>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" name="repositoryName" value={searchQuery} onChange={handleFormChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default App
