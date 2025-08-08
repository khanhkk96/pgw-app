import CustomInput from '@components/Inputs/Input';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import './styles';
import WrapLogin from './styles';
import { ErrorMessage } from '@hookform/error-message';
import API_URL from '@api/url';
import { requestInterceptor, requestTokenInterceptor } from '@/api';
import { useDispatch } from 'react-redux';
import { Text } from '@/components';
import { setUser } from '@/pages/App/store/appSlice';
import type { AppDispatch } from '@/store/store';
import Alert from '@/components/Alert';
import { useNavigate } from 'react-router-dom';
type Inputs = {
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log('form data::', data);
    try {
      const loginResponse = await requestInterceptor({
        url: API_URL.AUTH.LOGIN,
        method: 'POST',
        data,
      });

      localStorage.setItem('token', loginResponse.data.data);

      requestTokenInterceptor({
        url: API_URL.AUTH.ME,
        method: 'GET',
      })
        .then((res) => {
          console.log('user data:', res.data);
          dispatch(setUser(res.data.data));
          navigate('/user/dashboard');
        })
        .catch((err) => {
          Alert({ content: err, icon: 'error' });
          console.log('err', err);
          return;
        });
    } catch (error: any) {
      Alert({ content: error?.response.data, icon: 'error' });
      console.log('Login error:', error);
      return;
    }
  };

  return (
    <WrapLogin>
      <div className="login-form">
        <h2 className="title">Đăng nhập</h2>
        <form action="/auth/login" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <p className="label">Tài khoản</p>
            <CustomInput
              name="username"
              placeholder="Nhập tài khoản"
              register={register('username', {
                required: 'This is required.',
                maxLength: {
                  value: 50,
                  message: 'This input exceed 50 characters.',
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
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              register={register('password', {
                required: 'This is required.',
                pattern: {
                  value: /^[0-9a-zA-Z\S]+$/gm,
                  message: 'this input is invalid format.',
                },
                minLength: {
                  value: 5,
                  message: 'This input must be greater or equal 5 characters.',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={Text.ErrorMessage}
            />
          </div>
          <div className="submit">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>

        <div className="auth__links">
          <a href="#">Quên mật khẩu</a>
          <a href="/register">Đăng ký</a>
        </div>
      </div>
    </WrapLogin>
  );
}

export default memo(Login);
