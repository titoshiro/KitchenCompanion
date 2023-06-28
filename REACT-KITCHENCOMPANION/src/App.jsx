import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/admin/Dashboard'
import Users from './pages/admin/users'
import PrivateRoute from './utils/PrivateRoute'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import Contact from './pages/Contact'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='dashboard' element={<PrivateRoute />}>
                    <Route index element={<Dashboard />} />
                    <Route path='users' element={<Users />} />
                </Route>
                <Route path='/'>
                    <Route path='login' element={<Login />} />
                    <Route path='about' element={<About />} />
                    <Route index element={<Home />} />
                </Route>
                <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App;
