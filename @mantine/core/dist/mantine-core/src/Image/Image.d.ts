import React from 'react';
import { DefaultProps, MantineNumberSize } from "../../../mantine-theme/src";
interface ImageProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'placeholder'> {
    /** Image src */
    src?: string;
    /** Image alt text, used as title for placeholder if image was not loaded */
    alt?: string;
    /** Image object-fit property */
    fit?: 'contain' | 'cover';
    /** Image width, defaults to 100%, cannot exceed 100% */
    width?: number | string;
    /** Image height, defaults to original image height adjusted to given width */
    height?: number | string;
    /** Predefined border-radius value from theme.radius or number for border-radius in px */
    radius?: MantineNumberSize;
    /** Enable placeholder when image is loading and when image fails to load */
    withPlaceholder?: boolean;
    /** Customize placeholder content */
    placeholder?: React.ReactNode;
    /** Props spread to img element */
    imageProps?: Record<string, any>;
    /** Get root element ref */
    elementRef?: React.ForwardedRef<HTMLDivElement>;
    /** Get image element ref */
    imageRef?: React.ForwardedRef<HTMLImageElement>;
}
export declare function Image({ className, themeOverride, alt, src, fit, width, height, radius, style, imageProps, withPlaceholder, placeholder, imageRef, elementRef, ...others }: ImageProps): JSX.Element;
export declare namespace Image {
    var displayName: string;
}
export {};
//# sourceMappingURL=Image.d.ts.map