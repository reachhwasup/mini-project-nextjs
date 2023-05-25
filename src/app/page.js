import { Suspense } from 'react'
import Loading from './loading'
import Products from './products/page'
;
import User from './users/page';
import Categories from './categories/page';
import Slideshow from '@/components/slideshow';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Suspense fallback={<Loading/>}> 
            <Slideshow/>
            <Products/>
          <Categories/>
          <User/>
      
      </Suspense>

    </main>
  )
}
