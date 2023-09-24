import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";
export const AddBeds = () => {
  const [bed, setBed] = useState("");
  const [hospital, setHospital] = useState("");
  const [available, setAvailable] = useState("");
  const [next, setNext] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const { enqueueSnackbar } = useSnackbar();
const [cookies, removeCookie] = useCookies([]);


 


  const navigate = useNavigate();

  const handleSaveBed = (e) => {
    e.preventDefault();
    const data = {
      no_of_beds: bed,
      hospital,
      available,
      next_available: next,
      price,
      contact,
      address,
    };
    axios
      .post("http://localhost:3000/beds", data)
      .then(() => {
        enqueueSnackbar("Bed added successfully", { variant: "success" });
        navigate("/adminpage");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form className="form">
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "20px",
            }}
            className="labels"
          >
            <label htmlFor="beds">No Of Beds</label>
            <label htmlFor="hospital-name">Hospital Name</label>
            <label htmlFor="available">Available</label>
            <label htmlFor="Next">Next Bed Available</label>
            <label htmlFor="pricee">Price</label>
            <label htmlFor="pricee">Contact</label>
            <label htmlFor="pricee">Address</label>

          </div>
          <div className="inputs">
            <div>
              <input
                placeholder="no of beds"
                type="text"
                name="bed"
                value={bed}
                onChange={(e) => {
                  setBed(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                placeholder="hospital name"
                type="text"
                name="hospital"
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              <input
                placeholder="available"
                type="text"
                name="available"
                value={available}
                onChange={(e) => {
                  setAvailable(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                placeholder="next available time"
                type="text"
                name="next"
                value={next}
                onChange={(e) => {
                  setNext(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                placeholder="price"
                type="text"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                placeholder="contact"
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                placeholder="address"
                type="text"
                name="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <button onClick={handleSaveBed}>Save Bed</button>
      </form>
    </div>
  );
};
