import ViewInYourSpaceBtn from './ViewInYourSpaceBtn'

const InSpace = (props) => {
  return (
    <>

      <ViewInYourSpaceBtn />

      {
        props.children
      }
    </>
  )
}

export default InSpace

InSpace.displayName = "InSpace"