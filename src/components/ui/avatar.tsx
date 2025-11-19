import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        default: "size-10",
        sm: "size-8",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface AvatarProps
  extends React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  status?: "online" | "offline" | "away" | "busy";
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, fallback, status, ...props }, ref) => {
    const Comp = "span";
    const [imageError, setImageError] = React.useState(false);

    React.useEffect(() => {
      setImageError(false);
    }, [src]);

    return (
      <Comp
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            {fallback}
          </span>
        )}
        {status && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute bottom-0 right-0 block size-2.5 rounded-full ring-2 ring-background",
              {
                "bg-green-500": status === "online",
                "bg-red-500": status === "offline",
                "bg-yellow-500": status === "away",
                "bg-orange-500": status === "busy",
              }
            )}
          />
        )}
      </Comp>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
