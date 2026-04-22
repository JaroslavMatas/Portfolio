'use client'

import classNames from 'classnames'
import gsap from 'gsap'
import {FC, ReactNode, useLayoutEffect, useRef} from 'react'

import {CVPosition, CVSection, CVSectionLink, CVSectionProject, cv} from '@/db'
import {cn} from '@/utils'

import {LinkExternal} from './link-external'

const SectionLeft: FC<{year: string}> = ({year}) => (
  <div className="w-[88px] h-[17px] flex-shrink-0">
    <span className="block font-normal text-[14px] leading-[100%] tracking-[0px] text-neutral-500">{year}</span>
  </div>
)

const Dot = () => <div className="w-[4px] h-[4px] bg-neutral-900/15 rounded-full" />
const Line = () => <div className="w-[1.5px] h-[18.75px] bg-neutral-900/10 rounded-[2px]" />

const Segments: FC<Pick<CVSection, 'positions'>> = ({positions}) => {
  if (positions.length - 1 === 0) {
    return null
  }

  return (
    <div className="absolute left-[-13px] top-[7px] flex flex-col items-center justify-center gap-[2px]">
      {positions.map((_, index) => (
        <div key={index.toString()} className="flex flex-col items-center justify-center gap-[2px]">
          <Dot />
          {index !== positions.length - 1 && <Line />}
        </div>
      ))}
    </div>
  )
}

const variant: Record<'active' | 'inactive', string> = {
  active: 'text-neutral-900',
  inactive: 'text-neutral-600',
}

const PositionLabel: FC<CVPosition & {className?: string}> = ({title, company, url, className}) => {
  const label = company ? `${title} at ` : title

  if (company && url) {
    return (
      <span className={className}>
        {label}
        <LinkExternal url={url} variant="muted">
          <span className={className}>{company}</span>
        </LinkExternal>
      </span>
    )
  }

  if (company) {
    return (
      <span className={className}>
        {label}
        {company}
      </span>
    )
  }

  return <span className={className}>{title}</span>
}

const SectionPositions: FC<Pick<CVSection, 'positions'>> = props => (
  <div className="flex flex-col flex-shrink-0 h-full gap-[10px] relative">
    <Segments positions={props.positions} />
    {props.positions.map((position, index) => (
      <div key={index.toString()} data-cv-reveal="true" className="h-[17px]">
        <PositionLabel
          {...position}
          className={cn(
            'font-normal text-[14px] leading-[100%] tracking-[0px]',
            variant[index === 0 ? 'active' : 'inactive']
          )}
        />
      </div>
    ))}
  </div>
)

const SectionLocation: FC<Pick<CVSection, 'location'>> = props => {
  if (!props.location) {
    return null
  }

  return (
    <div>
      <span
        data-cv-reveal="true"
        className="block font-normal text-[14px] leading-[100%] tracking-[0px] text-neutral-600 h-[17px]"
      >
        {props.location}
      </span>
    </div>
  )
}

const SectionTechnologies: FC<Pick<CVSection, 'technologies'> & {className?: string}> = props => {
  if (!props.technologies || props.technologies.length === 0) {
    return null
  }

  return (
    <div>
      <span
        data-cv-reveal="true"
        className={classNames(
          'block font-normal text-[14px] leading-[100%] tracking-[0px] text-neutral-500 h-[17px]',
          props.className
        )}
      >
        {props.technologies.join(', ')}
      </span>
    </div>
  )
}

const SectionParagraph: FC<{children: ReactNode}> = ({children}) => (
  <p className="block font-normal text-[14px] leading-[22px] tracking-[0px] text-neutral-500">{children}</p>
)

const SectionLink: FC<CVSectionLink> = ({name, url}) => (
  <div>
    <a
      href={url}
      target="_blank"
      className="block font-normal text-[14px] leading-[22px] tracking-[0px] text-neutral-500 underline decoration-neutral-900/20 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/40 transition-colors duration-500 ease-out"
    >
      {name}
    </a>
  </div>
)

const SectionLinks: FC<Pick<CVSection, 'links'>> = ({links}) => {
  if (!links || links.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-[24px] pt-[24px]">
      {links.map((link, index) => (
        <SectionLink key={index.toString()} {...link} />
      ))}
    </div>
  )
}

const SectionTitle: FC<Pick<CVSection, 'positions' | 'location' | 'technologies'>> = ({
  positions,
  location,
  technologies,
}) => (
  <div className="flex flex-col gap-[6px] pb-[24px]">
    <SectionPositions positions={positions} />
    <SectionLocation location={location} />
    <SectionTechnologies technologies={technologies} />
  </div>
)

