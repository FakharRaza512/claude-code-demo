interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex-1 container mx-auto px-4 py-6">
      {children}
    </main>
  );
}