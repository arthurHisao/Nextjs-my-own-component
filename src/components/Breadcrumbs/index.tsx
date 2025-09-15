import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname()
  const currentPageName = pathname.split('/').slice(-1).join() || 'Home'

  return (
    <div className='flex px-4 py-3'>
      <Link href="/" className='after:content-["/"] after:px-1'>Home</Link>
      <span className="capitalize">{currentPageName}</span>
    </div>
  )
}
