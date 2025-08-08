import { CustomInputStyle } from '@/components/Inputs/Input';
import styled from 'styled-components';

export const RegisterArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .register-form {
    min-width: 400px;
  }

  .title {
    font-size: 4rem;
    text-align: center;
  }

  .form-input {
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
  }

  p {
    margin: 0 0 10px 0;
  }

  ${CustomInputStyle} {
    padding: 0;
    margin: 0;
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
