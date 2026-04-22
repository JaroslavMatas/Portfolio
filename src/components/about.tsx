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
                I am a freelance 3D and motion designer based in Prague. My background started in traditional art,
                drawing and painting, and over time evolved into digital design, animation, and 3D. That foundation
                still shapes the way I work today: I care about atmosphere, composition, detail, and the feeling a
                visual leaves behind.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                I enjoy building things from the ground up, from the first idea to the final execution. Whether I am
                developing a visual concept, animating a product story, or shaping a broader digital experience, I
                approach each project with a combination of artistic sensitivity, technical precision, and strong
                curiosity.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                Alongside freelance and studio work, I also co-founded LAPZ, an AR and VR startup focused on new ways
                of experiencing motorsports through immersive technology. That experience pushed me beyond pure visual
                output and taught me to think more deeply about products, systems, and how design functions in a real
                context.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                Today, I work across motion, 3D, and visual storytelling, combining an artistic background with product
                thinking and hands-on execution. Outside of client work, I spend time drawing, painting, cooking,
                building furniture, and exploring new ideas, anything connected to the process of making.
              </Paragraph>
            </div>
          </div>
        </AboutSection>

        <AboutSection title="What do I do?">
          <div className="flex flex-col gap-[24px]">
            <div data-about-reveal="true">
              <Paragraph>
                I help brands, startups, and products communicate ideas through motion and 3D. This can take the form
                of product visuals, launch animations, branded storytelling, digital campaigns, or custom visual
                systems that make a message feel clearer, richer, and more memorable.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                My work usually sits at the intersection of design, movement, and technology. Depending on the project,
                that may mean stylized 3D, cinematic product animation, interactive content, or motion-led visuals
                designed to support a wider brand or product experience.
              </Paragraph>
            </div>

            <div data-about-reveal="true">
              <Paragraph>
                I am most interested in projects where visuals do more than decorate, where they explain, elevate, and
                give a product or idea stronger emotional impact.
              </Paragraph>
            </div>
          </div>
        </AboutSection>

        {children && children}
      </div>
    </div>
  )
}