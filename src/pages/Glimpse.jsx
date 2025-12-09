import React, { useEffect, useState, useRef } from "react";
import HomeButton from "../components/HomeButton";
import LoadingScreen from "../components/LoadingScreen";

import image01 from "../assets/IMG.01.jpg";
import image02 from "../assets/IMG.02.jpg";
import image03 from "../assets/IMG.03.jpg";
import image04 from "../assets/IMG.04.jpg";
import image05 from "../assets/IMG.05.jpg";
import image06 from "../assets/IMG.06.jpg";
import image07 from "../assets/IMG.07.jpg";
import image08 from "../assets/IMG.08.jpg";
import image09 from "../assets/IMG.09.jpg";
import image10 from "../assets/IMG.10.jpg";
import image11 from "../assets/IMG.11.jpg";
import image12 from "../assets/IMG.12.jpg";
import image13 from "../assets/IMG.13.jpg";
import image14 from "../assets/IMG.14.jpg";

const styles = `
  /* Main Page and Layout */
  .glimpses-page {
  min-height: 100vh;
  position: relative;
  color: #fff;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  text-shadow: none;
}

.glimpses-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("image.02.jpg") no-repeat center center/cover;
  filter: blur(8px);   
  transform: scale(1.1);
  z-index: -1; 
}
.glimpses-page::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45); 
  z-index: -1; 
}
  .main-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 24px;
  }
  @media (min-width: 768px) {
    .main-container {
      padding: 96px 32px;
    }
  }
  .two-column-layout {
    display: grid;
    gap: 40px;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .two-column-layout {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 80px;
    }
  }
  /* Image Grid Section */
  .image-grid-container {
    width: 110%; 
    margin: 0 auto; 
    padding: 32px 48px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
    border-radius: 24px;
  }
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 1fr);
    grid-auto-flow: dense;
    gap: 16px;
  }
  .image-item {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background-color: #2d3748;
  }
  .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-out;
  }
  .image-item img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
  .col-span-1 { grid-column: span 1 / span 1; }
  .col-span-2 { grid-column: span 2 / span 2; }
  .row-span-1 { grid-row: span 1 / span 1; }
  .row-span-2 { grid-row: span 2 / span 2; }

  /* Text Content Section */
  .text-content {
    order: 2;
  }
  @media (min-width: 1024px) {
    .text-content {
      padding-left: 32px;
    }
  }
  .content-spacing {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .heading-container {
    margin-bottom: 16px;
  }
  .heading-text {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -0.025em;
    line-height: 1.1;
    color: #fff;
  }
  @media (min-width: 1024px) {
    .heading-text {
      font-size: 60px;
    }
  }
  .divider {
    width: 64px;
    height: 2px;
    background-image: linear-gradient(to right, #fff, #a0aec0);
  }
  .description-text {
    font-size: 20px;
    font-weight: 300;
    color: #cbd5e0;
    line-height: 1.625;
  }
  .sub-description-text {
    font-size: 18px;
    font-weight: 300;
    color: #a0aec0;
    line-height: 1.625;
  }
  .small-text {
    font-size: 16px;
    color: #a0aec0;
    line-height: 1.625;
  }
  .accent-element {
    padding-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #a0aec0;
  }
  .accent-line {
    width: 32px;
    height: 1px;
    background-color: #4a5568;
  }
  /* Glowing Stars Header */
  .glowing-stars {
    text-align: center;
    margin-bottom: 40px;
  }
  .star-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
  }
  .star {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    text-shadow: 0 0 8px #FFD700, 0 0 15px #FFD700;
    transform: rotate(360deg) scale(1.15, 1.15);
    color: #fff;
  }
  .star-1 { font-size: 24px; }
  .star-2 { font-size: 32px; animation-delay: 0.3s; }
  .star-3 { font-size: 24px; animation-delay: 0.6s; }

  .star-divider {
    width: 96px;
    height: 2px;
    background-image: linear-gradient(to right, transparent, white, transparent);
    opacity: 0.6;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }
  /* Centered Section */
  .centered-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    padding:120px 32px;
  }
  .center-text {
    width: 25%;
    color: #cbd5e0;
    font-size: 16px;
    line-height: 1.625;
  }
  .center-image-grid {
    width: 90%;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    display: grid;
    gap: 16px;
  }
  .center-image-grid img {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 220px;
    transition: transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }  
  .center-image-grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }
  .center-row-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  /* Styling for WebKit-based browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 8px;
  background-color: transparent; /* Makes the scrollbar track transparent */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* A semi-transparent white thumb */
  border-radius: 4px; /* Rounded corners for a sleek look */
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4); /* Brighter on hover */
}

/* Styling for Firefox */
html {
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent; /* thumb color track color */
}
`;

