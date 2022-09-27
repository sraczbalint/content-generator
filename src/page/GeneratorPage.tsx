import DashboardLayout from 'component/dashboardLayout/DashboardLayout'
import GeneratorContainer from 'container/GeneratorContainer/GeneratorContainer'
import auth from 'context/Firebase'

const Login = () => {
  console.log(auth.currentUser?.displayName)
  return (
    <>
      <title>Generator</title>
      <DashboardLayout>
        <GeneratorContainer />
      </DashboardLayout>
    </>
  )
}

export default Login
