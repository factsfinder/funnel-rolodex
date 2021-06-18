import React, { useState, useEffect } from "react";

import { API_URL } from "../App";

function SingleJob({ job }) {
  const { title, cover_image, job_id, price } = job;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/orders/${job_id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setOrders(resJson.data);
      })
      .catch((err) => {
        console.log("error fetching jobs list: ", err);
      });
  }, [job_id]);

  const orders_completed = orders.filter((o) => o.complete).length;
  const orders_active = orders.filter((o) => o.active).length;

  return (
    <div className="job">
      <h3 className="job-title">{title}</h3>
      <img
        className="job-image"
        src={`http://localhost:3050/${cover_image}`}
        alt="job cover pic"
      />
      <div className="job-info">
        <p>
          <b>Price</b> {price}
        </p>
        <p>
          <b>Orders Active</b> {orders_active}
        </p>
        <p>
          <b>Orders Completed</b> {orders_completed}
        </p>
      </div>
    </div>
  );
}

export default SingleJob;
