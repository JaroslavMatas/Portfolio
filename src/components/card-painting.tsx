'use client'

import type {EntryPainting} from '@/db'
import {useRef} from 'react'
import {useEntranceAnimation} from '@/hooks'

export const CardPainting = ({area, animation}: EntryPainting) => {
  const refCard = useRef<HTMLDivElement>(null)

  useEntranceAnimation(refCard, animation)

  return (
    <article
      ref={refCard}
      className="card relative overflow-hidden min-h-0 min-w-0"
      style={{gridArea: area}}
    >
      <div className="flex h-full w-full items-end p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Art</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Painting</h2>
        </div>
      </div>
    </article>
  )
}