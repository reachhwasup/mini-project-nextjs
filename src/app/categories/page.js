import Categorycard from "@/components/categorycard";


export default async function Categories() {
    const categories = await getCategories()
    return (
        <>
            <h1 className="font-bold text-indigo-600 text-4xl">All Categories</h1>
            <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 my-5 gap-10">
                {
                    categories.map((cat) => (
                        <Categorycard
                            key={cat.id}
                            name={cat.name}
                            image={cat.image}
                            id={cat.id}

                        />
                    ))
                }
            </main>
        </>

    );


}

export async function getCategories() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories?limit=0`, { cache: "no-store" })
    return res.json()
}