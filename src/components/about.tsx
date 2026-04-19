'use client'

import {FC, ReactNode, useLayoutEffect, useRef} from 'react'
import gsap from 'gsap'

const SectionTitle: FC<{children: ReactNode}> = ({children}) => (
  <div className="h-[17px]">
    <h1 className="block font-normal text-[14px] leading-[100%] tracking-[0px] text-neutral-900">{children}</h1>
  </div>
)

const Paragraph: FC<{children: ReactNode}> = ({children}) => (
  <p className="block font-normal text-[14px] leading-[22px] tracking-[0px] text-neutral-500">{children}</p>
)

type RevealOptions = {
  sectionSelector?: string
  nodeSelector?: string
  nodeStagger?: number
  nodeDuration?: number
  sectionGap?: number
  ease?: gsap.EaseString
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  enable?: boolean
  scope?: React.RefObject<HTMLDivElement | null>
}

const useAboutSequentialReveal = ({
  sectionSelector = '[data-about-section]',
  nodeSelector = '[data-about-reveal]',
  nodeStagger = 0.025,
  nodeDuration = 0.35,
  sectionGap = 0.02,
  ease = 'power2.out',
  from = {opacity: 0, y: 10},
  to = {opacity: 1, y: 0},
  enable = true,
  scope,
}: RevealOptions = {}) => {
  useLayoutEffect(() => {
    if (!enable || !scope?.current) {
      return
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(sectionSelector)

      if (!sections.length) {
        return
      }

      const master = gsap.timeline({defaults: {ease}})

      sections.forEach((section, i) => {
        const nodes = gsap.utils.toArray<HTMLElement>(section.querySelectorAll(nodeSelector))

        if (!nodes.length) {
          return
        }

        const sectionTL = gsap.timeline()

        sectionTL.fromTo(
          nodes,
          {...from},
          {...to, duration: nodeDuration, force3D: true, stagger: nodeStagger, willChange: 'transform, opacity'}
        )

        master.add(sectionTL, i === 0 ? 0 : `>${sectionGap}`)
      })
    }, scope)

    return () => ctx.revert()
  }, [sectionSelector, nodeSelector, nodeStagger, nodeDuration, sectionGap, ease, from, to, enable, scope])
}

const AboutSection: FC<{title: string; children: ReactNode}> = ({title, children}) => (
  <div className="flex flex-col gap-[24px]" data-about-section="true">
    <div data-about-reveal="true">
      <SectionTitle>{title}</SectionTitle>
    </div>
    {children}
  </div>
)

export type AboutProps = {
  children?: ReactNode
  animated?: boolean
}

export const About: FC<AboutProps> = ({children, animated = false}) => {
  const ref = useRef<HTMLDivElement>(null)

  useAboutSequentialReveal({
    enable: animated,
    scope: ref,
  })

  return (
    <div ref={ref} className="h-full w-full flex flex-col max-w-[572px]">
      <div className="w-full h-full flex flex-col gap-[44px] md:gap-[56px]">
        <AboutSection title="Who am I?">
          <div className="flex flex-col gap-[24px]">
            <div data-about-reveal="true">
              <Paragraph>
                Art has always been the starting point of everything I do. I began drawing and painting as a child,
                and that early connection to making things still shapes the way I approach every project today. What
                started as traditional art gradually evolved into digital design, animation, and eventually 3D, where
                I found a medium that allows me to combine visual thinking, movement, and technical precision.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                My work is driven by curiosity and a strong maker mindset. I enjoy building things from the ground up,
                whether it is a visual concept, a motion system, or a complete experience. Over time, this approach
                led me from freelance projects to studio collaboration, where I learned how to develop work within
                larger teams and more complex productions, and how to bring ideas to a professional level of execution.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                Alongside my design work, I co-founded LAPZ, an AR and VR startup focused on creating new ways to
                experience motorsports through immersive technology. Working on a product from concept to release
                shaped my thinking beyond visuals and taught me to see creativity as a tool for building systems, not
                only images.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                Today I work as a freelance motion and 3D designer, combining an artistic background with product
                thinking and technical execution. Outside of client work, I spend my time drawing, painting, cooking,
                building furniture, and experimenting with new ideas, anything that keeps the connection between
                imagination and making alive.
              </Paragraph>
            </div>
          </div>
        </AboutSection>

        <AboutSection title="What do I do?">
          <div className="flex flex-col gap-[24px]">
            <div data-about-reveal="true">
              <Paragraph>
                I design and build visual experiences across motion, 3D, and digital media, often working at the
                intersection of design, technology, and product development. My focus is not on a specific tool or
                discipline, but on finding the best way to bring an idea to life. Depending on the project, this can
                mean animation, real-time 3D, video, interactive content, or complete visual systems.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                I enjoy working on projects that go beyond single deliverables and require a broader understanding of
                the product, the user, and the context. My experience with startups, studio work, and freelance
                projects taught me to approach design as part of a larger process, where creativity, functionality,
                and business goals need to work together.
              </Paragraph>
            </div>
          </div>
        </AboutSection>

        {children && children}
      </div>
    </div>
  )
}