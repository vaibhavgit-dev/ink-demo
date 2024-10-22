import React, { useEffect, useRef } from 'react';

const SmoothScrollSlider = ({ clonedThumbnails }) => {
    const sliderRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const noImageUrl = "https://via.placeholder.com/150?text=No+Image";

    const scrollSpeed = 1; 
    const intervalTime = 0; 
    useEffect(() => {
        const slider = sliderRef.current;
        // Function to scroll the slider
        const scrollSlider = () => {
            if (slider) {
                slider.scrollLeft += scrollSpeed;
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }
            }
        };

        scrollIntervalRef.current = setInterval(scrollSlider, intervalTime); // Adjust for smoothness
        return () => clearInterval(scrollIntervalRef.current); 
    }, []);

    return (
        <div className="slider-container bg-[#ffffff]" ref={sliderRef}>
            <div className="slider-items flex">
                {clonedThumbnails.map((thumbnail, index) => (
                    <div key={index} className="flex-none slide_item">
                        <img 
                            className="w-full object-cover" 
                            src={thumbnail || noImageUrl} 
                            alt={`Thumbnail ${index}`} 
                            onError={(e) => {
                                e.target.src = noImageUrl;
                            }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmoothScrollSlider;