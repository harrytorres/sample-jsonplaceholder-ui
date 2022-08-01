import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import User from './components/pages/Users';
import Todos from './components/pages/Todos';
import {Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<User/>}/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
