
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const EditTournament = () => {
  const { id } = useParams();  // To get the tournament ID from the URL
  const navigate = useNavigate();

  // Helper to get the current date-time in 'YYYY-MM-DDTHH:mm' format
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16); // Format for datetime-local input
  };

  const [formData, setFormData] = useState({
    tournamentName: "",
    tournamentUrl: "",
    startDate: getCurrentDateTime(), // Default to current date and time
    game: "",
    region: "",
    status: "Public",
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries like you did for createTournament
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);

        // Ensure "Nepal" is the first in the list
        const sortedCountries = [
          "Nepal",
          ...countryNames.filter((name) => name !== "Nepal").sort(),
        ];
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    // Fetch existing tournament data if editing
    const fetchTournament = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/tournament/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching tournament:", error);
        // Handle error (e.g., show message or redirect)
      }
    };

    fetchCountries();
    fetchTournament(); // Fetch the tournament to edit
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { startDate, ...otherData } = formData;
      const payload = {
        ...otherData,
        startDate: new Date(startDate).toISOString(),
      };

      const response = await axios.put(`http://localhost:3001/api/edit/${id}`, payload);
      console.log("Tournament updated successfully:", response.data);
      navigate("/brackets");  // Redirect to the brackets page or anywhere
    } catch (error) {
      console.error("Error updating tournament:", error.response?.data || error.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <label>
          Tournament Name:
          <input
            type="text"
            name="tournamentName"
            value={formData.tournamentName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tournament URL:
          <input
            type="text"
            name="tournamentUrl"
            value={formData.tournamentUrl}
            onChange={handleChange}
            required
            readOnly
          />
        </label>

        <label>
          Start Date:
          <input
            type="datetime-local"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Game:
          <select name="game" value={formData.game} onChange={handleChange} required>
            {/* Games options */}
            <option value="PUBG">PUBG</option>
            <option value="FREEFIRE">Freefire</option>
            {/* Add more game options as needed */}
          </select>
        </label>

        <label>
          Region:
          <select name="region" value={formData.region} onChange={handleChange} required>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </label>

        <button type="submit">Update Tournament</button>
      </form>
    </Div>
  );
};

export default EditTournament;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #001f3d; /* Dark blue background */

  form {
    // background-color: rgba(0, 0, 0, 0.5); /* Transparent background */
    // border: 2px solid #007bff; /* Blue border for the form */
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    color: white;
  }

  input, select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid white; /* White border for input and select fields */
    border-radius: 4px;
    margin-top: 5px;
    background-color: transparent;
    color: white;
  }

  button {
    padding: 12px;
    background-color: #800000; /* Maroon color for the button */
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #6a0000; /* Darker maroon on hover */
  }

  button:disabled {
    background-color: moroon;
    cursor: not-allowed;
  }
`;
