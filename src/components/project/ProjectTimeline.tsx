
import { CalendarDays, Circle, Clock } from "lucide-react";

interface TimelineUpdate {
  date: string;
  title: string;
  description: string;
}

interface ProjectTimelineProps {
  updates: TimelineUpdate[];
}

const ProjectTimeline = ({ updates }: ProjectTimelineProps) => {
  // Sort updates by date (newest first)
  const sortedUpdates = [...updates].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <div className="flex items-center mb-6">
        <CalendarDays className="h-5 w-5 mr-2 text-toronto-600" />
        <h2 className="text-2xl font-semibold">Project Timeline</h2>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-toronto-200"></div>
        
        <div className="space-y-8">
          {sortedUpdates.map((update, index) => (
            <div key={index} className="relative flex">
              <div className="absolute left-4 -ml-2 mt-1 w-4 h-4 rounded-full bg-toronto-600 ring-4 ring-white"></div>
              
              <div className="ml-12">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{update.date}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{update.title}</h3>
                <p className="mt-1 text-gray-600">{update.description}</p>
              </div>
            </div>
          ))}
          
          {/* Future milestone */}
          <div className="relative flex">
            <div className="absolute left-4 -ml-2 mt-1 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
            
            <div className="ml-12 opacity-60">
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>Future Milestone</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Project Completion</h3>
              <p className="mt-1 text-gray-600">Expected completion of all project phases and public opening.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
