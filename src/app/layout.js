import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './../components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISTAD',
  description: 'This is mini-project NextJS with app router',
  image:'https://www.definicionabc.com/wp-content/uploads/tecnologia/App-Store.jpg',
  openGraph: {
    
    title: "ISTAD",
    description: 'This is mini-project NextJS with app router',
  },
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
