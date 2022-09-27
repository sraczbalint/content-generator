import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import { AuthContextProvider, useAuth } from 'context/AuthContext'
import Generator from 'page/GeneratorPage'
import Login from 'page/LoginPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Generator />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default App
