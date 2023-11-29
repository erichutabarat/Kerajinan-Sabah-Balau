import { useState, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive'; // Import useMediaQuery from react-responsive

function Imageslider() {
  const [slides, setSlides] = useState([0, 1, 2]);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Use useMediaQuery to get the mobile state
  const SliderData = [
	  {
	    image:
	      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
	  },
	  {
	    image:
	      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
	  },
	  {
	    image:
	      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
	  },
	  {
	    image:
	      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
	  },
	  {
	    image:
	      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
	  }
	];
  const prev = () => {
    let updateslides = slides.map((current) => {
      if (current === 0) {
        return 4;
      } else {
        return current - 1;
      }
    });
    setSlides(updateslides);
  };

  const next = useCallback(() => {
    let updateslides = slides.map((current) => {
      if (current === 4) {
        return 0;
      } else {
        return current + 1;
      }
    });
    setSlides(updateslides);
  }, [slides]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [next]);

  return (
    <div id="imageslider" className="flex flex-row justify-between items-center w-full p-2 gap-2">
      <button id="prev" onClick={prev} className="text-xl rounded-2xl text-center px-3 border-2 border-slate-200 w-1/7 p-2">&lt;</button>
        {isMobile ? (
            <div id="sliding" className="flex flex-row w-5/7">
              <img src={SliderData[slides[0]].image} className="w-full h-full object-cover border-2 border-white rounded-lg" alt="image slider"/>
            </div>
          ) : (
            <div id="sliding" className="grid grid-cols-3 w-5/7">
              <img src={SliderData[slides[0]].image} className="w-full h-full object-cover border-2 border-white rounded-lg" alt="image slider"/>
              <img src={SliderData[slides[1]].image} className="w-full h-full object-cover border-2 border-white rounded-lg" alt="image slider"/>
              <img src={SliderData[slides[2]].image} className="w-full h-full object-cover border-2 border-white rounded-lg" alt="image slider"/>
            </div>
          )}

      <button id="next" onClick={next} className="text-xl rounded-2xl text-center px-3 border-2 border-slate-200 w-1/7 p-2">&#62;</button>
    </div>
  );
}

export default Imageslider;
