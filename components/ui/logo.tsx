import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark"
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
  xl: "h-12 w-12",
}

export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  return (
    <div className={cn(sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9DB" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={variant === "light" ? "rgba(255,255,255,0.1)" : "url(#logoGradient)"}
          stroke={variant === "light" ? "rgba(255,255,255,0.3)" : "none"}
          strokeWidth="2"
        />
        <path
          d="M30 35 L50 25 L70 35 L70 55 L50 65 L30 55 Z"
          fill={variant === "light" ? "white" : "white"}
          fillOpacity={variant === "light" ? "0.9" : "1"}
        />
        <circle cx="50" cy="45" r="8" fill={variant === "light" ? "rgba(255,255,255,0.2)" : "#00C9DB"} />
      </svg>
    </div>
  )
}
