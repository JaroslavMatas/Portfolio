'use client'

import {gsap} from 'gsap'
import {FC, PointerEvent, useCallback, useRef} from 'react'

import {EntryAbout} from '@/db'
import {useEntranceAnimation} from '@/hooks'

export const CardAbout: FC<EntryAbout> = ({area, animation}) => {
  const refCard = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)

  useEntranceAnimation(refCard, animation)

  const handleEnter = useCallback((e: PointerEvent) => {
    if (e.pointerType !== 'mouse') {
      return
    }

    if (!ref.current) {
      return
    }

    tlRef.current?.kill()

    const tl = gsap.timeline()

    tl.to(ref.current, {
      duration: 0.8,
      ease: 'power3.out',
      y: -80,
    }).to(ref.current, {
      duration: 0.6,
      ease: 'power2.inOut',
      y: 0,
    })

    tlRef.current = tl
  }, [])

  const handleLeave = useCallback((e: PointerEvent) => {
    if (e.pointerType !== 'mouse') {
      return
    }

    if (!ref.current) {
      return
    }

    tlRef.current?.kill()
    gsap.killTweensOf(ref.current)

    tlRef.current = gsap.to(ref.current, {
      duration: 0.5,
      ease: 'power3.inOut',
      y: 0,
    })
  }, [])

  return (
    <div
      ref={refCard}
      className="w-full shrink-0 flex h-full contain-intrinsic overflow-hidden card"
      style={{gridArea: area, transformStyle: 'preserve-3d'}}
    >
      <div
        className="flex flex-col w-full grow overflow-hidden h-full relative cursor-pointer"
        onPointerEnter={handleEnter}
        onPointerOver={handleEnter}
        onPointerLeave={handleLeave}
      >
        <div
          className="absolute inset-[1px] overflow-hidden h-full w-full pointer-events-none"
          style={{clipPath: 'inset(2px round 16px)'}}
        >
          <div
            ref={ref}
            className="w-full h-full flex flex-col justify-between p-[28px]"
          >
            <div className="max-w-[220px]">
              <p className="text-[12px] uppercase tracking-[0.18em] text-neutral-500">
                About
              </p>
              <h2 className="mt-3 text-[28px] leading-[1.05] font-medium text-neutral-950">
                Jaroslav Matas
              </h2>
              <p className="mt-4 text-[14px] leading-[1.5] text-neutral-700">
                3D and motion designer focused on product visuals, digital experiences
                and visual storytelling for brands and startups.
              </p>
            </div>

            <div className="flex flex-wrap gap-[8px] max-w-[220px]">
              <span className="rounded-full border border-black/10 px-[10px] py-[6px] text-[12px] text-neutral-700">
                3D
              </span>
              <span className="rounded-full border border-black/10 px-[10px] py-[6px] text-[12px] text-neutral-700">
                Motion
              </span>
              <span className="rounded-full border border-black/10 px-[10px] py-[6px] text-[12px] text-neutral-700">
                Product
              </span>
              <span className="rounded-full border border-black/10 px-[10px] py-[6px] text-[12px] text-neutral-700">
                Visual systems
              </span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[1px] overflow-hidden flex justify-end items-end rounded-2xl h-full w-full pointer-events-none"
          style={{clipPath: 'inset(1px round 16px)'}}
        >
          <div className="h-[146px] w-full rounded-br-2xl rounded-bl-2xl bg-gradient-to-b from-transparent to-neutral-900/78 to-[72.83%] flex items-end justify-center">
            <span className="text-[14px] opacity-70 font-normal tracking-[0px] bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.72)_100%)] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(0,0,0,0.25)] pb-[32px]">
              About
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}