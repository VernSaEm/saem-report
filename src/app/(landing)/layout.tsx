import { Navbar1 } from "@/components/layout/navbar1"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <div>
    <Navbar1></Navbar1>
    {children}

    </div>

  )
}