import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './../components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISTAD',
  description: 'This is mini-project NextJS with app router',
  image:'https://images.ctfassets.net/pjshm78m9jt4/nuQWnUU20yQ51j38qsVf6/cb2673e2730e78d32a91decc5a15b466/Clementine-and-Gus-Romantic-Meal-2.jpg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
