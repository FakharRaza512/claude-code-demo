interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function PageSection({ title, description, children }: Props) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {(title || description) && (
        <header className="mb-4 space-y-1">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}