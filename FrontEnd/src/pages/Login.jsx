import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { useSnackbar } from "notistack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  

  const handleSuccess = (message) => {
    toast.success(message, { position: "bottom-left" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        name: name,
        password: password,
      });

      
      const { success, message ,userdata:beddata} = data;

      if (success) {
        console.log(beddata);
        enqueueSnackbar(message, { variant: "success" });
        handleSuccess(message);

        navigate("/adminpage" , { state:beddata });
      } else {
        enqueueSnackbar(message, { variant: "error" });
        setName("");
        setPassword("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="login">
        <h1>Login</h1>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="name"
          />
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="password"
          />
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
