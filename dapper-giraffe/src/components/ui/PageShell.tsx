interface Props {
  children: React.ReactNode;
}

export default function PageShell({ children }: Props) {
  return <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>;
}