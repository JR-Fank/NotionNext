import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CONFIG from '../config'
/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAdjacent({ prev, next }) {
  const [isScrollEnd, setIsScrollEnd] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsScrollEnd(false)
  }, [router])

  useEffect(() => {

    // 文章是否已经到了底部
    const targetElement = document.getElementById('article-end')

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsScrollEnd(true)
        }
      })
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(targetElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!prev || !next || !CONFIG.ARTICLE_ADJACENT) {
    return <></>
  }

  return (
        <div id='article-end'>
            {/* 移动端 */}

            {/* 桌面端 */}

        </div>
  )
}

