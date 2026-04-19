'use client'

import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import {PointerEvent, useCallback, useRef} from 'react'

import type {EntryPainting} from '@/db'
import {useEntranceAnimation} from '@/hooks'

export const CardPainting = ({area, animation, image, url}: EntryPainting) => {
  const refCard = useRef<HTMLAnchorElement>(null)
  const refImage = useRef<HTMLDivElement>(null)

  useEntranceAnimation(refCard, animation)

  const handleEnter = useCallback((e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !refImage.current) return

    gsap.to(refImage.current, {
      scale: 1.06,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  const handleLeave = useCallback((e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || !refImage.current) return

    gsap.to(refImage.current, {
      scale: 1,
      duration: 0.6,
      ease: 'power3.out',
    })
  }, [])

  return (
    <Link
      href={url || '#'}
      ref={refCard}
      target="_blank"
      rel="noopener noreferrer"
      className="card relative block overflow-hidden min-h-0 min-w-0"
      style={{gridArea: area}}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div ref={refImage} className="relative h-full w-full will-change-transform">
          <Image
            src={image}
            alt="Painting"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="absolute right-[12px] top-[12.47px] rounded-2xl overflow-hidden pointer-events-none">
        <div className="opacity-100 w-[22px] h-[22px] rounded-full flex items-center justify-center bg-black/20 will-change-[transform,opacity] transform-gpu">
          <Image src="/svg/link-icon.svg" alt="link-icon" width={12} height={12} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20" />

      <div className="absolute inset-0 overflow-hidden flex justify-end items-end rounded-2xl pointer-events-none">
        <div className="h-[146px] w-full rounded-br-2xl rounded-bl-2xl bg-gradient-to-b from-transparent to-neutral-900/78 to-[72.83%] flex items-end justify-center">
          <span className="text-[14px] opacity-70 font-normal tracking-[0px] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.72)_100%)] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] pb-[32px]">
            Painting
          </span>
        </div>
      </div>
    </Link>
  )
}