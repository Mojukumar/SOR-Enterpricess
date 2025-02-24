import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';

const Home = () => {
  const images = useMemo(() => [
    {
      src: 'https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg',
      width: '100%', // 100% of the container
      height: '600px' // maintain aspect ratio
    },
    {
      src: 'https://e1.pxfuel.com/desktop-wallpaper/102/337/desktop-wallpaper-yamaha-mt-10-mt.jpg',
      width: '1650px', // 80% of the container
      height: '600px' // fixed height
    },
    {
      src: 'https://e0.pxfuel.com/wallpapers/420/477/desktop-wallpaper-graphy-of-black-touring-motorcycle.jpg',
      width: '1650px', // 80% of the container
      height: '600px' // fixed height
    },
    {
      src: 'https://t3.ftcdn.net/jpg/08/99/31/24/360_F_899312440_cHqG1y5iqnDKpULl2WW0PsvkEJ77YZAd.jpg',
      width: '1650px', // 60% of the container
      height: '600px' // fixed height
    },
    {
      src: 'https://img.freepik.com/premium-photo/long-time-exposure-mountain-bicycle-racing-time-laps_868783-17721.jpg',
      width: '1650px', // 60% of the container
      height: '600px' // fixed height
    }
  ], []);

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  return (
    <div>
      <img
        className="img-fluid"
        src={currentImage.src}
        alt="loading..."
        style={{
          width: currentImage.width,
          height: currentImage.height
        }}
      />
      <h1 className="home">Enjoy The Ride</h1>
    </div>
  );
}

export default Home;
