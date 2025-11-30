import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./components/Navbar";
import "./index.css";


function App() {
  return (
    <>
    <Navbar />
    <div className="app-container">
      <div className="intro-block">
        <h1 className="main-title">Hi, I'm <span className="highlight">Ridhima Pant</span></h1>
        <p className="role-text">2nd Year Computer Science Undergraduate</p> 
        

        <div className="resume-icons">

  <a 
    href="https://www.linkedin.com/in/ridhima-pant-79396931a/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-link"
  >
    <FaLinkedin size={27} />
  </a>

  <a 
    href="https://github.com/ridhimabrb" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-link"
  >
    <FaGithub size={27} />
  </a>
</div>

      </div>
      <section id="projects" className="projects">
        <h3 className="section-title">Some of My Projects</h3>

        <div className="projects-grid">
          <a
           href="https://github.com/ridhimabrb/Discord-MemeBot"
           target="_blank"
           rel="noopener noreferrer"
           className="project-card"
         >
           <h3>📌 Discord MemeBot</h3>
           <p>A fun bot that can be invited to any server where it shows you memes from Reddit</p>
         </a>
         <a
           href="https://ridhimabrb.github.io/Music-FindR/"
           target="_blank"
           rel="noopener noreferrer"
           className="project-card"
         >
           <h3>📌 Music FindR</h3>
           <p>Enter an artist's name to see all their albums and release dates, and play on Spotify</p>
         </a>
         <a
           href="https://ridhimabrb.github.io/K-Nearest-Neighbors-Model/"
           target="_blank"
           rel="noopener noreferrer"
           className="project-card"
         >
           <h3>📌 KNN Algorithm Visualizer</h3>
           <p>A p5.js interactive project that performs k-nearest neighbors classification based on your cursor position</p>
         </a>

        </div>
      </section>
      <section id="writing" className="section writing-section">
       <h2 className="section-title">Writing</h2>
       <h4>Ever since I can remember, writing has been an integral part of my life. Be it essays, journal entries, poems, news articles, I genuinely enjoy doing it all. I got a poetry book published in 2020 and have a writing blog I started in 2019 linked here!</h4>
       <a 
         href="https://www.amazon.in/Heart-Head-Hand-Ridhima-Pant/dp/9390468159" 
         target="_blank"
         rel="noopener noreferrer"
         className="fancy-btn"
       >
         BOOK LINK
       </a> <br /><br />
       <a 
         href="https://pantridhima2323.wixsite.com/goldclouddiaries" 
         target="_blank"
         rel="noopener noreferrer"
         className="fancy-btn"
       >
         BLOG LINK
       </a>
     </section>
     <section id="photography" className="section photography-section">
      <h2 className="section-title">Photography</h2>

      <div className="photo-grid">
        <img src="/1.JPG" alt="Photo 1" />
        <img src="/2.JPG" alt="Photo 2" />
        <img src="/3.JPG" alt="Photo 3" />
      </div>

      <a 
        href="https://www.instagram.com/shutteridhima/?utm_source=ig_web_button_share_sheet" 
        target="_blank"
        rel="noopener noreferrer"
        className="fancy-btn"
      >
        PHOTOGRAPHY ACCOUNT
      </a>
    </section>




      {/* Footer With Handwriting */}
      <footer className="footer">
        <p className="footer-main handwriting">A tiny digital corner of my mind,   by Ridhima Pant</p>
        <p className="font-note handwriting small-note">This font is actually my handwriting!</p>
      </footer>
    </div>
    </>
  );
}

export default App;
