
import { FileText, Download, ExternalLink, FileCode, FileSpreadsheet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Document {
  title: string;
  type: string;
  size: string;
}

interface ProjectDocumentsProps {
  documents: Document[];
}

const ProjectDocuments = ({ documents }: ProjectDocumentsProps) => {
  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'xlsx':
      case 'xls':
      case 'csv':
        return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
      case 'code':
      case 'json':
        return <FileCode className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <FileText className="h-5 w-5 mr-2 text-toronto-600" />
        <h2 className="text-2xl font-semibold">Project Documents</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Access all project-related documents including reports, plans, and community feedback summaries.
      </p>
      
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              {getFileIcon(doc.type)}
              <div className="ml-3">
                <h4 className="font-medium">{doc.title}</h4>
                <div className="flex items-center mt-1">
                  <Badge variant="outline" className="text-xs mr-2">
                    {doc.type.toUpperCase()}
                  </Badge>
                  <span className="text-xs text-gray-500">{doc.size}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost">
                <ExternalLink className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t pt-6">
        <h3 className="text-lg font-medium mb-2">Request Additional Documents</h3>
        <p className="text-sm text-gray-600 mb-4">
          Can't find what you're looking for? Contact the project team to request additional documentation.
        </p>
        <Button variant="outline">Contact Project Team</Button>
      </div>
    </div>
  );
};

export default ProjectDocuments;
