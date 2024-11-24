import React, { useEffect, useState } from "react";

export default function useMouse(ref) {
    const [mouse, setMouse] = useState({ x: 0, y: 0, isActive: false });

    useEffect(() => {
        const element = ref?.current;

        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            setMouse({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                isActive: true,
            });
        };

        const handleMouseOut = () => {
            setMouse({ x: 0, y: 0, isActive: false });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseout", handleMouseOut);

        return () => {
            // Cleanup safely
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseout", handleMouseOut);
        };
    }, [ref]);

    return mouse;
}
