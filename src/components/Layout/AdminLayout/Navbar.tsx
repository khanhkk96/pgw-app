import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuItems = [
  { name: 'Dashboard', path: '/user/dashboard' },
  { name: 'Issue Store', path: '/user/issue-store' },
  { name: 'Articles', path: '/user/article-store' },
  { name: 'Plans & Schedules', path: '/user/plans' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <ul>
        {MenuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(item.path);
            }}
            className={location.pathname === item.path ? 'active' : ''}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  );
}

export const NavbarWrapper = styled.nav`
  max-width: 300px;
  background-color: black;
  color: white;

  ul {
    padding-left: 32px;
    margin: 0;
    padding: 0px 0;
  }

  li {
    list-style: none;
    // margin-bottom: 15px;
    padding: 20px 0;
    cursor: pointer;

    span {
      padding-left: 20px;
    }

    &:hover {
      background-color: gray;
    }

    &.active {
      background-color: white;
      color: black;
    }
  }
`;
