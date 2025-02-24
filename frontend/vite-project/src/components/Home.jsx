import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import Navbar from './NavbarPage.jsx';
import './Home.css'
import A1 from '../assets/sololeveling.png';
import A2 from '../assets/igot.png';
import A3 from '../assets/classroom.png';
import A4 from '../assets/yourname1.png';
import A5 from '../assets/dayswith1.png';
import A6 from '../assets/horimiya1.png';
import A7 from '../assets/bluelock.png';
import A8 from '../assets/demonslayer.png';
import A9 from '../assets/viralhit.png';
import A10 from '../assets/Haikyuu.png';
import feature from '../assets/feature.png';
import makima from '../assets/makima.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import backgroundphoto from '../assets/backgroundphoto.png';

const Homepage = () => {
  const scrollContainerRef = useRef(null);
  const [images, setImages] = useState([A1, A2, A3, A4, A5, A6, A7, A8, A9, A10]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleScroll = (event) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScrollEnd = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        // User has scrolled to the end, append the images again
        setImages((prevImages) => [...prevImages, ...prevImages]);
      }
    };
    scrollContainer.addEventListener('scroll', handleScrollEnd);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

  const handleImageClick = (image, index) => {
    navigate(`/anime/${index}`, { state: { image } }); // Pass the image and index as state
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-black text-white">
        {/* Background Image */}
        <img className="w-full h-screen object-cover" src={backgroundphoto} alt="Background" />

        {/* Horizontal Scrollable Image Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 py-12 px-4 scrollbar-hide"
          onWheel={handleScroll}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[160px] max-w-[200px] h-[280px] cursor-pointer" // Add cursor pointer to indicate clickable
              onClick={() => handleImageClick(image)} // Handle image click
            >
              <img className="w-full h-full object-cover" src={image} alt={`anime ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="flex justify-evenly text-4xl font-bold my-8">Be the First to Watch</h1>

        {/* Feature and Makima Images */}
        <div className="flex justify-evenly pt-12">
          <img className="max-w-xs" src={feature} alt="Featured anime" />
          <img className="max-w-xs" src={makima} alt="Makima character" />
        </div>

        
        <div className="flex justify-evenly pt-12">
          <div>
            <img className="max-w-xs" src={img1} alt="Featured anime" />
            <h3 className='flex justify-evenly pt-12'>FIRST ACCESS</h3>
            <p><p>First access, early entry, and exclusive</p><p className='flex justify-evenly'>benefits at Anime World events</p></p>
          </div>
          <div>
            <img className="max-w-xs" src={img2} alt="Makima character" />
            <h3 className='flex justify-evenly pt-12'>WINNERS GIFT</h3>
            <p className='flex justify-evenly'>Ultimate Winners recieve different Prices</p>
          </div>
        </div>


      </div>
    </>
  );
};

export default Homepage;