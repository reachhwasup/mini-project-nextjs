import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './../components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISTAD',
  description: 'This is mini-project NextJS with app router',
  image:'https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/292252498_110774601690646_1618977608937918361_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGL2jhZTzru2YxpV7a0lSBuVfkQPvqVi-9V-RA--pWL7-hi-mT8PL_coae_LnZuf4E3e6xr3MYN5k6P91N1Mj5L&_nc_ohc=rGnsGpeD298AX8doqTG&_nc_ht=scontent.fpnh11-1.fna&oh=00_AfAVqk-D3hTGMqlpjncfT7hv6F8beL_hxAMbjfpLAiQ9pQ&oe=6477257B',
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
