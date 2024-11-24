import React, { useMemo, useEffect, useState } from "react";
import useMouse from "./useMouse";

export default function useMouseOverZoom(source, target, cursor, radius = 20) {
    const { x, y, isActive } = useMouse(source);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Ensure the image is loaded
    useEffect(() => {
        const image = source?.current;

        if (!image) return;

        const handleLoad = () => {
            setImageLoaded(true);

            // Set target canvas dimensions
            if (target?.current) {
                target.current.width = image.naturalWidth;
                target.current.height = image.naturalHeight;
            }
        };

        if (image.complete) {
            handleLoad();
        } else {
            image.onload = handleLoad;
        }

        return () => {
            image.onload = null;
        };
    }, [source, target]);

    // Compute zoom bounds
    const zoomBounds = useMemo(() => {
        if (!imageLoaded) return { left: 0, top: 0, width: 0, height: 0 };

        return {
            left: x - radius,
            top: y - radius,
            width: radius * 2,
            height: radius * 2,
        };
    }, [x, y, radius, imageLoaded]);

    // Move the cursor to the mouse position
    useEffect(() => {
        if (cursor?.current && imageLoaded) {
            const { left, top, width, height } = zoomBounds;
            cursor.current.style.left = `${left}px`;
            cursor.current.style.top = `${top}px`;
            cursor.current.style.width = `${width}px`;
            cursor.current.style.height = `${height}px`;
            cursor.current.style.display = isActive ? "block" : "none";
        }
    }, [zoomBounds, isActive, cursor, imageLoaded]);

    // Draw the zoomed image on the canvas
    useEffect(() => {
        if (source?.current && target?.current && imageLoaded) {
            const ctx = target.current.getContext("2d");
            if (ctx) {
                if (isActive) {
                    const { left, top, width, height } = zoomBounds;
                    const imageRatio = source.current.naturalWidth / source.current.width;

                    ctx.clearRect(0, 0, target.current.width, target.current.height);
                    ctx.drawImage(
                        source.current,
                        left * imageRatio,
                        top * imageRatio,
                        width * imageRatio,
                        height * imageRatio,
                        0,
                        0,
                        target.current.width,
                        target.current.height
                    );
                } else {
                    ctx.clearRect(0, 0, target.current.width, target.current.height);
                }
            }
        }
    }, [zoomBounds, isActive, source, target, imageLoaded]);

    return { isActive, imageLoaded }; // Return imageLoaded for debugging
}