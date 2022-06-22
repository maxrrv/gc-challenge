import PropTypes from 'prop-types'
const SingleResult = ({ name, description }) => {
  return (
    <div
      style={{
        width: '50%',
        minHeight: '3rem',
        border: '1px solid green',
        borderRadius: '5px',
        margin: '5px',
        paddingLeft: '10px'
      }}>
      {' '}
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

SingleResult.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export { SingleResult }
