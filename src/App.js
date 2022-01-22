import "./App.css";
import Img1 from "./Image1.jpg";

function App() {
  return (
    <div className="App" style={{ border: "solid 1px black", maxwidth: "vw" }}>
      <>
        <h1 className="title red"> Adelast </h1>
        <br />
        <img src={Img1} alt="myImage" />
        <br />
        <img src={"/image2.jpg"} alt="inPublic" />
        <video width="320" height="240" controls>
          <source src={"corvette.mp4"} type={"video/mp4"} />
        </video>
      </>
    </div>
  );
}

export default App;
