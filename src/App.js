import { useState } from 'react'
const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  console.log({ searchQuery })
  const handleFormChange = (event) => setSearchQuery(event.target.value)
  return (
    <div>
      <header>
        <h1> Github Repositories </h1>
      </header>
      <div>
        <form>
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
