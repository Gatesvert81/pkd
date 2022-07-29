import React, { createContext, useEffect, useState } from 'react'
export const NavContext = createContext()
export const ScrollContext = createContext()
export const AnimationContext = createContext()
function Context({ children }) {

    const [page, setPage] = useState("home")
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {

        if (showNav) {
            if (window.innerWidth >= 768) return
            window.document.body.scroll = "no"
            window.document.body.style.overflow = "hidden"
        } else {
            window.document.body.scroll = "yes"
            window.document.body.style.overflow = "scroll"
        }
    }, [showNav])

    const duration = 0.35
    const delay = 0.2

    const textAnimate = {
        initial: { opacity: 0, y: "-10%" },
        whileInView: { opacity: 1, y: "0%" },
        transition: {
            delay,
            default: {
                duration
            }
        }
    }

    const transition = {
        delayChildren: 0.3
    }


    return (
        <NavContext.Provider value={[page, setPage]}>
            <ScrollContext.Provider value={[showNav, setShowNav]}>
                <AnimationContext.Provider value={{
                    textAnimate,
                    duration,
                    delay,
                    transition
                }}>
                    {children}
                </AnimationContext.Provider>
            </ScrollContext.Provider>
        </NavContext.Provider>
    )
}

export default Context



