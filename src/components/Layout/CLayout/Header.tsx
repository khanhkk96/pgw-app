import { setUser } from '@/pages/App/store/appSlice';
import type { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuItems = [
  { name: 'Home', path: '/' },
  { name: 'Issues & Solutions', path: '/issues' },
  { name: 'Tech Articles', path: '/articles' },
];

export default function Header() {
  const user = useSelector((state: RootState) => state.appReducer.user);
  const isLogined = Object.keys(user).length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setUser({}));
    navigate('/');
  };

  const backToAdmin = () => {
    navigate('/user/dashboard');
  };

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <nav className="menu-left">
        {MenuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              redirect(item.path);
            }}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </nav>
      <div className="menu-right">
        {!isLogined && (
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Đăng nhập
          </button>
        )}
        {!!isLogined && (
          <>
            <button className="btn-logout" onClick={backToAdmin}>
              Trang quản trị
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Đăng xuất
            </button>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 12px 40px;
  color: gray;

  nav.menu-left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      display: inline-block;
      text-decoration: none;
      list-style: none;
      margin-left: 20px;
      transition: color 0.5s, font-size 1s ease-in-out;

      a {
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        color: white;
        font-size: 2rem;
        transition: color 0.5s, font-size 1s ease-in-out;
      }

      &.active {
        color: white;
        font-size: 1.8rem;
      }
    }
  }

  .menu-right {
    button {
      border: none;
      background-color: white;
      padding: 10px 20px;
      border-radius: 99px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
`;
