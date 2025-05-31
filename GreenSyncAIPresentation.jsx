export default function GreenSyncAIPresentation() {
  return (
    <div className="p-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">GreenSync AI</h1>
        <p className="text-lg">
          A Sustainable and Intelligent Energy Management System for Data Centers
        </p>
        <p className="text-sm text-gray-500">Prepared by: Mohamad Hammad</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. The Problem</h2>
        <p>
          Data centers consume an enormous amount of electricity to run servers and cooling systems. 
          As AI technologies expand, energy demands continue to grow, increasing carbon emissions 
          and operational costs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Proposed Solution</h2>
        <p>
          GreenSync AI uses artificial intelligence to dynamically distribute computing loads across 
          servers based on energy efficiency. The system is powered by solar panels and uses outside-air 
          cooling to reduce reliance on traditional air conditioning systems.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. How It Works</h2>
        <ul className="list-disc list-inside">
          <li>AI forecasts load and adjusts server usage accordingly.</li>
          <li>Solar panels provide primary energy during daylight hours.</li>
          <li>Airflow system cools servers using ambient outdoor air.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Benefits</h2>
        <ul className="list-disc list-inside">
          <li><strong>Environmental:</strong> Lower CO₂ emissions and energy waste</li>
          <li><strong>Technical:</strong> Smarter load balancing and real-time optimization</li>
          <li><strong>Economic:</strong> Reduced electricity costs for Microsoft</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Projected Impact</h2>
        <p>
          By adopting GreenSync AI across Microsoft’s data centers, potential energy savings could reach 
          up to 30%, making a significant contribution to sustainability goals.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Final Note</h2>
        <p>
          GreenSync AI is more than a system—it’s a step toward a greener tech future. By blending AI 
          and renewable energy, we can power progress sustainably.
        </p>
      </section>
    </div>
  );
}
