
import "./Body.css";
import videoSrc from "../assets/city-drive.mp4";

const Body = () => {
  return (
    <section className="Body">
      <video
        className="Body-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="Body-overlay"></div>

      <div className="Body-content">
        <h1>Drive the Future</h1>
        <p>Experience motion. Redefined.</p>
        <button>Explore Now</button>
      </div>
    </section>
  );
};

export default Body;
