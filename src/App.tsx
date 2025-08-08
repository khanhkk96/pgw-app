import { Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import { useEffect } from 'react';
import { requestTokenInterceptor } from './api';
import API_URL from './api/url';
import { useDispatch } from 'react-redux';
import { setUser } from './pages/App/store/appSlice';
import Alert from './components/Alert';
import Register from './pages/Auth/Register';
import CLayout from './components/Layout/CLayout';
import AdminLayout from './components/Layout/AdminLayout';
import Issues from './pages/Issues';
import Articles from './pages/Articles';
import Dashboard from './pages/User/Dashboard';
import IssueStore from './pages/User/IssueStore';
import ArticleStore from './pages/User/ArticleStore';
import MySchedule from './pages/User/Schedule';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!localStorage.getItem('token')) {
    //   navigate('/login');
    //   return;
    // }

    // if (location.pathname != '/login') {
    if (localStorage.getItem('token')) {
      requestTokenInterceptor({
        url: API_URL.AUTH.ME,
        method: 'GET',
      })
        .then((res) => {
          // console.log('user data:', res.data);
          dispatch(setUser(res.data.data));
        })
        .catch((err) => {
          Alert({ content: err, icon: 'error' });
          console.log('err', err);
          navigate('/login');
          return;
        });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<CLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="/user" element={<AdminLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="issue-store" element={<IssueStore />} />
          <Route path="article-store" element={<ArticleStore />} />
          <Route path="plans" element={<MySchedule />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
