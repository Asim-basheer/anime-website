import Navbar from "./components/Navbar";
import { animeData } from "./components/animeData";
import Slider from "./components/Slider";
function App() {
  console.log(animeData);
  return (
    <div>
      <Navbar />
      <Slider data={"https://www4.0zz0.com/2022/04/23/07/334324488.jpg"} />
    </div>
  );
}

export default App;
