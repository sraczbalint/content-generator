import GeneratorContainer from 'container/GeneratorContainer/GeneratorContainer'
import auth from 'context/Firebase'

const Login = () => {
  console.log(auth.currentUser?.displayName)
  return (
    <>
      <title>Generator</title>
      <GeneratorContainer />
    </>
  )
}

export default Login
