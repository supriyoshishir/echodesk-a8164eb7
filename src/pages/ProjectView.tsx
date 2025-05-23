import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Calendar, 
  MapPin, 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  FileText, 
  Image, 
  PieChart,
  ArrowLeft,
  HelpCircle,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  Map
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ProjectQA from "@/components/project/ProjectQA";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import ProjectDocuments from "@/components/project/ProjectDocuments";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectSurvey from "@/components/project/ProjectSurvey";
import ProjectLocation from "@/components/project/ProjectLocation";
import { toast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Import the SurveyQuestion type to ensure consistency
import type { SurveyQuestion } from "@/components/project/ProjectSurvey";

// Sample project data (in a real app, this would come from an API)
const projectsData = [
  {
    id: "1",
    title: "Downtown Waterfront Revitalization",
    description: "Transforming the harbor area into a vibrant public space with green infrastructure, recreational facilities, and improved public access to the waterfront. This project aims to create a sustainable urban environment that enhances the quality of life for residents and visitors while preserving the natural beauty of the waterfront.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Urban Planning",
    status: "Active",
    location: "Downtown Harbor District",
    mapCoordinates: { lat: 43.6532, lng: -79.3832 }, // Adding map coordinates for Toronto harbor area
    timeline: "2023-2025",
    coordinator: "Urban Development Department",
    budget: "$24.5 million",
    engagement: {
      comments: 48,
      votes: 152,
      progress: 75,
      participants: 235
    },
    updates: [
      {
        date: "June 15, 2023",
        title: "Project Kickoff",
        description: "Initial community consultation and design review completed."
      },
      {
        date: "September 5, 2023",
        title: "Design Phase Completed",
        description: "Final architectural plans approved by the city council."
      },
      {
        date: "January 20, 2024",
        title: "Construction Begins",
        description: "Ground-breaking ceremony held with city officials and community representatives."
      }
    ],
    documents: [
      { title: "Environmental Impact Assessment", type: "pdf", size: "3.2 MB" },
      { title: "Architectural Plans", type: "pdf", size: "8.5 MB" },
      { title: "Budget Breakdown", type: "xlsx", size: "1.4 MB" },
      { title: "Community Feedback Summary", type: "pdf", size: "2.1 MB" }
    ],
    gallery: [
      { title: "Current Waterfront", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
      { title: "Design Concept 1", image: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
      { title: "Community Workshop", image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" },
      { title: "Site Preparation", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
    ],
    survey: {
      title: "Waterfront Features Survey",
      questions: [
        { 
          id: 1, 
          type: "multiple-choice" as const,
          question: "Which recreational feature would you most like to see added to the waterfront?",
          options: ["Playground", "Walking trails", "Outdoor fitness area", "Water sports facilities"]
        },
        { 
          id: 2, 
          type: "multiple-choice" as const,
          question: "How often do you currently visit the waterfront area?",
          options: ["Daily", "Weekly", "Monthly", "Rarely or never"]
        },
        { 
          id: 3, 
          type: "text" as const,
          question: "What specific improvements would make the waterfront more accessible to you?"
        }
      ]
    }
  },
  // Other projects would be here
];

const ProjectView = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find the project by ID
  const project = projectsData.find((p) => p.id === id);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-64 w-full mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-96 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/projects">Return to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Share project functionality
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = project.title;
    const description = project.description.substring(0, 100) + "...";
    
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          toast({
            title: "Link Copied",
            description: "Project link has been copied to clipboard",
            duration: 3000,
          });
        });
        return;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Layout>
      <div className="bg-toronto-50">
        {/* Project hero section */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <div>
              <div className="flex space-x-2 mb-4">
                <Badge className="bg-toronto-100 text-toronto-800 hover:bg-toronto-200">
                  {project.category}
                </Badge>
                <Badge className={`${
                  project.status === "Active" 
                    ? "bg-green-100 text-green-800 hover:bg-green-200" 
                    : project.status === "Completed"
                    ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }`}>
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <div className="flex items-center text-white/90 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{project.timeline}</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          {/* Back button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/projects" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm mb-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none px-4 h-12">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="timeline" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Timeline
                    </TabsTrigger>
                    <TabsTrigger value="documents" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Documents
                    </TabsTrigger>
                    <TabsTrigger value="location" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Location
                    </TabsTrigger>
                    <TabsTrigger value="gallery" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Gallery
                    </TabsTrigger>
                    <TabsTrigger value="survey" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-toronto-600 rounded-none h-11">
                      Feedback
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-700 mb-2">Project Details</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-gray-500">Timeline:</span>
                            <span className="font-medium">{project.timeline}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Location:</span>
                            <span className="font-medium">{project.location}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Status:</span>
                            <span className="font-medium">{project.status}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Budget:</span>
                            <span className="font-medium">{project.budget}</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium text-gray-700 mb-2">Project Management</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-gray-500">Coordinated by:</span>
                            <span className="font-medium">{project.coordinator}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Last Updated:</span>
                            <span className="font-medium">{project.updates[project.updates.length - 1].date}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Documents:</span>
                            <span className="font-medium">{project.documents.length} files</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-500">Media:</span>
                            <span className="font-medium">{project.gallery.length} photos</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
                    <div className="space-y-4">
                      {project.updates.slice().reverse().map((update, index) => (
                        <div key={index} className="border-l-2 border-toronto-200 pl-4 pb-4">
                          <span className="text-sm text-gray-500">{update.date}</span>
                          <h4 className="font-medium text-gray-800 mt-1">{update.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="timeline" className="p-6">
                    <ProjectTimeline updates={project.updates} />
                  </TabsContent>
                  
                  <TabsContent value="documents" className="p-6">
                    <ProjectDocuments documents={project.documents} />
                  </TabsContent>
                  
                  <TabsContent value="location" className="p-6">
                    <ProjectLocation 
                      location={project.location} 
                      coordinates={project.mapCoordinates} 
                      title={project.title}
                    />
                  </TabsContent>
                  
                  <TabsContent value="gallery" className="p-6">
                    <ProjectGallery gallery={project.gallery} />
                  </TabsContent>
                  
                  <TabsContent value="survey" className="p-6">
                    <ProjectSurvey survey={project.survey} />
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Questions & Answers section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2 text-toronto-600" />
                  Questions & Answers
                </h2>
                <ProjectQA projectId={project.id} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <Button className="w-full">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Support This Project
                  </Button>
                  <Button variant="outline" className="w-full">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Ask a Question
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Project
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <TooltipProvider>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare("facebook")}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center w-full">
                                <Facebook className="h-4 w-4 mr-2 text-[#1877F2]" />
                                Share on Facebook
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Share this project on Facebook</p>
                            </TooltipContent>
                          </Tooltip>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare("twitter")}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center w-full">
                                <Twitter className="h-4 w-4 mr-2 text-[#1DA1F2]" />
                                Share on X
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Share this project on X (formerly Twitter)</p>
                            </TooltipContent>
                          </Tooltip>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare("linkedin")}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center w-full">
                                <Linkedin className="h-4 w-4 mr-2 text-[#0A66C2]" />
                                Share on LinkedIn
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Share this project on LinkedIn</p>
                            </TooltipContent>
                          </Tooltip>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare("email")}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center w-full">
                                <Mail className="h-4 w-4 mr-2 text-gray-600" />
                                Share via Email
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Share this project via email</p>
                            </TooltipContent>
                          </Tooltip>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare("copy")}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="flex items-center w-full">
                                <Copy className="h-4 w-4 mr-2 text-gray-600" />
                                Copy Link
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Copy project link to clipboard</p>
                            </TooltipContent>
                          </Tooltip>
                        </DropdownMenuItem>
                      </TooltipProvider>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Subscribe for Updates</h4>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                    <Button type="submit" size="sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectView;
