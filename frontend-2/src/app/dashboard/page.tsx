import UsersData from "@/components/UsersData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth"

export default async function Dashboard() {
    const session = await getServerSession();
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <p className="text-2xl font-bold text-center">Dashboard</p>
            <p>Welcome <span className="font-bold">{session?.user?.name}</span> </p>
            <p className=" text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nemo maxime, eos ratione corporis ullam consequatur asperiores tempore dolor expedita.</p>

            <Card className=" w-3/4 text-center">
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>This is your dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Welcome <span className=" font-bold">{session?.user?.name}</span> </p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

        </main>
    )
}
