import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styled from "styled-components"
import authService from "../../services/auth.services";
import { useState } from "react";
import { useAuth } from "../../Providers/AuthProvider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";




const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { authUser } = useAuth()
  const [loading, setLoading] = useState(false);

  const submit = (data) => {
    setLoading(true);
    setTimeout(() => {
      authService.login(data)
        .then(response => {
          authUser(response.data.token)

          console.log('Login successful', response.data);

        })
        .catch(error => {
          console.error('Login error', error.response.data);
          setLoginError(error.response.data.message || 'Login failed');
        })
        .finally(() => {
          setLoading(false);
        })
    }, 3000)

  }


  return (
    <MainDiv>
      <LoadingSpinner loading={loading} />
      <h2>Login</h2>
      <form className="loginForm" onSubmit={handleSubmit(submit)}>

        <div>
          <label>User name </label>
          <input type="text" {...register("username",
            {
              required: "Username is required"

            })}
            style={{ borderColor: errors.userName && "red", outline: errors.userName && "red" }}
            placeholder={errors.userName && errors.userName.message}
          />
          {errors.userName && (
            <p style={{ color: "red" }}>{errors.userName.message}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
              message: "Password must contain at least one uppercase letter"
            }
          })}
            style={{ borderColor: errors.password && "red", outline: errors.password && "red" }}
            placeholder={errors.password && errors.password.message}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}


        </div>

        <button type="submit" >Login</button>

        {loginError && <p style={{ color: "red" }}> {loginError}</p>}
      </form>
      <Link to="/signin">Sign In</Link>
    </MainDiv>
  )
}


export default LoginForm

const MainDiv = styled.div`

display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80svh;
  text-align: center;
  color: black;

  h2 {
    font-size: 45px;
    margin-bottom: 20px;
    color: white;
    
  }

  .loginForm {
    background-color: white;
    display: flex;
    border: 2px solid white;
    padding: 30px;
  border-radius: 30px;
    flex-direction: column;
    width: 300px;


    div {
      margin-bottom: 10px;
      

      label {
        display: block;
        margin-bottom: 5px;
        
      }

      input {
        background-color: #646464;
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        color: white;
      
      }

      span {
        color: red;
        font-size: 12px;
      }
    }

    button {
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`;