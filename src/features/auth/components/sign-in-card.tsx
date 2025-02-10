import { Button } from "@/components/ui/button";
import { Card,CardContent,CardTitle,CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {FcGoogle } from "react-icons/fc";
import {FaGithub } from "react-icons/fa";


export const SignInCard = ()=>{
    return(
        <Card className="h-full md:w-[487] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back !
                </CardTitle>
                <div className="px-7">
                <Separator/>
                </div>
                <CardContent className="p-7">
                    <form className="space-y-4">
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
                    <div className="p-7">
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