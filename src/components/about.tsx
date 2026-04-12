'use client'

import {FC, ReactNode} from 'react'

import {LinkExternal} from './link-external'

const SectionTitle: FC<{children: ReactNode}> = ({children}) => (
  <div className="h-[17px]">
    <h1 className="block font-normal text-[14px] leading-[100%] tracking-[0px] text-neutral-900">{children}</h1>
  </div>
)

const Paragraph: FC<{children: ReactNode}> = ({children}) => (
  <p className="block font-normal text-[14px] leading-[22px] tracking-[0px] text-neutral-500">{children}</p>
)

const Chip: FC<{children: ReactNode}> = ({children}) => (
  <span className="rounded-full border border-neutral-900/10 px-[12px] py-[7px] text-[13px] leading-[100%] text-neutral-700">
    {children}
  </span>
)

const AboutSection: FC<{title: string; children: ReactNode}> = ({title, children}) => (
  <div className="flex flex-col gap-[24px]">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </div>
)

export type AboutProps = {
  children?: ReactNode
}

export const About: FC<AboutProps> = ({children}) => {
  return (
    <div className="h-full w-full flex flex-col max-w-[572px]">
      <div className="w-full h-full flex flex-col gap-[44px] md:gap-[56px]">
        <AboutSection title="About">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[32px] leading-[100%] font-normal tracking-[0px] text-neutral-900">
              Jaroslav Matas
            </h2>
            <p className="text-[18px] leading-[24px] font-normal tracking-[0px] text-neutral-700">
              3D and motion designer focused on product visuals, digital experiences and visual storytelling.
            </p>
          </div>
        </AboutSection>

        <AboutSection title="What I do">
          <div className="flex flex-col gap-[24px]">
            <Paragraph>
              I create motion, 3D and visual systems for products, brands and digital experiences. My work sits
              between design, storytelling and strategy.
            </Paragraph>
            <Paragraph>
              I focus on visuals that make ideas easier to understand, products more desirable and brands more
              memorable. Sometimes that means product animation, sometimes interactive web visuals, and sometimes a
              broader creative direction for a launch.
            </Paragraph>
            <Paragraph>
              I am especially interested in startups, product companies and forward looking brands. I use whatever
              tool makes the most sense for the final outcome, rather than building my work around one specific
              software.
            </Paragraph>
          </div>
        </AboutSection>

        <AboutSection title="Focus">
          <div className="flex flex-wrap gap-[10px]">
            <Chip>3D visuals</Chip>
            <Chip>Motion design</Chip>
            <Chip>Product storytelling</Chip>
            <Chip>Web visuals</Chip>
            <Chip>Creative direction</Chip>
            <Chip>AR / VR concepts</Chip>
          </div>
        </AboutSection>

        <AboutSection title="Approach">
          <div className="flex flex-col gap-[24px]">
            <Paragraph>
              I care about the result more than the tool. I work across 3D, motion, editing and digital design,
              depending on what best serves the idea.
            </Paragraph>
            <Paragraph>
              The goal is not to make something flashy for its own sake, but to create visuals that support the
              product, the message and the audience.
            </Paragraph>
          </div>
        </AboutSection>

        <AboutSection title="Links">
          <div className="flex flex-col gap-[20px]">
            <LinkExternal url="https://www.instagram.com/">
              <span className="text-[14px] font-normal tracking-[0px] text-neutral-500 underline decoration-neutral-900/20 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/40 transition-colors duration-300">
                Instagram
              </span>
            </LinkExternal>
            <LinkExternal url="https://www.linkedin.com/">
              <span className="text-[14px] font-normal tracking-[0px] text-neutral-500 underline decoration-neutral-900/20 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/40 transition-colors duration-300">
                LinkedIn
              </span>
            </LinkExternal>
          </div>
        </AboutSection>

        {children && children}
      </div>
    </div>
  )
}