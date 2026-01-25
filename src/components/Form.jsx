import React, { useRef} from 'react'

const Form = ({ fetchWeather }) => {

  const searchKey = useRef('')

  // const [key, setKey] = useState('')

  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      <input
        type="text"
        ref={searchKey}
        className="form-control ms-5"
        placeholder="Enter Country..."
      />
      {/* <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="form-control ms-5"
        placeholder="Enter Country..."
      /> */}
      <input
        type="button"
        onClick={() => fetchWeather(searchKey.current.value)}
        value="Search"
        className="btn ms-2 me-5 bg-dark text-white"
      />
    </div>
  );
};

export default Form
