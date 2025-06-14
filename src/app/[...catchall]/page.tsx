'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function CatchAllPage() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 构建完整的原始URL
    const search = searchParams.toString()
    const originalUrl = pathname + (search ? '?' + search : '')
    
    // 存储到 sessionStorage
    sessionStorage.setItem('redirected_from', originalUrl)
    
    // 客户端重定向到首页
    window.location.href = '/'
  }, [pathname, searchParams])

  return null;
}