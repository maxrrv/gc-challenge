const fetchRepositoriesForTerm = (term, getResults) => {
  fetch(`https://api.github.com/search/repositories?q=${term}`)
    .then((data) => data.json())
    .then((data) => getResults({ data }))
}

export { fetchRepositoriesForTerm }
