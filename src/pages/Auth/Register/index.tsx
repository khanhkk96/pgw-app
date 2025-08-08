import { RegisterArea } from './styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomInput from '@/components/Inputs/Input';
import { ErrorMessage } from '@hookform/error-message';
import { Text } from '@/components';
import VALIDATE from '@/helpers/validate';
import './styles/index';
import { requestInterceptor } from '@/api';
import API_URL from '@/api/url';
import Alert from '@/components/Alert';

type RegisterInputs = {
  username: string;
  password: string;
  confirmedPassword: string;
  full_name: string;
  email: string;
  phone: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterInputs) => {
    if (data.password !== data.confirmedPassword) {
      setError('confirmedPassword', {
        message: 'Mật khẩu không khớp',
      });
      return;
    }

    requestInterceptor({
      url: API_URL.AUTH.REGISTER,
      method: 'POST',
      data,
    })
      .then((res) => {
        console.log('data:', res.data);
        navigate('/login');
      })
      .catch((error) => {
        console.log('Error:', error);
        Alert({
          content: 'Đăng ký tài khoản không thành công!',
          icon: 'error',
        });
      });
  };

  return (
    <RegisterArea>
      <div className="register-form">
        <h2 className="title">Đăng ký</h2>
        <form action="/auth/register" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <p className="label">Tài khoản</p>
            <CustomInput
              name="username"
              placeholder="Nhập tên tài khoản"
              register={register('username', {
                required: 'This is required.',
                maxLength: {
                  value: 50,
                  message: 'This input exceed 50 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input">
            <p className="label">Mật khẩu</p>
            <CustomInput
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
              register={register('password', {
                required: 'This is required.',
                minLength: {
                  value: 5,
                  message: 'This input must be greater or equal 5 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input">
            <p className="label">Xác nhận mật khẩu</p>
            <CustomInput
              name="confirmedPassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              register={register('confirmedPassword', {
                required: 'This is required.',
                minLength: {
                  value: 5,
                  message: 'This input must be greater or equal 5 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="confirmedPassword"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input">
            <p className="label">Họ tên</p>
            <CustomInput
              name="full_name"
              placeholder="Nhập họ tên người dùng"
              register={register('full_name', {
                required: 'This is required.',
                maxLength: {
                  value: 100,
                  message: 'This input exceed 100 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="full_name"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input">
            <p className="label">Email</p>
            <CustomInput
              name="email"
              placeholder="Nhập email"
              register={register('email', {
                required: 'This is required.',
                maxLength: {
                  value: 100,
                  message: 'This input exceed 100 characters',
                },
                pattern: {
                  value: VALIDATE.EMAIL.REGEX,
                  message: VALIDATE.EMAIL.MESSAGE,
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input">
            <p className="label">Số điện thoại</p>
            <CustomInput
              name="phone"
              placeholder="Nhập số điện thoại"
              register={register('phone', {
                required: 'This is required.',
                maxLength: {
                  value: 100,
                  message: 'This input exceed 100 characters',
                },
                pattern: {
                  value: VALIDATE.PHONE.REGEX,
                  message: VALIDATE.PHONE.MESSAGE,
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="form-input submit">
            <button type="submit">Gửi</button>
          </div>
        </form>
      </div>
    </RegisterArea>
  );
}
