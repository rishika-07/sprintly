import Image from "next/image";
import { Button } from "@/components/ui/button";
interface AuthLayoutProps{
    children:React.ReactNode;
}
const AuthLayout = ({children}:AuthLayoutProps) =>{
    return(
<main className="bg-neutral-100 min-h-screen">
    <div className="mx-auto max-width-screen-2xl p-4">
        <nav className="flex justify-between items-centre">
            <Image src="/logo.svg" width={152} height={56} alt="logo"/>
            <Button variant="secondary">
                Sign-in
            </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
        </div>
    </div>
</main>
    );
}
export default AuthLayout;