import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'blue'
}

function LoadingData () {
  return (
    <div className='sweet-loading'>
      <ClipLoader cssOverride={override} />
    </div>
  )
}

export default LoadingData
