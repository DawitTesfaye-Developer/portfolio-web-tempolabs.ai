import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    avatarUrl?: string;
    initials?: string;
  };
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const Testimonials = ({
  title = "What People Say",
  subtitle = "Testimonials from clients and colleagues",
  testimonials = [
    {
      id: "1",
      content:
        "Working with John was an absolute pleasure. His technical expertise and attention to detail resulted in a website that exceeded our expectations. He was responsive, professional, and delivered on time.",
      author: {
        name: "Sarah Johnson",
        title: "Marketing Director, TechCorp",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        initials: "SJ",
      },
    },
    {
      id: "2",
      content:
        "John transformed our outdated platform into a modern, user-friendly application. His ability to understand our business needs and translate them into technical solutions was impressive. Highly recommended!",
      author: {
        name: "Michael Chen",
        title: "CEO, StartupX",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        initials: "MC",
      },
    },
    {
      id: "3",
      content:
        "The e-commerce site John built for us has significantly increased our conversion rates. His expertise in both frontend and backend development created a seamless shopping experience for our customers.",
      author: {
        name: "Emily Rodriguez",
        title: "Product Owner, ShopEasy",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        initials: "ER",
      },
    },
  ],
}: TestimonialsProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-primary/40"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>

                  <p className="text-gray-700 mb-6 flex-grow">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-primary/10">
                      <AvatarImage
                        src={testimonial.author.avatarUrl}
                        alt={testimonial.author.name}
                      />
                      <AvatarFallback>
                        {testimonial.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">
                        {testimonial.author.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.author.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
