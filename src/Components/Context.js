import React, { createContext, useEffect, useState } from 'react'

export const NavContext = createContext()
export const ScrollContext = createContext()
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
    

    return (
        <NavContext.Provider value={[page, setPage]}>
            <ScrollContext.Provider value={[showNav, setShowNav]}>
                {children}
            </ScrollContext.Provider>
        </NavContext.Provider>
    )
}

export default Context