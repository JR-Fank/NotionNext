import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'

export default function ArticleCopyright () {
  const router = useRouter()
  const [path, setPath] = useState(BLOG.LINK + router.asPath)
  useEffect(() => {
    setPath(window.location.href)
  })

  const { locale } = useGlobal()

  if (!CONFIG.ARTICLE_COPYRIGHT) {
    return <></>
  }

  return (

  )
}
