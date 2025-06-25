import { Logo } from "@clico/ui/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col w-full h-screen items-center justify-center gap-6">
      <Logo className="size-16" />
      {children}
    </div>
  );
}
