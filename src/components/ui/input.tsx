import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, asChild, helperText, errorText, invalid, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "input";
    const isInvalid = invalid || props["aria-invalid"];

    return (
      <div className="grid gap-1.5">
        <Comp
          className={cn(inputVariants({ className }))}
          type={type}
          ref={ref}
          aria-invalid={isInvalid}
          {...props}
        />
        {helperText && !isInvalid && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
        {errorText && isInvalid && (
          <p className="text-sm text-destructive">{errorText}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, asChild, helperText, errorText, invalid, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "textarea";
    const isInvalid = invalid || props["aria-invalid"];

    return (
      <div className="grid gap-1.5">
        <Comp
          className={cn(inputVariants({ className }), "min-h-[60px]")}
          ref={ref}
          aria-invalid={isInvalid}
          {...props}
        />
        {helperText && !isInvalid && (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        )}
        {errorText && isInvalid && (
          <p className="text-sm text-destructive">{errorText}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
