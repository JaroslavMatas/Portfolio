'use client'

import gsap from 'gsap'
import Image from 'next/image'
import {FC, useLayoutEffect, useMemo, useRef} from 'react'

type ClosedGalleryItem = {
  src: string
  alt: string
  width: number
  height: number
  className: string
  imageClassName: string
  hoverX: number
  hoverY: number
  hoverScale: number
  zIndex: number
}

const ITEMS: ClosedGalleryItem[] = [
  {
    src: '/png/gallery-1.png',
    alt: 'Gallery image 1',
    width: 420,
    height: 260,
    className: 'left-[-10%] top-[-50%]',
    imageClassName: 'h-[34%] w-auto scale-[0.5] origin-center',
    hoverX: -6,
    hoverY: -4,
    hoverScale: 1.018,
    zIndex: 1,
  },
  {
    src: '/png/gallery-2.png',
    alt: 'Gallery image 2',
    width: 300,
    height: 600,
    className: 'left-[50%] top-[-40%]',
    imageClassName: 'h-[50%] w-auto scale-[0.6] origin-center',
    hoverX: -7,
    hoverY: 6,
    hoverScale: 1.016,
    zIndex: 2,
  },
  {
    src: '/png/gallery-3.png',
    alt: 'Gallery image 3',
    width: 480,
    height: 620,
    className: 'left-[70%] top-[-10%]',
    imageClassName: 'h-[52%] w-auto scale-[0.6] origin-center',
    hoverX: 0,
    hoverY: -8,
    hoverScale: 1.022,
    zIndex: 4,
  },
  {
    src: '/png/gallery-4.png',
    alt: 'Gallery image 4',
    width: 360,
    height: 480,
    className: 'right-[0%] top-[0%]',
    imageClassName: 'h-[41%] w-auto scale-[0.6] origin-center',
    hoverX: 7,
    hoverY: -4,
    hoverScale: 1.016,
    zIndex: 2,
  },
  {
    src: '/png/gallery-5.png',
    alt: 'Gallery image 5',
    width: 420,
    height: 280,
    className: 'left-[-5%] bottom-[-18%]',
    imageClassName: 'h-[34%] w-auto scale-[0.6] origin-center',
    hoverX: -4,
    hoverY: 7,
    hoverScale: 1.014,
    zIndex: 1,
  },
  {
    src: '/png/gallery-6.png',
    alt: 'Gallery image 6',
    width: 360,
    height: 410,
    className: 'right-[4%] bottom-[-20%]',
    imageClassName: 'h-[37%] w-auto scale-[0.6] origin-center',
    hoverX: 6,
    hoverY: 8,
    hoverScale: 1.016,
    zIndex: 1,
  },
]

export const CardGalleryStrip: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  const items = useMemo(() => ITEMS, [])

  useLayoutEffect(() => {
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    if (!elements.length) {
      return
    }

    gsap.set(elements, {
      x: 0,
      y: 0,
      scale: 1,
      transformOrigin: '50% 50%',
      willChange: 'transform',
    })

    return () => {
      gsap.killTweensOf(elements)
    }
  }, [])

  const handlePointerEnter = () => {
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    elements.forEach((el, index) => {
      const item = items[index]

      gsap.to(el, {
        duration: 0.7,
        ease: 'power3.out',
        x: item.hoverX,
        y: item.hoverY,
        scale: item.hoverScale,
      })
    })
  }

  const handlePointerLeave = () => {
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    gsap.to(elements, {
      duration: 0.75,
      ease: 'power3.out',
      x: 0,
      y: 0,
      scale: 1,
    })
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-full bg-[#eceae6]"
      style={{clipPath: 'inset(1px round 16px)'}}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-0">
        {items.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            ref={el => {
              itemRefs.current[index] = el
            }}
            className={`absolute ${item.className}`}
            style={{zIndex: item.zIndex}}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className={`${item.imageClassName} select-none pointer-events-none max-w-none`}
              draggable={false}
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  )
}