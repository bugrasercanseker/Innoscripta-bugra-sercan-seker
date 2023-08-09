import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Fetch categories from the API
        fetch('http://innoscripta-challenge-backend.test/api/categories')
            .then(response => response.json())
            .then(data => {
                if (data.status === "success" && data.data) {
                    setCategories(data.data);
                } else {
                    console.error('Error fetching categories:', data.message);
                }
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className="bg-sky-950 py-4 px-4 md:px-0">
                <nav className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-xl font-bold">Inno News</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-white hover:underline">Home</Link>
                        {categories.map(category => (
                            <Link key={category.id} to={`/category/${category.slug}`} className="text-white hover:underline">
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            className="text-white hover:text-gray-300"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="bg-sky-950 py-2">
                            <Link
                                to={'/'}
                                className="block text-white px-4 py-2 hover:bg-sky-800"
                            >
                                Home
                            </Link>
                            {categories.map(category => (
                                <Link
                                    key={category.id}
                                    to={`/category/${category.slug}`}
                                    className="block text-white px-4 py-2 hover:bg-sky-800"
                                >
                                    {category.name}
                                </Link>
                            ))}
                            {/* ... other mobile menu items ... */}
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header;