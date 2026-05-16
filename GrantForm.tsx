"use client";

import { useState } from "react";

export default function GrantForm() {
  const [idea, setIdea] = useState("");

  return (
    <div>
      <h2>Project Idea</h2>

      <textarea
        rows={5}
        placeholder="Enter project idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button>Find Grants</button>
    </div>
  );
}