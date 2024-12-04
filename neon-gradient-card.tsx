import { cn } from "@/lib/utils"
import React from "react"

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  children: React.ReactNode
}

export function NeonGradientCard({
  glowColor = "from-teal-500 via-cyan-300 to-blue-500",
  className,
  children,
  ...props
}: NeonGradientCardProps) {
  return (
    <div
      className={cn(
        "relative group rounded-xl hover-elevate",
        "before:absolute before:-inset-[1px] before:bg-gradient-to-r",
        "before:rounded-xl before:z-0",
        glowColor,
        "after:absolute after:inset-0 after:bg-black after:rounded-xl after:z-10",
        "hover:before:opacity-100 hover:after:opacity-90",
        "before:opacity-50 after:opacity-95",
        "before:transition-opacity after:transition-opacity",
        "before:blur-xl after:blur-none",
        "shadow-2xl shadow-black/5",
        className
      )}
      {...props}
    >
      <div className="relative z-20 p-6 h-full backdrop-blur-sm">
        {children}
      </div>
    </div>
  )
}

