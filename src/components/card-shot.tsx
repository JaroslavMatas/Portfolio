'use client'

import {gsap} from 'gsap'
import Image from 'next/image'
import {FC, Fragment, PointerEvent, useCallback, useRef, useState} from 'react'

import {EntryShot} from '@/db'
import {useEntranceAnimation, useHasHover} from '@/hooks'
import {trackProjectView} from '@/lib'
import {shotImageSizesProp} from '@/utils'
import {actionToggleModal, useCameraDispatch} from '@/providers'

import {CardShotHover} from './card-shot-hover'
import {CardShotModal} from './card-shot-modal'
import {CardShotVideo} from './card-shot-video'

export const CardShot: FC<EntryShot> = ({
  area,
  properties,
  title,
  description,
  image,
  videos,
  size,
  animation,
  cardUrl,
  cardTarget = '_blank',
}) => {
  const refCard = useRef<HTMLDivElement>(null)
  const refTitle = useRef<HTMLDivElement>(null)
  const refVideoIcon = useRef<HTMLDivElement>(null)
  const refLinkBorder = useRef<HTMLDivElement>(null)

  const hasHover = useHasHover()
  useEntranceAnimation(refCard, animation)

  const dispatch = useCameraDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEnter = useCallback(
    (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') {
        return
      }

      if (!refTitle.current) {
        return
      }

      gsap.killTweensOf(refTitle.current)

      gsap.to(refTitle.current, {
        duration: 0.5,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: 1,
        y: 0,
      })

      if (refVideoIcon.current && !cardUrl) {
        gsap.to(refVideoIcon.current, {
          autoAlpha: 0,
          duration: 0.35,
          ease: 'power2.out',
          scale: 0.9,
        })
      }

      if (cardUrl && refLinkBorder.current) {
        gsap.to(refLinkBorder.current, {
          opacity: 1,
          duration: 0.25,
          ease: 'power2.out',
        })
      }
    },
    [cardUrl],
  )

  const handleLeave = useCallback(
    (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') {
        return
      }

      if (!refTitle.current) {
        return
      }

      gsap.to(refTitle.current, {
        duration: 0.5,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: 0,
        y: 88,
      })

      if (refVideoIcon.current && !cardUrl) {
        gsap.to(refVideoIcon.current, {
          autoAlpha: 1,
          delay: 0.05,
          duration: 0.35,
          ease: 'power2.out',
          scale: 1,
        })
      }

      if (cardUrl && refLinkBorder.current) {
        gsap.to(refLinkBorder.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out',
        })
      }
    },
    [cardUrl],
  )

  const handleOnClose = useCallback(() => {
    setIsModalOpen(false)
    actionToggleModal(dispatch, false)
  }, [dispatch])

  const handleOnOpen = useCallback(() => {
    if (cardUrl) {
      trackProjectView(title)

      if (cardTarget === '_self') {
        window.location.href = cardUrl
        return
      }

      window.open(cardUrl, cardTarget, 'noopener,noreferrer')
      return
    }

    setIsModalOpen(true)
    actionToggleModal(dispatch, true)
    trackProjectView(title)
  }, [cardTarget, cardUrl, dispatch, title])

  return (
    <Fragment>
      <div
        ref={refCard}
        data-area={area}
        className="relative w-full shrink-0 flex h-full contain-intrinsic overflow-hidden bg-card-surface rounded-2xl border border-solid border-neutral-900/10 transform-3d bg-neutral-100"
        style={{gridArea: area}}
      >
        <div
          onClick={handleOnOpen}
          onPointerEnter={handleEnter}
          onPointerLeave={handleLeave}
          onPointerOver={handleEnter}
          role="button"
          className="flex flex-col w-full grow overflow-hidden relative items-center justify-center cursor-pointer"
        >
          <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              loading="eager"
              fetchPriority="high"
              sizes={shotImageSizesProp(size)}
              style={{objectFit: 'cover'}}
            />
            <CardShotVideo
              ref={refVideoIcon}
              videos={videos}
              image={image}
              hasHover={hasHover}
              iconType={cardUrl ? 'link' : 'video'}
              keepIconVisible={Boolean(cardUrl)}
            />
          </div>
          {hasHover && <CardShotHover ref={refTitle} title={title} />}
        </div>

        {cardUrl && (
  <div ref={refLinkBorder} className="pointer-events-none absolute inset-0 opacity-0 z-20">
    <div
      className="absolute inset-[2px] rounded-[14px]"
      style={{
        boxShadow:
          '0 0 0 1.5px rgba(30, 215, 96, 1), inset 0 0 12px rgba(30, 215, 96, 0.35), inset 0 0 24px rgba(30, 215, 96, 0.18)',
      }}
    />
  </div>
)}
      </div>

      {!cardUrl && (
        <CardShotModal
          isOpen={isModalOpen}
          onClose={handleOnClose}
          properties={properties}
          title={title}
          description={description}
          image={image}
          size={size}
          videos={videos}
        />
      )}
    </Fragment>
  )
}