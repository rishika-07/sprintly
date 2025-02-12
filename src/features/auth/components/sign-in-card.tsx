import {z} from "zod"

import { Button } from "@/components/ui/button";
import { Card,CardContent,CardTitle,CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import {zodResolver} from "@hookform/resolvers/zod";

import {useForm} from "react-hook-form"
import {FcGoogle } from "react-icons/fc";
import {FaGithub } from "react-icons/fa";

const formSchema = z.object({
    email :z.string().email(),
    password: z.string().min(8,"minimum 8 characters required")
})

export const SignInCard = ()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit = (values :z.infer<typeof formSchema>)=>{
        console.log({values})
    }
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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                name="email"
                                control={form.control}
                                render={({field})=>(
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                            {...field}
                                            type="email"
                                            placeholder="enter email address"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                name="password"
                                control={form.control}
                                render={({field})=>(
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                            {...field}
                                            type="password"
                                            placeholder="enter your password"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                             <Button disabled={false} size="lg" className="w-full">
                                Login
                             </Button>
                        </form>
                    </Form>
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