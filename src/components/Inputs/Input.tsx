import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

interface CustomInputProps {
  name: string;
  placeholder?: string;
  type?: string;
  icon?: any;
  disabled?: boolean;
  register?: any;
}

export const CustomInputStyle = styled.div`
  input {
    font-size: 1.6rem;
    border: none;
    width: 100%;
  }
  display: flex;
  background-color: white;
  align-items: center;
  padding: 5px 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  button {
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  svg {
  }
`;

function CustomInput({
  name,
  placeholder,
  type = 'text',
  icon,
  disabled,
  register,
}: CustomInputProps) {
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  return (
    <CustomInputStyle>
      {icon && typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
      <input
        type={!isShowPassword ? type : 'text'}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        // ref={register}
        {...register}
      />
      {type === 'password' && (
        <div onClick={() => setShowPassword(!isShowPassword)}>
          {isShowPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </CustomInputStyle>
  );
}

export default CustomInput;
