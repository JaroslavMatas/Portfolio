import Image from 'next/image'
import {FC} from 'react'

import {EntryShot, EntryShotProperty} from '@/db'
import {shotImageSizesProp} from '@/utils'

import {LoopVideo} from './loop-video'
import {Modal} from './modal'

export type CardShotModalProps = Pick<
  EntryShot,
  'title' | 'image' | 'description' | 'properties' | 'videos' | 'size'
> & {
  isOpen: boolean
  onClose: () => void
}

const ShotProperty: FC<EntryShotProperty> = ({name, value, url}) => (
  <div className="flex flex-row py-6">
    <div className="flex-1">
      <span className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-white/50 leading-[100%]">
        {name}
      </span>
    </div>
    <div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-neutral-900 leading-[100%] underline decoration-neutral-900/35 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/55 transition-colors duration-500 ease-out"
        >
          {value}
        </a>
      )}
      {!url && (
        <span className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-neutral-900 leading-[100%]">
          {value}
        </span>
      )}
    </div>
  </div>
)

export const CardShotModal: FC<CardShotModalProps> = ({
  properties,
  title,
  description,
  image,
  onClose,
  isOpen,
  videos,
  size,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="px-[20px] md:px-8 pt-[20px] md:pt-8 pb-2">
      <div className="relative w-full h-[250px] md:h-[336px] rounded-[28px] md:rounded-[20px] flex justify-center items-center overflow-hidden border-[0.75px] border-neutral-900/12">
        <Image src={image} alt="shot" fill sizes={shotImageSizesProp(size)} style={{objectFit: 'cover'}} />
        {videos && (
          <div className="absolute inset-0 overflow-hidden">
            <LoopVideo srcMp4={videos.mp4} srcWebm={videos.webm} poster={image} />
          </div>
        )}
      </div>
      <div>
        <div>
          <h2 className="text-[16px] font-normal tracking-normal align-middle mt-[40px] text-neutral-900 leading-[100%]">
            {title}
          </h2>
          <p className="text-[15px] md:text-[16px] font-normal tracking-normal align-middle mt-[8px] mb-[24px] text-neutral-500 leading-[20px]">
            {description}
          </p>
        </div>
        <div>
          {properties.map((item, index) => (
            <div key={item.name}>
              <ShotProperty {...item} />
              {properties.length - 1 > index && <div className="h-[1px] w-full bg-neutral-900/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Modal>
)
