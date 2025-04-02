
import { MapPin, Map as MapIcon, Navigation } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ProjectLocationProps {
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  title: string;
}

const ProjectLocation = ({ location, coordinates, title }: ProjectLocationProps) => {
  const [mapUrl, setMapUrl] = useState("");
  
  useEffect(() => {
    // Generate Google Maps embed URL based on coordinates
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBGMiiBtxOGbwBBLXVOK5yhMGbhCuqCVQE&q=${coordinates.lat},${coordinates.lng}&zoom=15`;
    setMapUrl(embedUrl);
  }, [coordinates]);

  const handleOpenDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`, '_blank');
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <MapPin className="h-5 w-5 mr-2 text-toronto-600" />
        <h2 className="text-2xl font-semibold">Project Location</h2>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <p className="text-gray-600 mb-2 md:mb-0">
          This project is located at <span className="font-medium">{location}</span>
        </p>
        <Button variant="outline" size="sm" onClick={handleOpenDirections}>
          <Navigation className="h-4 w-4 mr-2" />
          Get Directions
        </Button>
      </div>
      
      <div className="border rounded-lg overflow-hidden mb-6 h-[400px] w-full">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${title} location`}
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <MapIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">About this Location</h3>
        <p className="text-gray-600">
          The {title} project is situated in {location}, a key area within the city. 
          This location was chosen due to its strategic importance and the potential 
          for urban revitalization. The project will impact the surrounding area by 
          improving infrastructure, creating green spaces, and enhancing accessibility.
        </p>
      </div>
    </div>
  );
};

export default ProjectLocation;
