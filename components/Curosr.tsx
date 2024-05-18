"use client"
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react';

export function Cursor() {

    const CursorSize = 20
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
    const SmoothMouse = {
        x: useSpring(mouse.x ,smoothOptions),
        y: useSpring(mouse.y ,smoothOptions)
    }
    //@ts-ignore
    const  manageMouseMove = (e) => {
        //@ts-ignore
        const { clientX, clientY } = e;
        mouse.x.set(clientX - CursorSize  / 2);
        mouse.y.set(clientY - CursorSize  / 2)

    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () =>  {window.addEventListener("mousemove", manageMouseMove)}
    })
    return <motion.div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute z-30" style={{left: SmoothMouse.x, top:SmoothMouse.y}}>

    </motion.div>
}