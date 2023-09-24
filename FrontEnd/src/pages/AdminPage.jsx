import React, { useEffect, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const AdminPage = () => {
  const location = useLocation();
  const [beds, setBeds] = useState([location.state]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(location.state);

  const handleBookClick = () => {};
  const handleViewClick = (id) => {
    navigate("/update", { state: id });
  };
  const handleDelete = (id) => {
    console.log(id);

    navigate("/delete", { state: id });
  };

  return (
    <div>
      {beds.map((bed, index) => (
        <div key={index} className="container">
          <div className="img">
            <img src={bed.image} alt="hospital" />
          </div>
          <div className="left section">
            <div className="hospitalname">
              <div>
                <h1>Hospital Name : {bed.hospital}</h1>
              </div>
              <div className="cross">
                <button
                  style={{ width: "30px", height: "30px", background: "none" }}
                  onClick={() => {
                    handleDelete(bed._id);
                  }}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="hospitalinfo">
              <div className="avail">
                No of beds available : {bed.no_of_beds} <br />
              </div>

              <div className="price">Price : {bed.price}</div>

              <div className="address">Address : {bed.address}</div>
              <div className="contact">Contact : {bed.contact}</div>
              <div className="next">
                Next room will be available in : {bed.next_available}
              </div>
            </div>
            <div className="btn">
              <button
                className="btn"
                onClick={handleBookClick}
                style={{ background: "#9FE2BF" }}
              >
                Book Now
              </button>
              <button
                className="btn"
                style={{ background: "#6495ED" }}
                onClick={() => {
                  handleViewClick(bed._id);
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AdminPage;
