import {gsap} from 'gsap'
import {type RefObject, useEffect, useLayoutEffect} from 'react'

import type {AnimationConfig} from '@/db/types'
import {useIntro} from '@/providers'

const getDistanceFromProfile = (element: HTMLElement) => {
  const profile = document.querySelector('[data-area="profile"]')

  if (!profile) {
    return 0
  }

  const elementRect = element.getBoundingClientRect()
  const profileRect = profile.getBoundingClientRect()

  const elementCenterX = elementRect.left + elementRect.width / 2
  const elementCenterY = elementRect.top + elementRect.height / 2

  const profileCenterX = profileRect.left + profileRect.width / 2
  const profileCenterY = profileRect.top + profileRect.height / 2

  const distanceX = elementCenterX - profileCenterX
  const distanceY = elementCenterY - profileCenterY

  return Math.sqrt(distanceX * distanceX + distanceY * distanceY)
}

export const useEntranceAnimation = (ref: RefObject<HTMLElement | null>, animation?: AnimationConfig) => {
  const {introComplete} = useIntro()

  useLayoutEffect(() => {
    if (!animation || !ref.current) {
      return
    }

    gsap.set(ref.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: 'center center',
      x: 0,
      y: 18,
    })
  }, [animation, ref])

  useEffect(() => {
    if (!introComplete || !animation || !ref.current) {
      return
    }

    const distance = getDistanceFromProfile(ref.current)
    const delay = Math.min(distance / 1400, 0.55)

    gsap.to(ref.current, {
      delay,
      duration: 0.9,
      ease: 'power3.out',
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    })
  }, [introComplete, animation, ref])
}