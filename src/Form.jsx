import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/data", {
        data: data,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" container-fluid ">
      <div className=" border-r-indigo-700 col-start-2 ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="data">Data:</label>
          <input type="text" id="data" value={data} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
