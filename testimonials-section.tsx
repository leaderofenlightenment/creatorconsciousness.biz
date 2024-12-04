import { cn } from "@/lib/utils"
import { TestimonialCard } from "./ui/testimonial-card"
import { Highlight } from "./ui/highlight"

const testimonials = [
  {
    name: "Dom Jeswal",
    role: "Writer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-dom-jeswal-sgOgus4x6GqV2mXtbjEUbjmy9dJrmd.jpeg",
    description: (
      <p>
        Most people can only help in 1 area with 1 specific problem - Eric was able to solve 5-6 of my problems! 
        <Highlight>
          He's a tremendously good listener and all round good lad.
        </Highlight>{" "}
        He's funny, and the whole call felt like talking to a bro. None of that try-hard salesy BS that everyone hates.
      </p>
    ),
  },
  {
    name: "Nardus Snyman",
    role: "Networking Strategist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-nardus-snyman%20(2)-bmyJjQL6WlJQj00InzkeA1Vf9xRM0o.png",
    description: (
      <p>
        Eric has been an enormous help on my branding journey. He guided me to network on X, develop my knowledge, and
        <Highlight>
          build my brand from the ground up
        </Highlight>. He laid down the entire roadmap for me to start making money online and serve others with my expertise.
      </p>
    ),
  },
  {
    name: "Marco",
    role: "Multidimensional Self Actualisation Guide",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-marco-0Fglp0YyX3QGyJ07Lkkg1HAbFqhKwd.png",
    description: (
      <p>
        What a pleasure it was working with Eric! This guy knows his stuff.
        <Highlight>
          Seamlessly incorporating metaphysical concepts into practical business insights.
        </Highlight>{" "}
        His listening skills are top tier and this is what makes working with him so rewarding.
      </p>
    ),
  },
  {
    name: "Diana van Zyl",
    role: "Student",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-diana-van-zyl-PEJjdnXaA9U7EB4PoqkjaAKGYDMrY6.jpeg",
    description: (
      <p>
        For me the most valuable was actually just having someone listen to me and want to help me.
        <Highlight>
          I learned more about how important sleep is and different methods of sleeping to increase energy which I still use today.
        </Highlight>{" "}
        I would definitely recommend it to other people.
      </p>
    ),
  },
  {
    name: "Linda Cooper",
    role: "Author, Conscious Guide",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-linda-cooper-8ZvJJXjUA2kv2UGx3eCJLvwOecjBrW.png",
    description: (
      <p>
        What sets Eric apart is his unique combination of creativity, empathy, higher consciousness, and professionalism.
        <Highlight>
          He helped me shape a cohesive narrative that feels deeply personal and resonates with my audience.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Steven H. Levine",
    role: "Founder",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-steven-h-levine%20(1)-nuzrcpPKByEyXYSG8w9OdxEWUyBcup.png",
    description: (
      <p>
        Eric is passionate, knowledgeable, compassionate, and wise beyond his years.
        <Highlight>
          He's got a great soul for service.
        </Highlight>{" "}
        I feel confident in saying that working with him will be one of the best decisions you make today!
      </p>
    ),
  },
  {
    name: "Nik Huno",
    role: "Entrepreneur",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-nik-huno-Sy8UUriZd2sLMmqMFNH1lCMunqgRp4.png",
    description: (
      <p>
        Eric's approach to selling and buying psychology is truly exceptional.
        <Highlight>
          His teachings seamlessly integrate spirituality, esoteric practices, and quantum concepts, providing a holistic approach to personal and professional growth.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Kirk E",
    role: "Client",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-kirk-e-XLeOgFfuQYqUicpPJEUSCPLJEv3txi.png",
    description: (
      <p>
        Eric is a good listener. He listens attentively and is willing to offer his advice.
        <Highlight>
          He remains calm and shares his personal experiences to help you understand the message he's trying to convey.
        </Highlight>{" "}
        He's also very knowledgeable and open.
      </p>
    ),
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
      <div className="container px-4 md:px-6 relative">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <div className="relative mx-auto mt-6 max-w-[100vw] overflow-hidden">
          <div
            className={cn(
              "flex w-full snap-x snap-mandatory flex-row gap-6 overflow-x-auto py-14",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {/* Empty placeholder */}
            <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
            {/* Empty placeholder */}
            <div className="size-72 shrink-0 md:h-60 md:min-w-96"></div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden h-full w-1/5 bg-gradient-to-r from-background md:block"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/5 bg-gradient-to-l from-background md:block"></div>
        </div>
      </div>
    </section>
  )
}

