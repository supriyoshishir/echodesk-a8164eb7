
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, Reply, Flag, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "SJ",
    date: "2 days ago",
    content: "I'm excited to see the new waterfront designs! I especially like the inclusion of more green spaces and the focus on accessibility.",
    likes: 12,
    replies: [
      {
        id: 101,
        author: "Michael Chen",
        avatar: "MC",
        date: "1 day ago",
        content: "I agree! The additional bike paths will make it much easier to commute through this area as well.",
        likes: 5
      }
    ]
  },
  {
    id: 2,
    author: "David Rodriguez",
    avatar: "DR",
    date: "3 days ago",
    content: "Will there be dedicated spaces for community events and farmers markets? This would really enhance the community aspect of the waterfront.",
    likes: 8,
    replies: []
  },
  {
    id: 3,
    author: "Emily Taylor",
    avatar: "ET",
    date: "1 week ago",
    content: "I'm concerned about parking availability. With increased visitors to the waterfront, where will people park? Has this been considered in the plan?",
    likes: 15,
    replies: [
      {
        id: 201,
        author: "Tom Wilson",
        avatar: "TW",
        date: "6 days ago",
        content: "Good point. I think there's a plan for an underground parking structure mentioned in one of the documents.",
        likes: 3
      },
      {
        id: 202,
        author: "Jane Smith",
        avatar: "JS",
        date: "5 days ago",
        content: "I would love to see more emphasis on public transit access instead of adding more parking. Let's encourage sustainable transportation!",
        likes: 9
      }
    ]
  }
];

interface CommentProps {
  comment: {
    id: number;
    author: string;
    avatar: string;
    date: string;
    content: string;
    likes: number;
    replies?: CommentProps["comment"][];
  };
  isReply?: boolean;
}

const Comment = ({ comment, isReply = false }: CommentProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  
  return (
    <div className={`flex gap-4 ${isReply ? 'ml-12 mt-4' : 'border-b pb-4 mb-4'}`}>
      <Avatar className="h-10 w-10">
        <AvatarFallback>{comment.avatar}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-sm">{comment.author}</h4>
            <span className="text-xs text-gray-500">{comment.date}</span>
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
        
        <p className="text-sm mt-2 text-gray-700">{comment.content}</p>
        
        <div className="flex items-center mt-2 space-x-4">
          <Button variant="ghost" size="sm" className="h-8 text-gray-500">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {comment.likes}
          </Button>
          
          {!isReply && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-gray-500"
              onClick={() => setShowReplyForm(!showReplyForm)}
            >
              <Reply className="h-4 w-4 mr-1" />
              Reply
            </Button>
          )}
        </div>
        
        {showReplyForm && (
          <div className="mt-3">
            <Textarea 
              placeholder="Write a reply..."
              className="resize-none text-sm" 
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex justify-end mt-2 space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setShowReplyForm(false);
                  setReplyText("");
                }}
              >
                Cancel
              </Button>
              <Button 
                size="sm"
                onClick={() => {
                  // In a real app, this would submit the reply
                  setShowReplyForm(false);
                  setReplyText("");
                }}
              >
                Post Reply
              </Button>
            </div>
          </div>
        )}
        
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-3">
            {comment.replies.map(reply => (
              <Comment key={reply.id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface ProjectCommentsProps {
  projectId: string;
}

const ProjectComments = ({ projectId }: ProjectCommentsProps) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(sampleComments);
  
  const handleSubmitComment = () => {
    if (commentText.trim()) {
      // In a real app, this would submit to an API
      const newComment = {
        id: Date.now(),
        author: "You",
        avatar: "YO",
        date: "Just now",
        content: commentText,
        likes: 0,
        replies: []
      };
      
      setComments([newComment, ...comments]);
      setCommentText("");
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <Textarea 
          placeholder="Share your thoughts on this project..."
          className="resize-none" 
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-gray-500">
            Be respectful and constructive in your comments.
          </p>
          <Button 
            onClick={handleSubmitComment}
            disabled={!commentText.trim()}
          >
            Post Comment
          </Button>
        </div>
      </div>
      
      <div className="space-y-1">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline">Load More Comments</Button>
      </div>
    </div>
  );
};

export default ProjectComments;
