import './globals.css'
import Sidebar from './Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex justify-between">
          <div className=''>
            <Sidebar />
          </div>
          <div className='absolute left-80 p-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
