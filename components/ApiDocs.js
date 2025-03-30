import { useState, useEffect } from "react";
import axios from "axios";

export default function ApiDocs() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    axios.get("https://your-api-url.com/api/health")
      .then(response => {
        setStatus(response.data.status || "Online");
      })
      .catch(error => {
        console.error("API Error:", error);
        setStatus("Offline");
      });
  }, []);

  return (
    <section className="p-10 bg-gray-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">API Status</h2>
      <p className="text-lg">Current API Status: <strong>{status}</strong></p>
      <a 
        href="https://api.jorgecastillo.net/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 transition rounded-md text-white font-semibold"
      >
        View API Docs
      </a>
    </section>
  );
}
