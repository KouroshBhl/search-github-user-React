import './App.css'
import { Dashboard, Login, Error } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          ></Route>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
