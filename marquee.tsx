import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

export interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  fade?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  vertical,
  fade,
  style,
  children,
}: MarqueeProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isResumed, setIsResumed] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElement = containerRef.current
    const innerElement = innerRef.current
    if (!containerElement || !innerElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting)
        })
      },
      { threshold: 0 }
    )

    observer.observe(containerElement)

    return () => {
      observer.unobserve(containerElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("flex overflow-hidden", className)}
      style={{
        maskImage: fade
          ? "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)"
          : undefined,
        WebkitMaskImage: fade
          ? "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)"
          : undefined,
        ...style,
      }}
      onMouseEnter={() => {
        if (pauseOnHover) {
          setIsHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (pauseOnHover) {
          setIsHovered(false)
          setIsResumed(true)
        }
      }}
    >
      <div
        ref={innerRef}
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)] [--gap:1rem] [--duration:40s]",
          {
            "flex-col": vertical,
            "animate-marquee": !reverse && !vertical,
            "animate-marquee-reverse": reverse && !vertical,
            "animate-marquee-vertical": !reverse && vertical,
            "animate-marquee-reverse-vertical": reverse && vertical,
            "motion-reduce:animate-none": true,
            "[animation-play-state:paused]":
              (isHovered && !isResumed) || !isInViewport,
          }
        )}
        style={{
          ...style,
          animationDuration: "var(--duration)",
          animationDelay: isResumed ? "-0.52s" : "0s",
        }}
        onAnimationIteration={() => {
          setIsResumed(false)
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)] [--gap:1rem] [--duration:40s]",
          {
            "flex-col": vertical,
            "animate-marquee": !reverse && !vertical,
            "animate-marquee-reverse": reverse && !vertical,
            "animate-marquee-vertical": !reverse && vertical,
            "animate-marquee-reverse-vertical": reverse && vertical,
            "motion-reduce:animate-none": true,
            "[animation-play-state:paused]":
              (isHovered && !isResumed) || !isInViewport,
          }
        )}
        style={{
          ...style,
          animationDuration: "var(--duration)",
          animationDelay: isResumed ? "-0.52s" : "0s",
        }}
        onAnimationIteration={() => {
          setIsResumed(false)
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Marquee

