import './Rendering.css';
import { useEffect, useState } from 'react';

function Rendering() {
  const products = [
    { id: 1, name: "Puma", price: 2500 },
    { id: 2, name: "addidas", price: 2500 },
    { id: 3, name: "MAX", price: 2500 },
    { id: 4, name: "Roadstar", price: 2500 },
    { id: 5, name: "Levis", price: 2500 },
    { id: 6, name: "buffallo", price: 2500 },
    { id: 7, name: "WROGN", price: 2500 },
    { id: 8, name: "Nike", price: 2500 },
    { id: 9, name: "Allen solly", price: 2500 },
    { id: 10, name: "Jockey", price: 2500 },
    { id: 11, name: "Armani", price: 2500 },
    { id: 12, name: "GAP", price: 2500 },
    { id: 13, name: "BIBA", price: 2500 }
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/test?action=getusers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data); // backend returned array
        } else if (data?.users) {
          setUsers(data.users); // backend returned { users: [...] }

        }
      })
      .catch((err) => console.error(err));
  }, []); // ✅ run once only

  return (
    <div>
      <h1>Rendering Data</h1>

      {/* List Rendering */}
      <h1>List Rendering</h1>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}, {product.price}
          </li>
        ))}
      </ol>

      {/* Table Rendering */}
      <h1>Table Rendering</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>ADD TO CART</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><button>Add cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Div Rendering */}
      <h1>Div Rendering</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap"
      }}>
        {products.map((product) => (
          <div className="division" key={product.id}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <button>Add cart</button>
          </div>
        ))}
      </div>

       {/* List Rendering */}
      <h1>List Rendering</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email},{user.password}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Rendering;
