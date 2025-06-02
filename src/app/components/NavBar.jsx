'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import navbarLogo from "../assests/image/navbarLogo.png";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => pathname === path ? 'text-[#FFDE7C]' : 'text-white';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from the correct endpoint
        const res = await fetch("https://dashboard.bluone.ink/api/public/categories");
        
        if (!res.ok) {
          throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        // Assuming the response is an array of category objects like: [{ id, name, slug }, ...]
        // Update categories state with the fetched data
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Optionally set categories to an empty array or show an error message
        setCategories([]); 
      }
    };
    fetchCategories();
  }, []);

  return (
    <div id="navbar" className="navmain w-full fixed h-[60px] z-[11111]  bg-[#241b6d] bg-no-repeat bg-right bg-contain mx-auto flex justify-between items-center">
      <div className="lg:hidden md:hidden p-5">
        <a href="/">
          <Image src={navbarLogo} alt="Logo" width={0} height={40} />
        </a>
      </div>
      <ul className="hidden mx-auto text-center md:flex space-x-20 navbar items-center">
        <li className={`hover:text-[#FFDE7C] ${isActive('/authors')} `}>
          <a href="/authors"><i className="ifont">Authors</i></a>
        </li>
        <li
          className={`relative group hover:text-[#FFDE7C] ${isActive('/books')}`}
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
        >
          <div className="flex items-center">
            <Link href="/books" className="flex-1"><i className="ifont">Books</i></Link>
            <FaChevronDown className="ml-1 transition-transform duration-300" />
          </div>
          {showSubMenu && categories.length > 0 && (
            <ul className="absolute top-full left-0 w-48 bg-[#241b6d] text-[#fff] shadow-lg mt-0 z-50 rounded-b-md">
              {categories.map((cat) => (
                <li key={cat.id} className="text-sm hover:bg-[#372f87] hover:text-[#FFDE7C] px-4 py-2 text-left font-ibm">
                  <Link href={`/books?category=${cat.slug || cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <a href="/"><Image src={navbarLogo} alt="Logo" width={0} height={40} className="hidden md:block lg:block" /></a>
        </li>
        <li className={`hover:text-[#FFDE7C] ${isActive('/resources')} `}>
          <a href="/resources"><i className="ifont">Resources</i ></a>
        </li>
        <li className={`hover:text-[#FFDE7C] ${isActive('/contact')} `}>
          <a href="/contact"><i className="ifont">Contact</i ></a>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="md:hidden p-5 text-white focus:outline-none"
      >
        {isOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </button>
      {isOpen && (
        <div className="fixed border-t-2 top-14 left-0 w-full bg-[#241b6d] text-white md:hidden">
          <ul className="p-6">
            <li className={isActive('/authors')}>
              <Link href="/authors"><em>Authors</em></Link>
            </li>
            <li>
              <details className="group cursor-pointer">
                <summary className="text-white flex items-center">
                  <em>Books</em>
                  <FaChevronDown className="ml-1 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <ul className="ml-4 mt-2 space-y-1 bg-[#241b6d] text-[#fff] rounded-md">
                  {categories.map((cat) => (
                    <li key={cat.id} className="text-sm hover:bg-[#372f87] hover:text-[#FFDE7C] px-4 py-2 text-left font-ibm">
                      <Link href={`/books?category=${cat.slug}`}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li className={isActive('/resources')}>
              <Link href="/resources"><em>Resources</em></Link>
            </li>
            <li className={isActive('/contact')}>
              <Link href="/contact"><em>Contact</em></Link>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}

export default NavBar;
