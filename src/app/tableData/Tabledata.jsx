"use client";
import React, { useEffect, useState } from "react";
import { allUsers } from "../../services/userService";

const TableData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      console.log("Fetching user data...");
      const userdata = await allUsers();
      setData(userdata);
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Convert data to CSV format
  const handleDownload = () => {
    const csvRows = [];
    
    // Define the CSV headers
    const headers = ['Username', 'Description', 'Email'];
    csvRows.push(headers.join(','));

    // Add the rows for each user
    data.forEach((user) => {
      const row = [user.name, user.about, user.email];
      csvRows.push(row.join(','));
    });

    // Create a CSV Blob and download it
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'tableData.csv');
    a.click();
  };

  return (
    <>
      <table style={{ borderCollapse: 'collapse', width: '40%',marginLeft:"30%", marginTop:"50px" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Username</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => (
            <tr key={index}>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>{user.about}</td>
              <td style={cellStyle}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button  style={buttonStyle}onClick={handleDownload} type="submit">Download CSV</button>
    </>
  );
};

// Style for table cells
const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};
const buttonStyle={
  display:"block",
  marginLeft:'43%',
  marginTop:"20px",
  backgroundColor:"#4CAF50",
  padding: '10px 20px',
  color: 'white',
  fontSize: '16px',

}
export default TableData;
