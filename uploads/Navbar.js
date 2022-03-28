import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"

const Navbar = () => {
    const router = useRouter()

    const [activeLink, setActiveLink] = useState(router.route)
    const links = [
        {
            title: "Daily Events",
            href: "/"
        },
        {
            title: "Suggest an Event",
            href: "/suggest/event"
        }
    ]
    useEffect(() => {
        setActiveLink(window.location.pathname)
    }, [activeLink])

    return <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm shadow">
            <div className="container">
                <a className="d-flex justify-content-center align-content-center navbar-brand" href="https://github.com/MadhavDhall" target="_blank" rel="noreferrer"><Image src="/logo.jpg" alt="Logo" width="40" height="40" /> <span className="my-auto ms-2">Madhav Dhall</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        {
                            links.map((link, key) => {
                                const active = (activeLink === link.href) ? "active" : "";
                                return <li className="nav-item" key={key}>
                                    <Link href={link.href}>
                                        <a className={`nav-link ${active}`}>{link.title}</a>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

const Footer = () => {
    return (
        <>
            <footer className="mt-auto bg-dark text-white p-2 text-center">
                Create and Managed With Hardwork By Madhav Dhall <br />
                ©2020-{(new Date()).getFullYear()} Madhav Dhall
            </footer>
        </>
    )
}

export default Navbar
export { Footer }