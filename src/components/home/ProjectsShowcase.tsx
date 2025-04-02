
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, ThumbsUp, Calendar, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Downtown Waterfront Revitalization",
    description: "Transforming the harbor area into a vibrant public space with green infrastructure.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Urban Planning",
    timeline: "2023-2025",
    engagement: {
      comments: 48,
      votes: 152,
      progress: 75
    }
  },
  {
    id: 2,
    title: "Sustainable Transportation Plan",
    description: "Developing a comprehensive strategy for eco-friendly mobility across the city.",
    image: "https://images.unsplash.com/photo-1600320402788-00e447d03d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Infrastructure",
    timeline: "2023-2024",
    engagement: {
      comments: 37,
      votes: 98,
      progress: 60
    }
  },
  {
    id: 3,
    title: "Community Gardens Initiative",
    description: "Creating accessible urban gardens to promote food security and community bonds.",
    image: "https://images.unsplash.com/photo-1605657781760-934c744ccf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Environment",
    timeline: "2024-2026",
    engagement: {
      comments: 29,
      votes: 87,
      progress: 40
    }
  }
];

const ProjectsShowcase = () => {
  return (
    <TooltipProvider>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Discover ongoing urban initiatives and contribute your ideas
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline" className="group transition-all duration-300">
                <Link to="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-toronto-200"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex justify-between items-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-toronto-100 text-toronto-800 rounded-full transition-colors hover:bg-toronto-200">
                      {project.category}
                    </span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center text-sm text-gray-500 cursor-pointer">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{project.timeline}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project timeline</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-toronto-600 transition-colors">{project.title}</h3>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">{project.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                          <div className="flex items-center pt-2">
                            <Info className="h-3 w-3 mr-1 text-toronto-500" />
                            <span className="text-xs text-toronto-600">Click for more details</span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Engagement progress</span>
                      <span>{project.engagement.progress}%</span>
                    </div>
                    <Progress value={project.engagement.progress} className="h-2 transition-all duration-500 hover:h-3" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center cursor-pointer hover:text-toronto-600 transition-colors">
                            <MessageSquare className="mr-1 h-4 w-4" />
                            <span>{project.engagement.comments}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.engagement.comments} comments</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center cursor-pointer hover:text-toronto-600 transition-colors">
                            <ThumbsUp className="mr-1 h-4 w-4" />
                            <span>{project.engagement.votes}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.engagement.votes} votes</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="group">
                      <Link to={`/projects/${project.id}`} className="flex items-center">
                        View Project
                        <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ProjectsShowcase;
