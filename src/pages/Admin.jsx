import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const ADMIN_PASSWORD = "admin123"; // change this

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      fetchData();
    } else {
      alert("Wrong password");
    }
  };

  async function fetchData() {
    let { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setData(data);
    }
  }

  if (!loggedIn) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 10, width: 200 }}
        />
        <br /><br />
        <button onClick={login} style={{ padding: 10 }}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>All Enquiries</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Products</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.company}</td>
              <td>{row.products}</td>
              <td>{row.message}</td>
              <td>{row.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
