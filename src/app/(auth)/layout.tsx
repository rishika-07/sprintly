"use client"


import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
interface AuthLayoutProps{
    children:React.ReactNode;
}
const AuthLayout = ({children}:AuthLayoutProps) =>{
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return(
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-width-screen-2xl p-4">
                <nav className="flex justify-between items-centre">
                    <Image src="/logo.svg" width={152} height={56} alt="logo"/>
                    <Button asChild variant="secondary">              
                         {/* asChild makes the button element itself an anchor as its not a good practice to add anchor in buuton */}
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>                                                                  
                            {isSignIn? "sign-up" : "Login"}
                        </Link>
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