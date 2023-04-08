import './globals.css'

export const metadata = {
  title: 'Google',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className='bg-[#202124]'>{children}</body>
    </html>
  )
}
