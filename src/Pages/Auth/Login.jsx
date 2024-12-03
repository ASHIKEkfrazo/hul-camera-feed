import React from 'react'
import { Button, Input, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { notification } from 'antd';

import { loginApi } from '../../Endpoints/authApi';


const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm();

  // TOASTER NOTIFICATION
  const openNotification = (message, type) => {
    api[type]({
      message: <div className="font-bold">{message}</div>,
      duration: 5, // Adjust duration as needed
    });
  };

  const onSubmit = (data) => {
    loginApi(data)
      .then((res) => {
        openNotification(res?.data?.message || 'Successfully logged in!', 'success');
        localStorage.setItem("login", true)
        if (res?.data?.message) {
          setTimeout(() => {
            navigate('/');
          }, [1000])
        }
      })
      .catch((err) => {
        // Use openNotification with the error message
        openNotification(err?.response?.data?.error || 'Login failed.', 'error');
        // //console.log(err)
      });
  };


  return (
    <>
      {contextHolder}

      <div className='flex justify-center items-center h-screen bg-[#e3ffff] font-serif'>
        <div className="shadow-lg h-full max-h-[500px] w-full max-w-[500px] flex rounded-3xl  bg-white">
          {/* <div className="bg-login-bg bg-cover bg-no-repeat rounded-3xl  w-1/2 bg-right"></div> */}
          <div className="w-full h-full flex justify-center items-center ">
            <div className="w-3/4 h-full flex justify-center items-center flex-col gap-4">
              <img src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/image_1_1.png" alt="" className="object-cover" />
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4' >
                <div className="w-full">
                  <label htmlFor="" className='fw-bolder'><span className='text-red-600 fw-bolder'>*</span>Enter Username</label>
                  {/* <Input

                placeholder='Enter Email/Username'
                style={{
                  padding: '1rem ',
                  marginTop: '0.5rem'

                }}
              /> */}

                  <Controller
                    name="username"
                    control={control}
                    rules={{ required: "Username required*" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text" // Use HTML date input
                        placeholder="Enter Email/Username"
                        style={{ width: '100%', height: "3rem" }} // Full width input
                      />
                    )}
                  />
                  {errors.username && (
                    <span style={{ color: 'red' }}>{errors.username.message}</span>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="" className='fw-bolder'><span className='text-red-600 '>*</span>Enter Password</label>
                  {/* <Input.Password
                  placeholder='Enter Password'
                  style={{
                    padding: '1rem',
                    marginTop: '0.5rem'
                  }}
                /> */}


                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password required*" }}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        type="text" // Use HTML date input
                        placeholder="Enter Password"
                        style={{ width: '100%', height: "3rem" }} // Full width input
                      />
                    )}
                  />
                  {errors.password && (
                    <span style={{ color: 'red' }}>{errors.password.message}</span>
                  )}
                  <label htmlFor="" className='text-red-600 fw-bolder text-sm text-end w-full cursor-pointer'>Forgot Password</label>
                </div>
                <button htmlType="submit" className='py-2 px-5 bg-theme-green text-white fw-bolder rounded-lg cursor-pointer text-center'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login