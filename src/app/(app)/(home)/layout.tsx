import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-[#F4F4F0]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout