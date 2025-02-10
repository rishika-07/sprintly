import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
   <div>
    <Input/>
    <Button size="lg">Primary 123</Button>
    <Button variant="destructive">destructive</Button>
    <Button variant="outline">outline</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="muted">muted</Button>
    <Button variant="teritary">teritary</Button>
  </div>
  );
}