const GlowingStarsHeader = () => (
  <div className="glowing-stars">
    <div className="star-row">
      <span className="star star-1">★</span>
      <div className="star-divider"></div>
      <span className="star star-2">★</span>
      <div className="star-divider"></div>
      <span className="star star-3">★</span>
    </div>
  </div>
);

export default function Glimpses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);
  const images = [
    { src: image01, className: "col-span-2 row-span-2" },
    { src: image02, className: "col-span-2 row-span-1" },
    { src: image03, className: "col-span-1 row-span-2" },
    { src: image04, className: "col-span-2 row-span-1" },
    { src: image05, className: "col-span-1 row-span-1" },
    { src: image06, className: "col-span-1 row-span-1" },
  ];
  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <>
      <style>{styles}</style>
      <div className="glimpses-page">
         {/* 🔹 Home Button (Top Left Corner) */}
  <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
    <HomeButton />
  </div>

        <GlowingStarsHeader />

        <div className="main-container">
          {/* First Section */}
          <div className="two-column-layout">
            <div className="image-grid-container">
              <div className="masonry-grid">
                {images.map((image, index) => (
                  <div key={index} className={`image-item ${image.className}`}>
                    <img src={image.src} alt={`Glimpse ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-content">
              <div className="content-spacing">
                <div className="heading-container">
                  <h1 className="heading-text">Glimpses</h1>
                  <div className="divider"></div>
                </div>
                <div className="content-spacing">
                  <p className="description-text">
                    A curated collection of moments that define our journey—captured
                    in fleeting glimpses of beauty, innovation, and human connection.
                  </p>
                  <p className="sub-description-text">
                    Each frame tells a story of discovery, where light meets purpose
                    and vision transforms into reality. These glimpses represent more
                    than images—they are windows into experiences that shape our
                    understanding of the world around us.
                  </p>
                  <p className="small-text">
                    Explore the intersection of artistry and authenticity, where every
                    detail has been thoughtfully considered and every moment carefully preserved.
                  </p>
                </div>
                <div className="accent-element">
                  <span>Collection</span>
                  <div className="accent-line"></div>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Centered Section */}
          <div className="centered-section">
            <div className="center-text">
              <h2 className="heading-text">Moments of Creation</h2>
              <div className="divider"></div><br/>
              <p>
               "Captures the raw energy of creation—where ideas take shape, hands build dreams, and challenges spark innovation. 
               These glimpses showcase curiosity in action, teamwork in progress, and the determination to transform imagination into reality."
              </p>
            </div>

            <div className="center-image-grid">
              <img src={image07} alt="img1" />
              <div className="center-row-2">
                <img src={image08} alt="img2" />
                <img src={image09} alt="img3" />
              </div>
              <img src={image10} alt="img4" />
            </div>

            <div className="center-text">
              <h2 className="heading-text">Spirit of Togetherness</h2>
              <div className="divider"></div><br/>
              <p>
                "The story unfolds through bonds of friendship, shared laughter, and collective spirit. 
                These moments go beyond activities—they reflect the strength of unity, the joy of collaboration, and the memories that stay long after the day is over".</p>
            </div>
          </div>

          {/* ===== Section 3: Images Right + Text Left ===== */}
          <div className="section-wrapper my-32">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Text Left */}
              <div className="order-1 lg:pr-16 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
                    Our Story in Frames
                  </h1>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-white to-gray-400"></div>
                </div>
                <div className="space-y-6"><br/>
                  <p className="text-xl lg:text-2xl font-light text-gray-300 leading-relaxed">
                    Moments captured with care, preserving the beauty of
                    experiences.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    Through these glimpses, we celebrate creativity, purpose,
                    and the endless pursuit of discovery.
                  </p>
                  <p className="text-base text-gray-500 leading-relaxed">
                    A journey etched in frames—each image narrating its own
                    chapter.
                  </p>
                </div>
                <div className="pt-6">
                  <div className="inline-flex items-center space-x-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    <span>Highlights</span>
                    <div className="w-8 h-px bg-gray-600"></div>
                    <span>2024</span>
                  </div>
                </div>
              </div>

              {/* Images Right */}
              <div className="order-2">
                <div className="center-image-grid">
                  <img src={image14} alt="img1" />
                  <div className="center-row-2">
                    <img src={image11} alt="img2" />
                    <img src={image12} alt="img3" />
                  </div>
                  <img src={image13} alt="img4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
