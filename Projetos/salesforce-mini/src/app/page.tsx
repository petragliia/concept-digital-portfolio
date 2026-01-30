import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">SalesForce Mini</h1>
      <p className="text-muted-foreground">Clean Code CRM Architecture Demo</p>
      <Link href="/dashboard">
        <Button size="lg">Acessar CRM (Dashboard)</Button>
      </Link>
    </div>
  );
}
