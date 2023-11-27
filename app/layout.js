import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Ecommerce Website',
  description: 'Developed By Webstones',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
