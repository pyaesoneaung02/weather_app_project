import React, { useRef } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");

  const handleSearch = () => {
    const value = searchKey.current.value.trim();
    if (!value) return;

    fetchWeather(value);
  };

  return (
    <div className="d-flex justify-content-center gap-2 mb-3">
      <input
        type="text"
        ref={searchKey}
        className="form-control"
        placeholder="Enter city..."
      />

      <button onClick={handleSearch} className="btn btn-dark">
        Search
      </button>
    </div>
  );
};

export default Form;
