'use client'

import {FC, useRef} from 'react'

import {Contact, EntryContact} from '@/db'
import {useEntranceAnimation} from '@/hooks'
import {LinkExternal} from './link-external'

const DotDivider = () => (
  <div className="w-1 h-1 rounded-[50px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.45)_100%)] shadow-[inset_0_0.5px_0_0_rgba(0,0,0,0.2)] mx-3" />
)

const ContactLink = ({type, url}: Contact) => (
  <LinkExternal url={url}>
    <h3 className="text-[14px] font-normal tracking-[0px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent">
      {type}
    </h3>
  </LinkExternal>
)

export const CardContact: FC<EntryContact> = ({area, contacts, animation}) => {
  const refCard = useRef<HTMLDivElement>(null)
  useEntranceAnimation(refCard, animation)

  return (
    <div
      ref={refCard}
      data-area={area}
      className="w-full shrink-0 flex h-full contain-intrinsic overflow-hidden card z-10"
      style={{gridArea: area, transformStyle: 'preserve-3d'}}
    >
      <div className="flex flex-col w-full grow overflow-hidden h-full items-center justify-center relative">
        <div className="flex flex-row">
          {contacts.map((contact, index) => (
            <div key={contact.type} className="flex flex-row items-center justify-center">
              <ContactLink {...contact} />
              {contacts.length - 1 > index && <DotDivider />}
            </div>
          ))}
        </div>
        <div className="absolute bottom-8">
          <span className="text-[14px] opacity-70 font-normal leading-[100%] tracking-[0px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent">
            Contact
          </span>
        </div>
      </div>
    </div>
  )
}
