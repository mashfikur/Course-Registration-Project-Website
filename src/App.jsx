import "./App.css";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Course Registration
      </h1>

      <div className="container my-10 mx-auto flex justify-between">
        <Courses></Courses>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
