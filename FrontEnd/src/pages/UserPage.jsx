import React, { useEffect, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export const UserPage = () => {
  const [beds, setBeds] = useState([""]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000")
      .then((res) => {
        setBeds(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  const handleBookClick = () => {};
  const handleViewClick = (id) => {
    
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
