import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card,CardContent,CardTitle,CardHeader,CardDescription} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {FcGoogle } from "react-icons/fc";
import {FaGithub } from "react-icons/fa";


export const SignUpCard = ()=>{
    return(
        <Card className=" md:w-[487] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up 
                </CardTitle>
                <CardDescription className="p-3">
                    by signing up,you agree to our {""}
                    <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy</span>
                    </Link>{""} 
                    and <Link href="/terms">
                        <span className="text-blue-700">terms of service</span>
                    </Link>
                </CardDescription>
                <div className="px-7">
                <Separator/>
                </div>
                <CardContent className="p-7">
                    <form className="space-y-4">
                    <Input
                        required
                        type="text"
                        value={""}
                        onChange={()=>{}}
                        placeholder="enter your name"
                        disabled={false}
                        />
                        <Input
                        required
                        type="email"
                        value={""}
                        onChange={()=>{}}
                        placeholder="enter email address"
                        disabled={false}
                        />
                        <Input
                        required
                        type="password"
                        value={""}
                        onChange={()=>{}}
                        placeholder="enter password"
                        disabled={false}
                        min={8}
                        max={256}
                        />
                        <Button disabled={false} size="lg" className="w-full">
                            Login
                        </Button>
                    </form>
                </CardContent>
                    <div>
                        <Separator/>
                    </div>
                    <CardContent className="p-7 flex flex-col gap-y-4">
                        <Button variant="secondary" disabled={false} size="lg" className="w-full">
                        <FcGoogle className="mr-2 size-5"/>Login with Google</Button>
                        <Button variant="secondary" disabled={false} size="lg" className="w-full">
                        <FaGithub className="mr-2 size-5"/>Login with Github</Button>
                     </CardContent>
            </CardHeader>
        </Card>
    );
}