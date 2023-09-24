import React from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

export const DeleteBed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const {enqueueSnackbar}=useSnackbar();





  const handleClick = (e) => {
    if (e.target.name === "nobutton") {
      return navigate("/details");
    }

    return axios
      .delete(`http://localhost:3000/beds/${id}`)
      .then(() => {
        enqueueSnackbar("Deleted Successfully",{variant:"success"})
        navigate("/details");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="form" style={{ background: "none", border: "3px solid" }}>
        Do you want to delete it?
        <div className="delete-btn" style={{ marginTop: "60px" }}>
          <div>
            <button
              name="yesbutton"
              style={{ backgroundColor: "#DC143C" }}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Yes
            </button>
          </div>
          <div>
            <button
              name="nobutton"
              onClick={(e) => {
                handleClick(e);
              }}
              style={{ backgroundColor: "#9FE2BF" }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
