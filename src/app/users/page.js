import Usercard from "@/components/usercard";

export default async function User() {
    const users = await getUsers()
    return (
        <>
            <h1 style={{ fontSize: "40px", color: "blue" }}>All users listing</h1>
            <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 my-5 gap-10">
                {
                    users.map((user) => (
                        <Usercard
                            key={user.id}
                            name={user.name}
                            avatar={user.avatar}

                        />
                    ))
                }
            </main>
        </>

    );

}

export async function getUsers() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users?limit=8`, { cache: "no-store" })
    return res.json()
}