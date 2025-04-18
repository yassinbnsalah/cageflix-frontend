import React from 'react'

function Footer() {
    return (
        <footer className="py-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Cageflix. All Rights Reserved.</p>
                <div className="mt-2 text-sm">
                    <a href="#" className="hover:text-red-500 mx-2">Privacy Policy</a>
                    <a href="#" className="hover:text-red-500 mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
