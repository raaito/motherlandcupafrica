import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    className={cn(
                        "flex min-h-[120px] w-full rounded-md border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500",
                        "focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "transition-colors duration-200 resize-y",
                        error ? "border-red-500" : "border-white/10",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
