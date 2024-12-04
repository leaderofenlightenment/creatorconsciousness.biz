import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { CheckCircle, PenToolIcon, PaletteIcon, CodeIcon, LayoutIcon, EditIcon, HeadphonesIcon, Music2Icon, BrushIcon, ImageIcon } from 'lucide-react'
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Logo } from "@/components/ui/logo"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FF1493]">
        <Link className="flex items-center justify-center" href="#">
          <Logo className="h-6 w-6 text-black" />
          <span className="ml-2 text-lg font-bold text-black">Creator Consciousness</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#features">
            features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#skills">
            skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#pricing">
            pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <Image
            src="/images/cosmic-structure.png"
            alt="Cosmic structure"
            fill
            className="object-cover absolute inset-0 z-0 blur-2xl"
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="gradient-text">sculpt your imagination into reality</span> with a diverse creative skillset and mindful marketing method
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
                  learn how to channel your multifaceted creative skills into powerful marketing material to monetize your wisdom and boost your business
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-zinc-800/50 text-white border-zinc-700" placeholder="Enter your email" type="email" />
                  <RainbowButton type="submit">
                    get started
                  </RainbowButton>
                </form>
                <p className="text-xs text-zinc-400">subscribe to become the creator of your life, business, and reality for free</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    <span className="gradient-text">master diverse skills</span> to create impactful, multi-dimensional experiences
                  </h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl">
                    leverage a unique blend of creative and technical abilities to transform your ideas into reality and drive business growth
                  </p>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leaderofenlightenment__5712dbf5-06c9-4791-ae01-e81e25d5e4e4-uAtEHhCMO8DnmJZUmAb9Vgy7x9oXUe.png"
                  alt="Cosmic consciousness visualization"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl" />
              </div>
            </div>

            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">multi-dimensional branding</h3>
                  <p className="text-zinc-400">create powerful, authentic brands that resonate across platforms, leveraging web development, graphic design, and digital art skills.</p>
                </div>
              </NeonGradientCard>
              
              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">unity-based marketing</h3>
                  <p className="text-zinc-400">connect with your audience through shared values, universal consciousness principles, and immersive marketing experiences.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">quantum business growth</h3>
                  <p className="text-zinc-400">accelerate your business growth using quantum principles, consciousness-based strategies, and holistic content creation.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">emotional intelligence mastery</h3>
                  <p className="text-zinc-400">develop advanced emotional awareness and regulation for peak performance, enhanced by immersive audio-visual experiences.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">digital consciousness integration</h3>
                  <p className="text-zinc-400">blend spiritual awareness with digital expertise for holistic success, creating conscious digital ecosystems.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">quantum wealth creation</h3>
                  <p className="text-zinc-400">master the art of conscious wealth generation and abundance manifestation through multi-faceted creative strategies.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">ai-enhanced creativity</h3>
                  <p className="text-zinc-400">harness AI tools and cutting-edge web development techniques to amplify your creative potential and productivity.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">consciousness expansion</h3>
                  <p className="text-zinc-400">access higher states of awareness for enhanced problem-solving and creativity, supported by immersive digital experiences.</p>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">energy optimization</h3>
                  <p className="text-zinc-400">master techniques for maintaining peak energy and vitality in all areas of life, enhanced by custom sound design and visual art.</p>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
          <div className="container px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              transform your <span className="gradient-text">consciousness and business</span> with our holistic approach
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">consciousness catalyst</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      comprehensive ebook/audiobook
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      mindfulness practices guide
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                      custom meditation audio track
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$97</p>
                  <RainbowButton>elevate your consciousness</RainbowButton>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">business transformation</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      immersive brand experience design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      multi-platform content strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                      quantum business growth plan
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$2,997</p>
                  <RainbowButton>transform your business</RainbowButton>
                </div>
              </NeonGradientCard>

              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-4">creator consciousness mastery</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      3-month personal coaching program
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      full-spectrum digital transformation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                      custom creative asset development
                    </li>
                  </ul>
                  <p className="text-3xl font-bold mb-6">$9,997</p>
                  <RainbowButton>master creator consciousness</RainbowButton>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50 backdrop-blur-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />
          <div className="container px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              our <span className="gradient-text">creative arsenal</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="flex flex-col h-full items-center text-center">
                  <CodeIcon className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2">web development</h3>
                  <p className="text-zinc-400">
                    Craft responsive, dynamic websites that serve as the foundation of your digital presence.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="flex flex-col h-full items-center text-center">
                  <LayoutIcon className="h-12 w-12 mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-2">landing page design</h3>
                  <p className="text-zinc-400">
                    Create high-converting landing pages that turn visitors into loyal customers.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="flex flex-col h-full items-center text-center">
                  <EditIcon className="h-12 w-12 mb-4 text-teal-400" />
                  <h3 className="text-2xl font-bold mb-2">ghostwriting</h3>
                  <p className="text-zinc-400">
                    Develop compelling content that resonates with your audience and establishes your authority.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="flex flex-col h-full items-center text-center">
                  <HeadphonesIcon className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2">sound design</h3>
                  <p className="text-zinc-400">
                    Enhance your brand's auditory identity with custom sound design for various media.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="flex flex-col h-full items-center text-center">
                  <Music2Icon className="h-12 w-12 mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-2">DJ mixing</h3>
                  <p className="text-zinc-400">
                    Create unforgettable musical experiences for events and brand activations.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-teal-500 via-cyan-300 to-blue-500">
                <div className="flex flex-col h-full items-center text-center">
                  <BrushIcon className="h-12 w-12 mb-4 text-teal-400" />
                  <h3 className="text-2xl font-bold mb-2">graphic design</h3>
                  <p className="text-zinc-400">
                    Develop visually stunning designs that communicate your brand's essence across all mediums.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-blue-500 via-cyan-300 to-teal-500">
                <div className="flex flex-col h-full items-center text-center">
                  <ImageIcon className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-2">digital art</h3>
                  <p className="text-zinc-400">
                    Produce captivating digital artwork that elevates your brand's visual storytelling.
                  </p>
                </div>
              </NeonGradientCard>
              <NeonGradientCard glowColor="from-purple-500 via-pink-500 to-red-500">
                <div className="flex flex-col h-full items-center text-center">
                  <PenToolIcon className="h-12 w-12 mb-4 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-2">animations</h3>
                  <p className="text-zinc-400">
                    Bring your ideas to life with dynamic animations that engage and inspire your audience.
                  </p>
                </div>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <Image
            src="/images/cosmic-consciousness.png"
            alt="Cosmic consciousness"
            fill
            className="object-cover absolute inset-0 z-0 blur-2xl"
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ready to <span className="gradient-text">transform</span> your business?
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl">
                  leverage our diverse skill set to create a powerful, multi-dimensional brand experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-zinc-800/50 text-white border-zinc-700" placeholder="Enter your email" type="email" />
                  <RainbowButton type="submit">
                    get started
                  </RainbowButton>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-700">
        <p className="text-xs text-zinc-400">© 2023 creator consciousness. all rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">
            terms of service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-zinc-400" href="#">
            privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

