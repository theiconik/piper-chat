import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <h1 className="heading">
        <i className="fab fa-pied-piper"></i> piper chat
      </h1>

      <div className="main-area">
        {/* Video Player */}
        <VideoPlayer />
        {/* Options -> Notifications */}
        <div width="100%" style={{ display: "flex", justifyContent: "center" }}>
          <Options>
            <Notifications />
          </Options>
        </div>
      </div>

      <footer>
        💓 from&nbsp;<span style={{ color: "#89a2a1" }}> pied</span>
        <span style={{ color: "#6fdfb8" }}>piper</span>
      </footer>
    </div>
  );
}

export default App;
