import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`
        relative transition-all rounded-lg overflow-hidden duration-500
        h-[250px] md:h-[400px] w-full md:w-56
        group hover:md:w-full
      `}
    >
      <img 
        src={src} 
        alt={alt}
        className={`
          h-full w-full 
          object-cover
          object-center
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-700
        `}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Expand indicator - only visible before hover */}
      <div className="absolute bottom-3 right-3 bg-black/50 text-white rounded-full p-1 
                     opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </div>
    </div>
  );
};

export default GalleryImage;