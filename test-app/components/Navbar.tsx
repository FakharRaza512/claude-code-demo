import Link from 'next/link';

export const Navbar = () => (
  <nav className="bg-white shadow mb-6">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold text-gray-800">
        Task Tracker
      </Link>
    </div>
  </nav>
);
