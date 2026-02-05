import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import { withBase } from '../../utils/assets'

export default function Navbar({ onSearch, query }) {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-40 bg-transparent backdrop-blur-sm py-3 md:py-4">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2 order-1">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src={withBase('logo-symbol.svg')}
              alt="logo"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="text-2xl font-extrabold text-white">PunjabUpSkill</div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto order-2 md:order-3">
          <SearchBar onSearch={onSearch} value={query} />
        </div>

        <nav className="flex flex-wrap items-center gap-2 order-3 md:order-2">
          <Link to="/" className={`px-4 py-2 rounded-full ${loc.pathname==='/'? 'bg-gray-800':'bg-gray-800/30'}`}>Home</Link>
          <Link to="/courses" className={`px-4 py-2 rounded-full ${loc.pathname==='/courses'? 'bg-gray-800':'bg-gray-800/30'}`}>All Courses</Link>
          <Link to="/contact" className={`px-4 py-2 rounded-full ${loc.pathname==='/contact'? 'bg-gray-800':'bg-gray-800/30'}`}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
