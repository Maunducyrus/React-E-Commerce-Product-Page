// const Navbar = () => <nav>Navbar</nav>;

// export default Navbar;

import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Home' },
  { path: '/wishlist', label: 'Wishlist' },
  { path: '/cart', label: 'Cart' },
  { path: '/checkout', label: 'Checkout' }
];

export default function Navbar() {
  return (
    <nav className="space-x-4">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}