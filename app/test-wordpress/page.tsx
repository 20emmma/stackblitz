"use client";

import { useEffect, useState } from "react";

export default function WordPressTestPage() {
  const [status, setStatus] = useState("Testing...");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://neweragroup.rf.gd/wp-json/wp/v2/companies"
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        return response.json();
      })
      .then((result) => {
        setData(result);
        setStatus("SUCCESS");
      })
      .catch((error) => {
        setStatus(`FAILED: ${error.message}`);
      });
  }, []);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        WordPress Connection Test
      </h1>

      <p className="mt-6">
        Status: {status}
      </p>

      {data && (
        <pre className="mt-6 overflow-auto rounded-lg bg-gray-100 p-6">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}