const SectionProject: FC<CVSectionProject> = ({
  name,
  suffix,
  secondaryName,
  secondaryUrl,
  position,
  technologies,
  paragraphs,
  url,
}) => (
  <div>
    <div className="flex flex-col gap-[2px] pb-[2px]">
      <div
        data-cv-reveal="true"
        className="block font-normal text-[14px] leading-[22px] tracking-[0px] text-neutral-800"
      >
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.('event', 'project_click', {
                label: name,
                destination: url,
              })
            }}
            className="underline decoration-neutral-900/20 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/40 transition-colors duration-300 ease-in-out"
          >
            {name}
          </a>
        ) : (
          <span>{name}</span>
        )}

        {secondaryName && secondaryUrl ? (
          <>
            <span> - </span>
            <a
              href={secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.gtag?.('event', 'project_click', {
                  label: secondaryName,
                  destination: secondaryUrl,
                })
              }}
              className="underline decoration-neutral-900/20 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/40 transition-colors duration-300 ease-in-out"
            >
              {secondaryName}
            </a>
          </>
        ) : null}

        {suffix ? <span>{suffix}</span> : null}
      </div>

      {position ? <span className="text-[14px] text-neutral-600">{position}</span> : null}

      {technologies?.length ? <SectionTechnologies technologies={technologies} /> : null}
    </div>

    <div className="flex flex-col gap-[12px]">
      {paragraphs.map((paragraph, index) => (
        <div key={index.toString()} data-cv-reveal="true">
          <SectionParagraph>{paragraph}</SectionParagraph>
        </div>
      ))}
    </div>
  </div>
)

const SectionProjects: FC<Pick<CVSection, 'projects'>> = ({projects}) => {
  if (!projects || projects.length === 0) return null

  return (
    <div className="flex flex-col gap-[20px] pt-[8px]">
      {projects.map((project, index) => (
        <SectionProject key={index.toString()} {...project} />
      ))}
    </div>
  )
}

const SectionRight: FC<Omit<CVSection, 'year'>> = ({paragraphs, positions, location, technologies, projects, links}) => (
  <div>
    <SectionTitle positions={positions} location={location} technologies={technologies} />

    <div className="flex flex-col gap-[24px]">
      {paragraphs.map((paragraph, index) => (
        <div key={index.toString()} data-cv-reveal="true">
          <SectionParagraph>{paragraph}</SectionParagraph>
        </div>
      ))}
    </div>

    <SectionProjects projects={projects} />
    <SectionLinks links={links} />
  </div>
)

const Section = ({year, ...props}: CVSection) => (
  <div className="flex flex-col md:flex-row w-full items-start gap-[24px] md:gap-[44px]" data-cv-section="true">
    <SectionLeft year={year} />
    <SectionRight {...props} />
  </div>
)

const SectionItem: FC<{name?: string; url?: string; type: string}> = ({name, url, type}) => (
  <div className="flex items-center">
    <span className="text-neutral-500 w-[70px] mr-[36px] text-[14px]">{type}</span>
    {url ? (
      <LinkExternal url={url}>
        <span className="text-[14px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent">
          {name}
        </span>
      </LinkExternal>
    ) : (
      <span className="text-[14px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent">
        {name}
      </span>
    )}
  </div>
)

const SectionConnect: FC = () => (
  <div className="flex flex-col gap-[19px]">
    {cv.connect.map(connect => (
      <SectionItem key={connect.type} {...connect} />
    ))}
  </div>
)

const SectionLanguagesAndLocations: FC = () => (
  <div className="flex flex-row gap-[51px] flex-wrap">
    <div className="flex flex-col gap-[56px]">
      <h1 className="text-[14px] text-neutral-900">Languages</h1>
      <div className="flex flex-col gap-[19px]">
        <SectionItem type="Native" name="Slovak" />
        <SectionItem type="Native" name="Czech" />
        <SectionItem type="C1" name="English" />
      </div>
    </div>

    <div className="flex flex-1" />

    <div className="flex flex-col gap-[56px]">
      <h1 className="text-[14px] text-neutral-900">Locations</h1>
      <div className="flex flex-col gap-[19px]">
        <SectionItem type="Based in" name="Prague, Czechia" />
        <SectionItem type="Raised in" name="Lúčka, Slovakia" />
      </div>
    </div>
  </div>
)

export const CV: FC = () => {
  const workExperience = cv.workExperience
  const sideProjects = cv.sideProjects

  return (
    <div className="max-w-[572px] flex flex-col gap-[56px]">
      <h1 className="text-[14px] text-neutral-900">Work Experience</h1>

      {workExperience.map((section, index) => (
        <Section key={index} {...section} />
      ))}

      <h1 className="text-[14px] text-neutral-900">Side Projects</h1>

      {sideProjects.map((section, index) => (
        <Section key={index} {...section} />
      ))}

      <h1 className="text-[14px] text-neutral-900">Connect</h1>
      <SectionConnect />

      <SectionLanguagesAndLocations />

      <div data-cv-section="true" className="flex justify-center">
        <LinkExternal url="/pdf/cv.pdf" trackingCategory="cv_download" trackingName="Download CV in PDF">
          <span
            data-cv-reveal="true"
            className="text-[14px] font-normal tracking-[0px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent"
          >
            Download CV in PDF
          </span>
        </LinkExternal>
      </div>
    </div>
  )
}