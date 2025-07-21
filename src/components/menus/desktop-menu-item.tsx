'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DesktopMenuItem({ href, name }: { href: string, name: string }) {
  const path = usePathname()
  const active = path === href && 'text-rose-500 font-semibold'
  return (
    <Link href={href} className={cn('uppercase text-sm', active)} >{name}</Link >
  )
}

