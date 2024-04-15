import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";

function Certificate() {
  const { userData, updateUserData } = useScoreStore();

  const [certificate, setCertificate] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setCertificationCategory } = useScoreStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.fullName && userData.fullName.length > 1) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("certificate", certificate);
      formData.append("name", userData.fullName);
      const response = await fetch("http://127.0.0.1:5000/cert", {
        method: "POST",
        body: formData,
      });
      const resJson = await response.json();
      setIsLoading(false);
      if (resJson[0]) {
        setCertificationCategory(resJson[1]);
        navigate("/informationForm");
      } else {
        alert(resJson[1]);
      }
    } else {
      alert("Enter Valid Name");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 border-slate-500">
      <h2 className="text-2xl font-bold mb-6">Upload Certificate</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-slate-500"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="certificate"
          >
            Certificate
          </label>
          <input
            type="file"
            id="certificate"
            name="certificate"
            onChange={(e) => setCertificate(e.target.files[0])}
            className="shadow border border-slate-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Certificate Owner Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.fullName}
            onChange={(e) => setName(e.target.value)}
            className="shadow  border-slate-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}
        {isLoading ? (
          <div className="text-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 inline"
              viewBox="0 0 24 24"
            >
              {/* ... SVG spinner code */}
            </svg>
            Processing...
          </div>
        ) : (
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Certificate;
