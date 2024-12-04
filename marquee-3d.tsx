import Marquee from "@/components/magicui/marquee";

const testimonials = [
  {
    name: "Dom Jeswal",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-dom-jeswal-sgOgus4x6GqV2mXtbjEUbjmy9dJrmd.jpeg",
  },
  {
    name: "Nardus Snyman",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-nardus-snyman%20(2)-bmyJjQL6WlJQj00InzkeA1Vf9xRM0o.png",
  },
  {
    name: "Marco",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-marco-0Fglp0YyX3QGyJ07Lkkg1HAbFqhKwd.png",
  },
  {
    name: "Diana van Zyl",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-diana-van-zyl-PEJjdnXaA9U7EB4PoqkjaAKGYDMrY6.jpeg",
  },
  {
    name: "Linda Cooper",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-linda-cooper-8ZvJJXjUA2kv2UGx3eCJLvwOecjBrW.png",
  },
  {
    name: "Steven H. Levine",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-steven-h-levine%20(1)-nuzrcpPKByEyXYSG8w9OdxEWUyBcup.png",
  },
  {
    name: "Nik Huno",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-nik-huno-Sy8UUriZd2sLMmqMFNH1lCMunqgRp4.png",
  },
  {
    name: "Kirk E",
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/review-by-kirk-e-XLeOgFfuQYqUicpPJEUSCPLJEv3txi.png",
  },
];

export function Marquee3D() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {testimonials.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

