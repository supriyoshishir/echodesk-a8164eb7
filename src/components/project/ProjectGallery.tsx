
import { useState } from "react";
import { Image, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  title: string;
  image: string;
}

interface ProjectGalleryProps {
  gallery: GalleryItem[];
}

const ProjectGallery = ({ gallery }: ProjectGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Image className="h-5 w-5 mr-2 text-toronto-600" />
        <h2 className="text-2xl font-semibold">Project Gallery</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        View images of the project area, design concepts, and progress photos.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {gallery.map((item, index) => (
          <div 
            key={index} 
            className="cursor-pointer rounded-lg overflow-hidden group relative"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-end">
              <div className="p-4 w-full text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                <h3 className="font-medium text-lg drop-shadow-md">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 text-white z-10"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="relative">
              <img 
                src={gallery[currentImageIndex].image} 
                alt={gallery[currentImageIndex].title} 
                className="max-h-[80vh] mx-auto rounded-lg"
              />
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            
            <div className="text-center text-white mt-4">
              <h3 className="text-xl font-medium">
                {gallery[currentImageIndex].title}
              </h3>
              <p className="text-gray-300 mt-1">
                {currentImageIndex + 1} of {gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
