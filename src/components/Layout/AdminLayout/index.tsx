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
        {/* <div className="gap-div"></div> */}
        <div className="child-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </AdminLayoutContainer>
  );
}

const AdminLayoutContainer = styled.div`
  .container {
    display: flex;
    margin-bottom: 60px;
    // min-height: calc(100vh - 71px - 60px);

    .gap-div {
      width: 20px;
    }

    .child-wrapper {
      width: 100%;
      margin: 20px;
    }
  }

  ${NavbarWrapper} {
    min-width: 200px;
  }

  @media only screen and (max-width: 687px) {
    ${NavbarWrapper} {
      display: none;
    }
  }
`;
