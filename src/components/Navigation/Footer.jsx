// const Footer = () => <footer>Footer</footer>;

// export default Footer;

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 py-6">
      <div className="max-w-7xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}