import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <div style={{width: "100vw", height: "100vh"}}>
    <Header 
    title="Multithreading" 
    authors={["Camilo Camargo", "Santiago Cujaban"] } 
    />
    <Card title="Block Event" description="Block Event...."/>
    </div>
  );
}
