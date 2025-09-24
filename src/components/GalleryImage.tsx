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
        hover:z-10
      `}
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