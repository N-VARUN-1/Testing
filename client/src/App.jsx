import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = async () => {
    try {
      const response = await fetch('testing-drab-nine.vercel.app/api/testing', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "Hello World" })
      });

      if (!response.ok) {
        console.log("Error");
      } else {
        console.log("Success");
      }

      const data = await response.json();
      console.log("Response:", data);

    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleSubmit}>Click Here</button>
    </>
  )
}

export default App;
