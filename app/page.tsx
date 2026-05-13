// App.js
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f7fa" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
          background: "#fff",
        }}
      >
        <h2 style={{ color: "#2d2d2d" }}>
          <span style={{ color: "#4CAF4F" }}>▲</span> Nexcent
        </h2>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            color: "#555",
            fontSize: "14px",
          }}
        >
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>

        <button
          style={{
            background: "#4CAF4F",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register Now →
        </button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
          minHeight: "500px",
        }}
      >
        {/* Left */}
        <div>
          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.2",
              color: "#444",
              marginBottom: "20px",
            }}
          >
            Lessons and insights <br />
            <span style={{ color: "#4CAF4F" }}>from 8 years</span>
          </h1>

          <p style={{ color: "#777", marginBottom: "30px" }}>
            Where to grow your business as a photographer: site or social media?
          </p>

          <button
            style={{
              background: "#4CAF4F",
              color: "#fff",
              border: "none",
              padding: "14px 30px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="hero"
            style={{ width: "400px" }}
          />
        </div>
      </section>

      {/* Dots */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <span
          style={{
            height: "10px",
            width: "10px",
            background: "#4CAF4F",
            borderRadius: "50%",
            display: "inline-block",
            margin: "5px",
          }}
        ></span>

        <span
          style={{
            height: "10px",
            width: "10px",
            background: "#c4c4c4",
            borderRadius: "50%",
            display: "inline-block",
            margin: "5px",
          }}
        ></span>

        <span
          style={{
            height: "10px",
            width: "10px",
            background: "#c4c4c4",
            borderRadius: "50%",
            display: "inline-block",
            margin: "5px",
          }}
        ></span>
      </div>

      {/* Clients Section */}
      <section
        style={{
          background: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", color: "#444" }}>Our Clients</h2>

        <p style={{ color: "#777", marginBottom: "40px" }}>
          We have been working with some Fortune 500+ clients
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
            fontSize: "40px",
          }}
        >
          <span>⚙️</span>
          <span>🌐</span>
          <span>💻</span>
          <span>🔷</span>
          <span>⭕</span>
          <span>🔗</span>
          <span>🖥️</span>
        </div>
      </section>

      {/* Community Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#f5f7fa",
        }}
      >
        <h2 style={{ fontSize: "42px", color: "#444" }}>
          Manage your entire community <br />
          in a single system
        </h2>

        <p style={{ color: "#777", marginTop: "15px" }}>
          Who is Nexcent suitable for?
        </p>
      </section>
    </div>
  );
}

export default App;
