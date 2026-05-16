"use client";

export default function ProposalGenerator() {
  return (
    <div>
      <h2>Proposal Generator</h2>

      <textarea
        rows={8}
        placeholder="Generated proposal..."
      />

      <button>Generate Proposal</button>
    </div>
  );
}