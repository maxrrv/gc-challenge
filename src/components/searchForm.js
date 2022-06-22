import PropTypes from 'prop-types'
import { useState } from 'react'
import { fetchRepositoriesForTerm } from '../api/fetchRepositories'

const SearchForm = ({ returnResults }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleFormChange = (event) => setSearchQuery(event.target.value)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetchRepositoriesForTerm(searchQuery, returnResults)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        {'Name: '}
        <input type="text" name="repositoryName" value={searchQuery} onChange={handleFormChange} />
      </label>{' '}
      <input type="submit" value="Submit" />
    </form>
  )
}

SearchForm.propTypes = {
  returnResults: PropTypes.func
}

export { SearchForm }
