import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pipeline Dashboard', href: '/dashboard' },
  { name: 'Status Update', href: '/status-update' },
];

export default function Sidebar() {
  return (
    <nav className="bg-gray-800 text-white w-64 flex flex-col min-h-screen p-4 hidden md:block">
      <div className="text-xl font-semibold mb-6">Dashboard</div>
      <ul className="space-y-2">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="block rounded px-3 py-2 hover:bg-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
