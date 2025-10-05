import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="
        relative transition-all rounded-lg overflow-hidden duration-500
        h-[250px] md:h-[400px] flex-shrink
        w-24 sm:w-32 md:w-56
        hover:w-full
        hover:z-10
        group
      "
    >
      <img 
        src={src} 
        alt={alt}
        className={`
          h-full w-full 
          object-cover
          group-hover:object-contain
          object-center
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-700
        `}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryImage;