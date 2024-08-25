import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label";
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex w-full h-12 rounded-lg border bg-white px-3 pt-6 pb-2 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:ring-inset outline-none disabled:cursor-not-allowed disabled:opacity-50 peer",
  {
    variants: {
      variant: {
        default: "border-neutral-300 text-black focus:border-primary",
        destructive: "border-destructive text-destructive focus:border-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, variant, ...props }, ref) => {
    return (
      <div className="relative flex flex-col w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ variant, className }),
          )}
          ref={ref}
          {...props}
          placeholder=""
        />
        <Label
          className={cn(
            "absolute left-3 top-1 text-xs text-neutral-400 transition-all duration-300 transform peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:top-1 peer-focus:text-xs pointer-events-none",
          )}
        >
          {placeholder}
        </Label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
