import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded="false"
                        >

                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className="block size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>

                            <svg
                                className="hidden size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center mt-2 justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                className="h-15 w-auto"
                                src="/logo.png"
                                alt="Cageflix Logo"
                            />
                        </div>
                        <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Link
                                href="/"
                                className="rounded-md bg-dark-900 px-3 pt-5 text-sm font-medium text-white"
                                aria-current="page"
                            >
                                My List
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            {menuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link
                            href="/"
                            className="block rounded-md bg-dark-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            My List
                        </Link>

                    </div>
                </div>)}
        </nav>

    )
}

export default Navbar