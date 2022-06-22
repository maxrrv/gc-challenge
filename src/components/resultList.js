import PropTypes from 'prop-types'
import { SingleResult } from './singleResult'

const ResultList = ({ repositories, totalCount }) => {
  return (
    <div>
      <h3>{'Current results'}</h3>
      <span>{`(${repositories?.length} / ${totalCount})`}</span>
      {repositories.map((repository) => (
        <SingleResult key={repository.full_name} name={repository.full_name} description={repository.description} />
      ))}
    </div>
  )
}

ResultList.propTypes = {
  repositories: PropTypes.array,
  totalCount: PropTypes.number
}

export { ResultList }
