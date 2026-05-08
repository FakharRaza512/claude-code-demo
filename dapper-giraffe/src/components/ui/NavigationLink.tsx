import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export default function NavigationLink({ href, children, active = false }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-3 py-2 text-sm font-medium transition-colors ${
        active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}