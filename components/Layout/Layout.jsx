import React from 'react'
import Navbar from '../navbar/Navbar'

function Layout({children}) {
    return (
        <>
            <Navbar />
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout
