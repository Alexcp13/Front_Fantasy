import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styled from "styled-components"
import authService from "../../services/auth.services";
import { useState } from "react";
import { useAuth } from "../../Providers/AuthProvider";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";





const SignForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [generalError, setGeneralError] = useState("");
    const { authUser } = useAuth()
    const [loading, setLoading] = useState(false);



    const submit = (data) => {
        setLoading(true);
        setTimeout(() => {
            authService.signup(data)
                .then(response => {
                    const { token, user } = response.data;
                    authUser(token, user);
                    setGeneralError("");

                })
                .catch(error => {
                    const { errorMessages } = error.response.data;
                    errorMessages.forEach(message => {
                        if (message.includes('already exists')) {
                            setGeneralError("Email or Username already exists.");
                            setError('email', { type: 'manual', message: 'Email already exists' });
                            setError('username', { type: 'manual', message: 'Username already exists' });
                        }
                    });
                })
                .finally(() => {

                    setLoading(false);
                })


        }, 3000)
    }


    return (
        <MainDiv>
            <LoadingSpinner loading={loading} />
            <h2>Sign In</h2>
            <form className="signForm" onSubmit={handleSubmit(submit)}>
                <div>
                    <label> Email </label>
                    <input type="email" {...register("email", {

                        required: "email is required",
                    })}
                        style={{ borderColor: errors.email && "red", outline: errors.email && "red" }}
                        placeholder={errors.email && errors.email.message}

                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label>User name </label>
                    <input type="text" {...register("username",
                        {
                            required: "userName is required"

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
                        required: "password is required",
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

                <button type="submit">Sign In</button>
                {generalError && <p style={{ color: "red" }}>{generalError}</p>}


            </form>
            <Link to="/login">Login</Link>
        </MainDiv>
    )
}


export default SignForm

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

  .signForm {
    background-color: white;
    display: flex;
    border: 2px solid black;
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