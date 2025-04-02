
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HelpCircle, ThumbsUp, Flag, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

// Sample questions data
const sampleQuestions = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "SJ",
    date: "2 days ago",
    content: "Will there be accessible ramps at all entrances to the waterfront?",
    likes: 12,
    answered: true,
    answer: {
      author: "Project Team",
      avatar: "PT",
      date: "1 day ago",
      content: "Yes, accessibility is a key priority for this project. All entrances will have accessible ramps that comply with current accessibility standards, and we'll also be adding tactile paving for the visually impaired."
    }
  },
  {
    id: 2,
    author: "David Rodriguez",
    avatar: "DR",
    date: "3 days ago",
    content: "Are there plans to include public restrooms in the design?",
    likes: 8,
    answered: true,
    answer: {
      author: "Project Team",
      avatar: "PT",
      date: "2 days ago",
      content: "Yes, the current design includes two public restroom facilities - one near the main entrance and another by the picnic area. Both will be fully accessible and include changing stations."
    }
  },
  {
    id: 3,
    author: "Emily Taylor",
    avatar: "ET",
    date: "1 week ago",
    content: "What measures are being taken to protect the existing wildlife in the area during construction?",
    likes: 15,
    answered: false
  }
];

interface QuestionProps {
  question: {
    id: number;
    author: string;
    avatar: string;
    date: string;
    content: string;
    likes: number;
    answered: boolean;
    answer?: {
      author: string;
      avatar: string;
      date: string;
      content: string;
    };
  };
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex gap-4">
        <Avatar className="h-10 w-10">
          <AvatarFallback>{question.avatar}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-sm">{question.author}</h4>
              <span className="text-xs text-gray-500">{question.date}</span>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Flag className="h-4 w-4 mr-2" />
                  Report
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <p className="text-sm mt-2 text-gray-700">{question.content}</p>
          
          <div className="flex items-center mt-2">
            <Button variant="ghost" size="sm" className="h-8 text-gray-500">
              <ThumbsUp className="h-4 w-4 mr-1" />
              {question.likes}
            </Button>
          </div>
        </div>
      </div>
      
      {question.answered && question.answer && (
        <div className="flex gap-4 mt-4 ml-12 bg-gray-50 p-4 rounded-lg">
          <Avatar className="h-10 w-10 border-2 border-toronto-100">
            <AvatarFallback className="bg-toronto-100 text-toronto-700">{question.answer.avatar}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div>
              <h4 className="font-medium text-sm text-toronto-700">{question.answer.author}</h4>
              <span className="text-xs text-gray-500">{question.answer.date}</span>
            </div>
            
            <p className="text-sm mt-2 text-gray-700">{question.answer.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface ProjectQAProps {
  projectId: string;
}

const ProjectQA = ({ projectId }: ProjectQAProps) => {
  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState(sampleQuestions);
  
  const handleSubmitQuestion = () => {
    if (questionText.trim()) {
      // In a real app, this would submit to an API
      const newQuestion = {
        id: Date.now(),
        author: "You",
        avatar: "YO",
        date: "Just now",
        content: questionText,
        likes: 0,
        answered: false
      };
      
      setQuestions([newQuestion, ...questions]);
      setQuestionText("");
      toast.success("Your question has been submitted!");
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <Textarea 
          placeholder="Ask a question about this project..."
          className="resize-none" 
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-gray-500">
            Project team members will respond to your question as soon as possible.
          </p>
          <Button 
            onClick={handleSubmitQuestion}
            disabled={!questionText.trim()}
          >
            Submit Question
          </Button>
        </div>
      </div>
      
      <div className="space-y-1">
        {questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline">View More Questions</Button>
      </div>
    </div>
  );
};

export default ProjectQA;
