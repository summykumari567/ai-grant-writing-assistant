import GrantForm from "@/components/GrantForm";
import ProposalGenerator from "@/components/ProposalGenerator";

export default function Home() {
  return (
    <main className="container">
      <h1>AI Grant Writing Assistant</h1>

      <p>
        AI-powered platform for generating grant proposals,
        finding funding opportunities, and improving submission quality.
      </p>

      <GrantForm />
      <ProposalGenerator />
    </main>
  );
}