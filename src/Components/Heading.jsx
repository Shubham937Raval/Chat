import './Heading.css'

const Heading = (props) => {
  return (
    <>
        <h2 className='mainpagelets-create-a'>
            {props.text}
        </h2>
    </>
  )
}

export default Heading
