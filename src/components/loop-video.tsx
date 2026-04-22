'use client'

import {FC, useEffect, useRef} from 'react'

export type LoopVideoProps = {
  srcMp4: string
  srcWebm: string
  poster?: string
  muted?: boolean
  autoPlay?: boolean
  fit?: 'cover' | 'contain'
}

export const LoopVideo: FC<LoopVideoProps> = ({
  srcMp4,
  srcWebm,
  poster,
  muted = true,
  autoPlay = true,
  fit = 'cover',
}) => {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const el = ref.current

    if (!el || !autoPlay) {
      return
    }

    const playVideo = async () => {
      try {
        await el.play()
      } catch (err) {
        // biome-ignore lint/suspicious/noConsole: Log video warning
        console.warn('Autoplay failed', err)
      }
    }

    playVideo()
  }, [autoPlay])

  return (
    <video
      ref={ref}
      className={`block w-full h-full rounded-[20px] ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      playsInline
      loop
      muted={muted}
      autoPlay={autoPlay}
      controls={false}
      preload="auto"
      poster={poster}
    >
      <source src={srcWebm} type="video/webm" />
      <source src={srcMp4} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}