"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: number;
    src?: string;
    alt?: string;
    fallbackSrc?: string;
    fallbackAlt?: string;
    fallbackIcon?: React.ReactNode;
    fallbackIconSize?: number;
}
>(({ className, size = 24, src, alt, fallbackSrc, fallbackAlt, fallbackIcon, fallbackIconSize = 24, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn('relative flex items-center justify-center rounded-full', className)}
        style={{ height: size, width: size }}
        {...props}
    >
        {src ? (
            <AvatarImage
                className="object-contain h-[100px] w-[100px] rounded-[35px] border"
                src={src}
                alt={alt}
            />
        ) : (
            <AvatarFallback
                className="flex items-center justify-center h-full w-full rounded-full bg-muted"
            >
                {fallbackIcon ? (
                    React.cloneElement(fallbackIcon, { size: fallbackIconSize })
                ) : (
                    fallbackSrc ? (
                        <AvatarImage
                            src={fallbackSrc}
                            alt={fallbackAlt}
                            className="object-cover h-full w-full"
                        />
                    ) : (
                        <span>{fallbackAlt}</span>
                    )
                )}
            </AvatarFallback>
        )}
    </AvatarPrimitive.Root>
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-100px w-100px rounded-full", className)}
        {...props}
    />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn("flex items-center justify-center h-full w-full rounded-full bg-muted", className)}
        {...props}
    />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };