import "./App.css";
import Banner from "./component/Banner";
import Completed from "./component/Completed";
import Designers from "./component/Designers";
import Navbars from "./navbars/Navbars";

function App() {
  return (
    <div>
      <Navbars />
      <Banner />
      <Designers />
      <Completed />
    </div>
  );
}

export default App;
