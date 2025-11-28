import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    error?: string
    options: { label: string; value: string }[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, error, options, ...props }, ref) => {
        return (
            <div className="w-full relative">
                <select
                    className={cn(
                        "flex h-11 w-full appearance-none rounded-md border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500",
                        "focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        "transition-colors duration-200",
                        error ? "border-red-500" : "border-white/10",
                        className
                    )}
                    ref={ref}
                    defaultValue=""
                    {...props}
                >
                    <option value="" disabled className="bg-gray-900 text-gray-500">
                        Select an option
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-900 text-white">
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        )
    }
)
Select.displayName = "Select"

export { Select }
