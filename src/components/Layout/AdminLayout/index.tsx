import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';
import Navbar, { NavbarWrapper } from './Navbar';

export default function AdminLayout() {
  return (
    <AdminLayoutContainer>
      <Header></Header>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Footer></Footer>
    </AdminLayoutContainer>
  );
}

const AdminLayoutContainer = styled.div`
  .container {
    display: flex;
  }

  ${NavbarWrapper} {
    min-width: 200px;
  }
`;
