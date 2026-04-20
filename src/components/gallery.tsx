'use client'

import {gsap} from 'gsap'
import Image from 'next/image'
import ReactDOM from 'react-dom'
import {FC, createRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react'

import {ModalCloseButton} from './modal-close-button'

type GalleryItemData = {
  image: string
  alt: string
  title: string
  year: string
  imageWidth: number
  imageHeight: number
  desktopItemClassName: string
}

const ITEMS: GalleryItemData[] = [
  {
    image: '/png/gallery-1.png',
    alt: 'Gallery image 1',
    title: 'Atelier session',
    year: '2026',
    imageWidth: 250,
    imageHeight: 345,
    desktopItemClassName: 'left-[18%] top-[74px]',
  },
  {
    image: '/png/gallery-2.png',
    alt: 'Gallery image 2',
    title: 'Outdoor painting session',
    year: '2024',
    imageWidth: 265,
    imageHeight: 360,
    desktopItemClassName: 'left-[60%] top-[110px]',
  },
  {
    image: '/png/gallery-3.png',
    alt: 'Gallery image 3',
    title: 'Levanto',
    year: '2025',
    imageWidth: 230,
    imageHeight: 300,
    desktopItemClassName: 'left-[77%] top-[700px]',
  },
  {
    image: '/png/gallery-4.png',
    alt: 'Gallery image 4',
    title: 'Sunny walk in Prague',
    year: '2026',
    imageWidth: 230,
    imageHeight: 300,
    desktopItemClassName: 'left-[46%] top-[920px]',
  },
  {
    image: '/png/gallery-5.png',
    alt: 'Gallery image 5',
    title: 'Bringing Hugo to his new home ',
    year: '2026',
    imageWidth: 255,
    imageHeight: 350,
    desktopItemClassName: 'left-[7%] top-[650px]',
  },
  {
    image: '/png/gallery-6.png',
    alt: 'Gallery image 6',
    title: 'Riomaggiore',
    year: '2025',
    imageWidth: 360,
    imageHeight: 220,
    desktopItemClassName: 'left-[60%] top-[1500px]',
  },
  {
    image: '/png/gallery-7.png',
    alt: 'Gallery image 7',
    title: 'Marseille',
    year: '2024',
    imageWidth: 255,
    imageHeight: 345,
    desktopItemClassName: 'left-[10%] top-[1400px]',
  },
  {
    image: '/png/gallery-8.png',
    alt: 'Gallery image 8',
    title: 'Breakfast',
    year: '2025',
    imageWidth: 225,
    imageHeight: 295,
    desktopItemClassName: 'left-[68%] top-[1950px]',
  },
  {
    image: '/png/gallery-9.png',
    alt: 'Gallery image 9',
    title: 'Prague Metro',
    year: '2024',
    imageWidth: 230,
    imageHeight: 310,
    desktopItemClassName: 'left-[22%] top-[2000px]',
  },
  {
    image: '/png/gallery-10.png',
    alt: 'Gallery image 10',
    title: 'Family wedding',
    year: '2025',
    imageWidth: 240,
    imageHeight: 320,
    desktopItemClassName: 'left-[68%] top-[2700px]',
  },
  {
    image: '/png/gallery-11.png',
    alt: 'Gallery image 11',
    title: 'Aix-en-Provence',
    year: '2024',
    imageWidth: 250,
    imageHeight: 340,
    desktopItemClassName: 'left-[35%] top-[2520px]',
  },
  {
    image: '/png/gallery-12.png',
    alt: 'Gallery image 12',
    title: 'Home',
    year: '2023',
    imageWidth: 260,
    imageHeight: 350,
    desktopItemClassName: 'left-[33%] top-[3500px]',
  },
  {
    image: '/png/gallery-13.png',
    alt: 'Gallery image 13',
    title: 'FestArt - Trenčín',
    year: '2023',
    imageWidth: 230,
    imageHeight: 300,
    desktopItemClassName: 'left-[75%] top-[3350px]',
  },
  {
    image: '/png/gallery-14.png',
    alt: 'Gallery image 14',
    title: 'Vernazza',
    year: '2025',
    imageWidth: 245,
    imageHeight: 330,
    desktopItemClassName: 'left-[5%] top-[2770px]',
  },
]

type GalleryCardProps = {
  item: GalleryItemData
  index: number
  imageRef: React.RefObject<HTMLDivElement | null>
  captionRef: React.RefObject<HTMLDivElement | null>
  isMobile: boolean
}

const GalleryCard: FC<GalleryCardProps> = ({item, index, imageRef, captionRef, isMobile}) => {
  if (isMobile) {
    return (
      <div className="w-full flex flex-col items-start">
        <div ref={imageRef} className="w-full opacity-0" onClick={e => e.stopPropagation()}>
          <div className="relative overflow-hidden w-full rounded-[2px]">
            <Image
              src={item.image}
              alt={item.alt}
              width={item.imageWidth}
              height={item.imageHeight}
              className="h-auto w-full object-cover select-none"
              draggable={false}
            />
          </div>
        </div>

        <div ref={captionRef} className="opacity-0 mt-[10px] pl-[2px]" onClick={e => e.stopPropagation()}>
          <div className="text-[12px] leading-[1.1] tracking-[-0.01em] text-neutral-900 text-left">{item.title}</div>
          <div className="text-[12px] leading-[1.1] tracking-[-0.01em] text-neutral-900/72 text-left">{item.year}</div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`absolute ${item.desktopItemClassName}`}
      style={{zIndex: 20 + index}}
      onClick={e => e.stopPropagation()}
    >
      <div ref={imageRef} className="relative opacity-0">
        <div className="relative overflow-visible rounded-[2px]">
          <Image
            src={item.image}
            alt={item.alt}
            width={item.imageWidth}
            height={item.imageHeight}
            className="block h-auto w-full object-cover select-none"
            draggable={false}
          />

          <div
            ref={captionRef}
            className="absolute left-full bottom-0 ml-[12px] opacity-0 whitespace-nowrap text-left z-[60]"
          >
            <div className="text-[11px] leading-[1.08] tracking-[-0.01em] text-neutral-900 text-left">{item.title}</div>
            <div className="text-[11px] leading-[1.08] tracking-[-0.01em] text-neutral-900/72 text-left">{item.year}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export type GalleryProps = {
  isOpen: boolean
  onClose(): void
}

export const Gallery: FC<GalleryProps> = ({isOpen, onClose}) => {
  const modalRoot = document.getElementById('main')!
  const backdropRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLDivElement>(null)
  const desktopCanvasRef = useRef<HTMLDivElement>(null)

  const imageRefs = useMemo(() => ITEMS.map(() => createRef<HTMLDivElement>()), [])
  const captionRefs = useMemo(() => ITEMS.map(() => createRef<HTMLDivElement>()), [])

  const [mounted, setMounted] = useState(isOpen)
  const [isMobile, setIsMobile] = useState(false)

  const startClose = useCallback(() => {
    if (!backdropRef.current || !closeButtonRef.current) {
      return
    }

    const images = imageRefs.map(ref => ref.current).filter(Boolean) as HTMLDivElement[]
    const captions = captionRefs.map(ref => ref.current).filter(Boolean) as HTMLDivElement[]

    gsap.to([...captions, ...images], {
      duration: 0.22,
      ease: 'power2.inOut',
      opacity: 0,
    })

    gsap.to(closeButtonRef.current, {
      duration: 0.2,
      ease: 'power2.inOut',
      opacity: 0,
    })

    gsap.to(backdropRef.current, {
      duration: 0.24,
      ease: 'power2.inOut',
      opacity: 0,
      onComplete: () => {
        setMounted(false)
        onClose()
      },
    })
  }, [captionRefs, imageRefs, onClose])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const keyValue = e.key.toLowerCase()
      if (keyValue === 'esc' || keyValue === 'escape') {
        e.preventDefault()
        startClose()
      }
    },
    [startClose]
  )

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (!mounted) {
      return
    }

    const updateViewport = () => {
      setIsMobile(window.innerWidth < 900)
    }

    updateViewport()

    document.body.style.overflow = 'hidden'

    const abortController = new AbortController()

    window.addEventListener('resize', updateViewport, {signal: abortController.signal})
    document.addEventListener('keydown', handleKeyDown, {signal: abortController.signal})

    return () => {
      document.body.style.overflow = ''
      abortController.abort()
    }
  }, [mounted, handleKeyDown])

  useLayoutEffect(() => {
    if (!mounted || !backdropRef.current || !closeButtonRef.current) {
      return
    }

    const images = imageRefs.map(ref => ref.current).filter(Boolean) as HTMLDivElement[]
    const captions = captionRefs.map(ref => ref.current).filter(Boolean) as HTMLDivElement[]

    gsap.set(backdropRef.current, {opacity: 0})
    gsap.set(closeButtonRef.current, {opacity: 0})
    gsap.set(images, {opacity: 0})
    gsap.set(captions, {opacity: 0})

    gsap.to(backdropRef.current, {
      duration: 0.26,
      ease: 'power2.out',
      opacity: 1,
    })

    gsap.to(closeButtonRef.current, {
      duration: 0.24,
      delay: 0.08,
      ease: 'power2.out',
      opacity: 1,
    })

    gsap.to(images, {
      duration: 0.34,
      delay: 0.08,
      ease: 'power2.out',
      opacity: 1,
      stagger: 0.035,
    })

    gsap.to(captions, {
      duration: 0.28,
      delay: 0.16,
      ease: 'power2.out',
      opacity: 1,
      stagger: 0.028,
    })
  }, [mounted, imageRefs, captionRefs, isMobile])

  if (!mounted) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-40 w-screen h-screen">
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-[rgba(247,245,241,0.76)] backdrop-blur-[6px] will-change-[opacity]"
        onClick={startClose}
      />

      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden" onClick={startClose}>
        <div className="min-h-full w-full px-[20px] md:px-[34px] lg:px-[42px] pt-[88px] pb-[160px]">
          {isMobile ? (
            <div className="w-full max-w-[460px] mx-auto flex flex-col gap-[42px]">
              {ITEMS.map((item, index) => (
                <GalleryCard
                  key={`${item.image}-${index}`}
                  item={item}
                  index={index}
                  imageRef={imageRefs[index]}
                  captionRef={captionRefs[index]}
                  isMobile
                />
              ))}
            </div>
          ) : (
            <div
              ref={desktopCanvasRef}
              className="relative mx-auto w-full max-w-[1480px]"
              style={{height: 3900}}
            >
              {ITEMS.map((item, index) => (
                <GalleryCard
                  key={`${item.image}-${index}`}
                  item={item}
                  index={index}
                  imageRef={imageRefs[index]}
                  captionRef={captionRefs[index]}
                  isMobile={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ModalCloseButton ref={closeButtonRef} onClose={startClose} />
    </div>,
    modalRoot
  )
}