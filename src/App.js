import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './pages/LandingPage/Hero';
import ListJob from './pages/LandingPage/ListJob';
import LayoutLanding from './layout/LayoutLanding';
import LayoutDashboard from './layout/LayoutDashboard';
import Dashboard from './pages/Dashboard/Dashboard';
import ListData from './pages/Dashboard/ListData';
import Form from './pages/Dashboard/Form';
import LoginPage from './pages/Login/LoginPage';
import { GlobalProvider } from './context/GlobalContext';
import LoginRoute from './Route/LoginRoute';
import RegisterPage from './pages/Login/RegisterPage';
import ChangePassword from './pages/Login/ChangePassword';

function App() {
  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={
          <LayoutLanding>
            <Hero />
          </LayoutLanding>
        } />

        <Route path='/login' element={
          <LoginRoute>
            <LayoutLanding>
              <LoginPage />
            </LayoutLanding>
          </LoginRoute>
        } />

        <Route path='/register' element={
          <LayoutLanding>
            <RegisterPage />
          </LayoutLanding>
          } />

        <Route path='/changepass' element={
          <LayoutDashboard>
          <ChangePassword />
        </LayoutDashboard>
          } />

        <Route path='/job-vacancy' element={
          <LayoutLanding>
            <ListJob />
          </LayoutLanding>
        } />

      <Route path='/dashboard' element={
          <LayoutDashboard>
            <Dashboard />
          </LayoutDashboard>
        } />

        <Route path='/dashboard/list-job-vacancy' element={
          <LayoutDashboard>
            <ListData />
          </LayoutDashboard>  
        } />

        <Route path='/dashboard/list-job-vacancy/form' element={
          <LayoutDashboard>
            <Form />
          </LayoutDashboard>
        } />

        
      </Routes>
      
      </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
