import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./components/Navbar";
import "./index.css";
import './App.css'
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-glow");

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
    <div className="cursor-glow"></div>
    
    <Navbar />
    <div className="app-container">
      <div className="intro-block">
        <h1 className="main-title">Hi, I'm <span className="highlight">Ridhima Pant</span></h1>
        <TypeAnimation
          className="typing-text"
          sequence={[
            "Computer Science Undergraduate @IGDTUW'28",
            1500,
            "AI & Machine Learning Enthusiast",
            1500,
            "Passionate about GenAI and Deep Learning",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          />
        

        <div className="resume-icons">

  <a 
    href="https://www.linkedin.com/in/ridhima-pant-79396931a/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-link"
  >
    <FaLinkedin size={30} />
  </a>

  <a 
    href="https://github.com/ridhimabrb" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="icon-link"
  >
    <FaGithub size={30} />
  </a>
  
</div> <br />

<motion.h2
  className="skills-heading"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Skills
</motion.h2>

<div className="skills-wrapper">
  {[
    "C, C++ ",
    "Python", "Machine Learning", "Generative AI", "SHAP",
    "JavaScript", "Typescript",
    "DBMS, SQL", "Data Structures and Algorithms","OOPS", "DevOps",
    "Computer Networks",
    "Vite", "React ","Arduino", "Hardware- 8051", "ESP 32", "RaspberryPi OS", "Linux", "Git, Github"
  ].map((skill, index) => (
    <motion.span
      key={index}
      className="skill-pill"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
    >
      {skill}
    </motion.span>
  ))}
</div>


      </div>
      <section id="projects" className="projects">
        <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Some of My Projects
      </motion.h2>

        <div className="projects-list">
          <motion.a
            href="https://trading-analyst-hd2do6ygvbeyuw33bjb4nx.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}

            viewport={{ once: true }}
          >
            <div className="project-number">01</div>

            <div className="project-content">
              
              <h3>📌 QuantScope</h3>

              <p>
                An end-to-end AI-powered trading analysis system that predicts
                short-term market direction using machine learning and live market
                data.
              </p>

              <span className="project-link">
                View Project →
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://ridhimabrb.github.io/Pixelated/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: 0.15,
            }}

            viewport={{ once: true }}
          >
            <div className="project-number">02</div>

            <div className="project-content">
              <h3>📌 Pixelated</h3>

              <p>
                A data-driven emotion journal that transforms daily thoughts into a
                visual memory archive using Hugging Face NLP models.
                
              </p>

              <span className="project-link">
                View Project →
              </span>
            </div>
          </motion.a>


          <motion.a
            href=" https://ridhimabrb.github.io/CrisisMesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.7,
              delay: 0.30,
            }}

            viewport={{ once: true }}
          >
            <div className="project-number">03</div>

            <div className="project-content">
              <h3>📌 Crisis Mesh</h3>

              <p>
                Real-time humanitarian coordination platform connecting disaster
                victims with responders using Firebase and structured data views.
              </p>

              <span className="project-link">
                View Project →
              </span>
            </div>
          </motion.a>

        </div>
      </section>
      
      <section id="writing" className="section writing-section">
       <motion.h2 
       className="section-title"
       initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        Writing</motion.h2>
       <p className="writing-intro">Ever since I can remember, writing has been an integral part of my life. Be it articles, journal entries, poems, news documentation, I genuinely enjoy doing it all.<br />  I got a poetry book published in <b>2020</b> and have a writing blog I started in <b>2019</b> linked here! <br/> <b>Fun Fact : This font is actually my handwriting!</b> </p>
       <a 
         href="https://www.amazon.in/Heart-Head-Hand-Ridhima-Pant/dp/9390468159" 
         target="_blank"
         rel="noopener noreferrer"
         className="fancy-btn"
       >
         BOOK LINK
       </a> 
       <a 
         href="https://pantridhima2323.wixsite.com/goldclouddiaries" 
         target="_blank"
         rel="noopener noreferrer"
         className="fancy-btn"
       >

         BLOG LINK
       </a>
       <div className="article-paper">
       <h2 className="article-heading">Article- How Hedge Funds Use Satellite Images to Predict Earnings</h2>
       <p>While surfing the internet, I came across a video showing a satellite image of a Walmart parking lot.

At first glance it looked completely unremarkable. Hundreds of tiny dots representing cars, a large rectangular building in the middle, and roads branching outward like veins.

The image actually sent me down a rabbit hole when I started exploring why a hedge fund would pay good money for that image.

That might sound ridiculous.

Why would anyone managing billions of dollars care about a photograph of a parking lot? <br/>The answer is very interesting, they don't care about the photograph. They care about the information hidden inside it, something as plain as a parking lot image is extensively utilized by hedge funds and quantitative trading firms. I had never thought of it this way.

