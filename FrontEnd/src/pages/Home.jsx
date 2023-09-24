import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "../components/Spinner";

export const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const handleClick = (e) => {
    if (e.target.value === "admin") {
      return navigate("/login");
    }
    return navigate("/details");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return ()=> clearTimeout(timeout);
  }, []);
  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div
      className="form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundImage:
          "url(https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=400)",
      }}
    >
      <button
        value="user"
        onClick={(e) => {
          handleClick(e);
        }}
        style={{ width: "150px" }}
      >
        User
      </button>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        value="admin"
        style={{ width: "150px" }}
      >
        Admin
      </button>
    </div>
  );
};
