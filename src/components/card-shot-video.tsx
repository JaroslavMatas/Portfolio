'use client'

import Image from 'next/image'
import {Fragment, forwardRef} from 'react'

import {EntryShot} from '@/db'
import {HoverVideo} from './hover-video'

export type CardShotVideoProps = Pick<EntryShot, 'videos' | 'image'> & {
  hasHover?: boolean
  iconType?: 'video' | 'link'
  keepIconVisible?: boolean
}

export const CardShotVideo = forwardRef<HTMLDivElement, CardShotVideoProps>(
  ({videos, image, hasHover = true, iconType = 'video', keepIconVisible = false}, ref) => {
    const iconSrc = iconType === 'link' ? '/svg/link-icon.svg' : '/svg/video.svg'
    const iconAlt = iconType === 'link' ? 'link-icon' : 'video-icon'

    if (!videos) {
      return null
    }

    return (
      <Fragment>
        {hasHover && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <HoverVideo srcMp4={videos.mp4} srcWebm={videos.webm} poster={image} muted loop preload="metadata" />
          </div>
        )}

        <div className="absolute right-[12px] top-[12.47px] rounded-2xl overflow-hidden">
          <div
            ref={ref}
            className={`w-[22px] h-[22px] rounded-full flex items-center justify-center bg-black/20 will-change-[transform,opacity] transform-gpu ${
              keepIconVisible ? 'opacity-100' : 'opacity-100'
            }`}
          >
            <Image src={iconSrc} alt={iconAlt} width={12} height={12} />
          </div>
        </div>
      </Fragment>
    )
  },
)

CardShotVideo.displayName = 'CardShotVideo'