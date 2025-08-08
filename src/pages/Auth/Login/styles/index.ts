import { CustomInputStyle } from '@/components/Inputs/Input';
import styled from 'styled-components';

const WrapLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    min-width: 400px;
  }

  .title {
    font-size: 4rem;
    text-align: center;
  }

  p {
    margin: 0 0 10px 0;
  }

  ${CustomInputStyle} {
    padding: 0;
  }

  button {
    width: 100%;
    height: 40px;
    font-size: 1.8rem;
  }

  .auth__links {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export default WrapLogin;
