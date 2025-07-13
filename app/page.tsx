import { prisma } from "@/lib/prisma";

export default async function Home() {
    const data = await prisma.users.findMany();

    return (
        <div>
            <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-4">Here is some data from the database:</p>
            <ul className="mt-2">
                {data.map((user) => (
                    <li key={user.id} className="mb-2">
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
