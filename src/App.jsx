import "./App.css";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Course Registration
      </h1>

      <div className="container mx-auto flex justify-between" >
        <Courses></Courses>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export default App;
