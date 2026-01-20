import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
      <img
        src={src}
        alt={alt}
        className={`
          h-full w-full object-cover group-hover:object-contain object-center
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-300
        `}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryImage;