import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="border-b">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Logo />
          <div className="flex items-center gap-4">
            <Button variant="link">Dashboard</Button>
            <UserButton />
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  );
}

export default Layout;