And this realization led me down a rabbit hole that connected satellite imagery, machine learning, computer vision, alternative data, and quantitative finance.


The deeper I dug, the more I realized that modern finance looks surprisingly similar to modern data science.


<br/>
Imagine that Walmart is scheduled to release its quarterly earnings report in three weeks.

Millions of investors want to know one thing: Did Walmart have a good quarter or a bad one?

Traditionally, investors would wait for the earnings report. But quantitative hedge funds take a different approach. 

Instead of waiting for the answer, they try to estimate it beforehand. The logic is simple and must be obvious by now. If more customers visited Walmart stores this quarter than last quarter, revenue will probably increase. So the real question becomes: Can we estimate customer activity before earnings are released?

This is where satellites enter the story. They help spot trends before they  become public.


<br/> Counting Cars From Space-
Suppose a satellite captures images of hundreds of Walmart stores every few days.

A human could manually count the cars, but they train computer vision models capable of automatically identifying vehicles from aerial imagery.

The pipeline is similar to an object detection project in machine learning:

Collect satellite imagery.

Detect cars using computer vision models.

Count vehicles in each image.

Aggregate counts across locations.

Compare against historical averages.

Build predictive models for revenue.

If parking lots consistently contain more vehicles than usual, that may indicate increased foot traffic. More foot traffic often means more purchases. More purchases may translate into higher earnings. This alternate data gives analysts an informational edge ahead of consensus. An upper edge over other competitors. 

The signal extracted from the image is valuable. It's a distinction that appears repeatedly throughout quantitative finance.


<br/><h3> The Rise of Alternative Data</h3>
When I first started reading about investing, the concept of alternate data stood out to me. Alternative data refers to information that is not traditionally found in company reports. Many modern quantitative funds are obsessed with alternative data.

Examples include:

Satellite imagery,

Credit card transaction data,

Flight tracking data,

Shipping records.

The goal is always the same:

Find information that helps estimate future business performance before the broader market notices it. Hedge funds are not merely trading firms anymore, they are data companies competing against other data companies.


<br/>A Real Example: Oil Storage Monitoring- One of the most famous applications of satellite imagery involves oil storage facilities. I have read so many case studies on this and this example never fails to impress me.


So, many storage tanks have floating roofs. These 'floating roofs' rise and fall with the oil level to prevent explosive vapor buildup. When oil is drawn out and the roof lowers, the tank’s outer wall casts a crescent-shaped shadow onto the sunken roof. And the shadow cast by the roof can reveal how much oil is stored inside!! (by factoring in the sun’s angle and time of day)

Analyzing satellite images of these facilities, allows analysts to calculate global crude supply weeks before official government reports are released. Knowing inventory levels even slightly earlier than competitors can create a trading advantage worth millions.

A report showed that hedge funds are aggressively buying alternative data, and this market is projected to hit $135.72 billion by 2030. Crazy


<br/>
<h3>The Quant Perspective</h3>
Another thing I learned while researching this topic is that quantitative finance is not really about predicting markets. It is about information extraction.

A satellite image is not valuable. What is valuable is converting those observations into a measurable signal that provides insight into future events.

The process looks remarkably similar to building an ML system:

Raw Data to Feature Engineering to Signal Generation to Prediction to Evaluation

The terminology changes but the underlying ideas do not.


One phrase that appears repeatedly in quantitative finance is signal-to noise ratio. Financial markets are incredibly noisy. Every day, markets generate an overwhelming amount of information: earnings releases, economic reports, breaking news, and millions of trades. The challenge is not finding data, it is identifying which tiny fraction of that data actually contains predictive value.


<br/>Why This Is an Arms Race-
The existence of a good signal creates a strange paradox. The moment everyone discovers it, it stops being valuable.

Suppose ten hedge funds realize that satellite images can predict retailer performance. Soon hundreds of analysts begin monitoring the same stores. Eventually the information becomes incorporated into stock prices almost immediately and the advantage disappears. This creates a constant arms race.


Information is everywhere. The real advantage comes from seeing value in places where everyone else sees only pixels.
<br/>
-Ridhima Pant</p>
      </div>
     </section>

     <section id="photography" className="section photography-section">
      <motion.h2 className="section-title"
      initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >Photography</motion.h2>

      <div className="photo-grid">
        
        <img src={`${import.meta.env.BASE_URL}2.JPG`} alt="" />
        <img src={`${import.meta.env.BASE_URL}1.JPG`} alt="" />
        <img src={`${import.meta.env.BASE_URL}3.JPG`} alt="" />

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
        
      </footer>
    </div>
    </>
  );
}

export default App;
