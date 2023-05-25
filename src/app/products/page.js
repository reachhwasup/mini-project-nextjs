import Card from '@/components/card';
import React from 'react';

export const metadata = {
    title: 'ISTAD Products'
    , description: 'List all products'
}
export default async function Products() {
    const products = await getProducts()
    return (
        <>
                <h1 style={{fontSize:"40px",color:"yellowgreen"}}>All products</h1>
            
            <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 my-5 gap-2">
                {
                    products.map((pro) => (
                        <Card
                            key={pro.id}
                            title={pro.title}
                            description={pro.description}
                            image={pro.images[0]}
                            id={pro.id}
                            price={pro.price}
                        />
                    ))
                }
            </main>
        </>
    );
}

export async function getProducts() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?limit=20&offset=0`, { 
        cache: "no-store",
        // method:"POST",
        // headers:{
        //     "Content-Type": "application/json"
        // }

    })
    return res.json()
}
