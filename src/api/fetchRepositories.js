const fetchRepositoriesForTerm = (term) => {
  fetch(`https://api.github.com/search/repositories?q=${term}`)
    .then((data) => data.json())
    .then((data) => console.log({ data }))
}

export { fetchRepositoriesForTerm }
