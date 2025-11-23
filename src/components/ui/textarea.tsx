import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, asChild, helperText, errorText, invalid, variant, size, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "textarea";
    const isInvalid = invalid || props["aria-invalid"];

    return (
      <div className="grid gap-1.5">
        <Comp
          className={cn(textareaVariants({ variant, size, className }))}
          ref={ref}
          {...props}
          aria-invalid={isInvalid}
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

export { Textarea };
