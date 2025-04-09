import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "EchoDesk transformed how we interact with our residents. The platform helped us collect valuable feedback that shaped our downtown revitalization project.",
    author: "Sarah Johnson",
    title: "Urban Planning Director, City of Vancouver"
  },
  {
    quote: "The data analytics tools provided incredible insights that guided our policy decisions. We saw a 64% increase in community participation compared to our previous methods.",
    author: "Michael Chen",
    title: "Community Engagement Manager, Montreal"
  },
  {
    quote: "Setting up our engagement hub was surprisingly easy. Within days, we had our first project running and citizens were actively participating and sharing ideas.",
    author: "David Rodriguez",
    title: "Digital Services Lead, Calgary"
  },
  {
    quote: "The interactive mapping feature helped us visualize exactly where citizens wanted improvements, allowing us to allocate resources more effectively.",
    author: "Emily Nguyen",
    title: "Project Coordinator, Ottawa"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-toronto-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Municipal Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from cities transforming their public engagement
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-10">
                    <Quote className="h-12 w-12 text-toronto-200 mb-6" />
                    <p className="text-xl md:text-2xl mb-8 text-gray-700 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
