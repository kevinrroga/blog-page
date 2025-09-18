import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // For mobile devices, show a modal/fullscreen view when expanded
  if (isExpanded && window.innerWidth < 768) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
        onClick={() => setIsExpanded(false)}
      >
        <div className="relative w-full h-full">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-contain"
          />
          
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`
        relative transition-all rounded-lg overflow-hidden duration-700
        h-[250px] md:h-[400px]
        ${isExpanded ? 'md:w-full' : 'w-full md:w-56'}
      `}
      onClick={() => setIsExpanded(true)}
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
      
      {/* Expand indicator */}
      <div className="absolute bottom-3 right-3 bg-black/50 text-white rounded-full p-1">
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