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
import Register from 'page/RegistrationPage'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default App
