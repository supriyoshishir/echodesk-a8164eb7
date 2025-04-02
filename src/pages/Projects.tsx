
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MessageSquare, 
  ThumbsUp, 
  Search, 
  Calendar, 
  Filter 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Downtown Waterfront Revitalization",
    description: "Transforming the harbor area into a vibrant public space with green infrastructure.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Urban Planning",
    status: "Active",
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
    status: "Active",
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
    status: "Planning",
    timeline: "2024-2026",
    engagement: {
      comments: 29,
      votes: 87,
      progress: 40
    }
  },
  {
    id: 4,
    title: "Affordable Housing Development",
    description: "Building sustainable, affordable residential units in key neighborhoods.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Housing",
    status: "Active",
    timeline: "2023-2027",
    engagement: {
      comments: 56,
      votes: 122,
      progress: 35
    }
  },
  {
    id: 5,
    title: "Public Library Modernization",
    description: "Upgrading library facilities with new technology and community spaces.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Public Services",
    status: "Completed",
    timeline: "2022-2023",
    engagement: {
      comments: 41,
      votes: 95,
      progress: 100
    }
  },
  {
    id: 6,
    title: "Smart Street Lighting",
    description: "Installing energy-efficient LED lights with smart controls across the city.",
    image: "https://images.unsplash.com/photo-1630837541443-6f146812642d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Infrastructure",
    status: "Active",
    timeline: "2023-2024",
    engagement: {
      comments: 18,
      votes: 63,
      progress: 45
    }
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter projects based on search and filters
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [...new Set(projectsData.map(project => project.category))];
  const statuses = [...new Set(projectsData.map(project => project.status))];

  return (
    <Layout>
      <div className="bg-toronto-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Explore Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and participate in urban initiatives shaping the future of our city
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden animated-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-toronto-100 text-toronto-800 rounded-full">
                      {project.category}
                    </span>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : project.status === "Completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="mt-2">{project.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.timeline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Engagement progress</span>
                      <span>{project.engagement.progress}%</span>
                    </div>
                    <Progress value={project.engagement.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      <span>{project.engagement.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{project.engagement.votes}</span>
                    </div>
                  </div>
                  <Button asChild size="sm">
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500">No projects found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setStatusFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
