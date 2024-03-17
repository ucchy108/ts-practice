import Dashboard from "./dashboard";
import Header from "./header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto mt-10">
        <Dashboard />
      </div>
    </main>
  );
}
