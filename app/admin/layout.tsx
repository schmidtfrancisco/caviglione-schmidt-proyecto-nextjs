import Navbar from "@/app/ui/admin/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid w-full overflow-hidden lg:grid-cols-[280px_1fr] lg:min-h-screen">
			<Navbar/>
			<div className="flex flex-col">{children}</div>
    </div>
  )
}