import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/admin-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coinlaa Admin Dashboard',
  description: 'Manage your Coinlaa platform content',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex items-center gap-2">
                <img 
                  src="/coinlaa-logo.jpg" 
                  alt="Coinlaa" 
                  className="w-8 h-8 object-contain"
                />
                <h1 className="text-lg font-semibold">Admin Dashboard</h1>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              {children}
            </div>
          </SidebarInset>
          <AppSidebar />
        </SidebarProvider>
      </body>
    </html>
  )
}