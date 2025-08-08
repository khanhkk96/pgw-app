import { useState } from 'react';
import styled from 'styled-components';
import DownArrow from '@assets/icons/arrow_drop_down.svg';
import UpArrow from '@assets/icons/arrow_drop_up.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderWrapper>
      <header>
        <div
          className="logo"
          onClick={() => {
            navigate('/');
          }}
        >
          <img width={48} height={48} src="../images/logo.png" alt="logo" />
        </div>

        <div className="header-avatar">
          <img width={48} height={48} src="../images/avatar.png" alt="avatar" />
        </div>
        <div className="header-account">
          <div className="name-wrapper" onClick={handleShowMenu}>
            <p className="text">Admin</p>
            {!showMenu && <img src={DownArrow} alt="dropdown" />}
            {showMenu && <img src={UpArrow} alt="dropup" />}
          </div>
          {showMenu && (
            <ul className="dropdown-menu">
              <li>Xem thông tin</li>
              <li>Đổi mật khẩu</li>
              <li>Đổi ảnh đại diện</li>
              <li>Đăng xuất</li>
            </ul>
          )}
        </div>
      </header>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  border-width: 0 0 1px 0;
  border-color: gray;
  border-style: solid;

  header {
    margin: 0 40px;
    display: flex;
    padding: 10px 0;
    align-items: center;
  }

  .logo {
    flex: 1;
  }

  .header-avatar {
    img {
      border-radius: 100%;
    }
  }

  .header-account {
    margin-left: 10px;
    position: relative;

    .name-wrapper {
      display: flex;
    }

    .text {
      width: 100px;
      padding: 10px;
    }

    .dropdown-menu {
      width: 120%;
      position: absolute;
      left: 0;
      padding: 0;
      margin: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: white;
    }

    .dropdown-menu li {
      list-style: none;
      margin-top: 10px;
      padding: 10px 10px;

      &:hover {
        background-color: gray;
      }
    }

    .dropdown-menu li:last-child {
      margin-bottom: 10px;
    }
  }
`;
