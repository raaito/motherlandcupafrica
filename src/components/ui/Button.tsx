import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "ghost" | "outline"
    size?: "sm" | "md" | "lg"
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, isLoading, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        const variants = {
            primary: "bg-gradient-cta text-black font-bold hover:brightness-110 shadow-lg hover:shadow-gold-500/20 border-none",
            secondary: "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10",
            ghost: "bg-transparent text-white hover:text-gold-500 underline-offset-4 hover:underline",
            outline: "bg-transparent border border-white text-white hover:bg-white/10"
        }

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg"
        }

        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95 hover:scale-105 font-display tracking-wide uppercase cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button }
