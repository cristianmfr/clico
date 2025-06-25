export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col w-full h-screen items-center justify-center gap-4">
      {children}
    </div>
  );
}
