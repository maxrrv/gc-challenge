const fetchData = () => {
  fetch('https://api.github.com/search/repositories?q=vue')
    .then((data) => data.json())
    .then((data) => console.log({ data }))
}

export { fetchData }
