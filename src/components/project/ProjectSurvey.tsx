
import { useState } from "react";
import { Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface SurveyQuestion {
  id: number;
  type: "multiple-choice" | "text";
  question: string;
  options?: string[];
}

interface ProjectSurveyProps {
  survey: {
    title: string;
    questions: SurveyQuestion[];
  };
}

const ProjectSurvey = ({ survey }: ProjectSurveyProps) => {
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const handleMultipleChoiceChange = (questionId: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const handleTextChange = (questionId: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  const handleSubmit = () => {
    // Check if all questions have been answered
    const answered = survey.questions.every(q => responses[q.id]);
    
    if (!answered) {
      toast.error("Please answer all questions before submitting");
      return;
    }
    
    // In a real app, submit to an API
    setSubmitted(true);
    toast.success("Thank you for your feedback!");
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your feedback has been submitted successfully and will help shape this project.
        </p>
        <Button onClick={() => setSubmitted(false)}>
          Submit Another Response
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <MessageSquare className="h-5 w-5 mr-2 text-toronto-600" />
        <h2 className="text-2xl font-semibold">{survey.title}</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Share your feedback on this project by completing the survey below. Your input will help guide future decisions.
      </p>
      
      <div className="space-y-8">
        {survey.questions.map((question) => (
          <div key={question.id} className="border rounded-lg p-5">
            <h3 className="font-medium text-lg mb-3">{question.question}</h3>
            
            {question.type === "multiple-choice" && question.options && (
              <RadioGroup 
                value={responses[question.id]} 
                onValueChange={(value) => handleMultipleChoiceChange(question.id, value)}
              >
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q${question.id}-option${index}`} />
                      <label 
                        htmlFor={`q${question.id}-option${index}`}
                        className="text-gray-700 cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
            
            {question.type === "text" && (
              <Textarea 
                placeholder="Type your answer here..."
                value={responses[question.id] || ""}
                onChange={(e) => handleTextChange(question.id, e.target.value)}
                className="resize-none"
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <Button onClick={handleSubmit}>
          Submit Feedback
        </Button>
      </div>
    </div>
  );
};

export default ProjectSurvey;
