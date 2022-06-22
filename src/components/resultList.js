import PropTypes from 'prop-types'

const ResultList = ({ repositories, totalCount }) => {
  return (
    <div>
      <h3>{'Current results'}</h3>
      <span>{`(${repositories?.length} / ${totalCount})`}</span>
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
  )
}

ResultList.propTypes = {
  repositories: PropTypes.array,
  totalCount: PropTypes.number
}

export { ResultList }
