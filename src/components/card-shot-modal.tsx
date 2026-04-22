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
      <span className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-neutral-600 leading-[100%]">
        {name}
      </span>
    </div>
    <div>
      {url && (
        <a
          href={url}
          target="_blank"
          className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-neutral-800 leading-[100%] underline decoration-neutral-900/35 decoration-[1.5px] underline-offset-4 hover:decoration-neutral-900/55 transition-colors duration-500 ease-out"
        >
          {value}
        </a>
      )}
      {!url && (
        <span className="text-[14px] md:text-[15px] font-normal tracking-normal align-middle text-neutral-800 leading-[100%]">
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
}) => {
  const isTall = size === 'tall'
  const isWide = size === 'wide'

  // ---------------- TALL ----------------
  if (isTall) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} variant="wide">
        <div className="px-[20px] md:px-8 pt-[20px] md:pt-8 pb-[20px] md:pb-8">
          <div className="flex flex-col md:grid md:grid-cols-[405px_minmax(0,1fr)] md:gap-8 md:items-start">
            <div className="flex justify-center">
              <div className="relative h-[420px] md:h-[720px] aspect-[9/16] rounded-[28px] flex justify-center items-center overflow-hidden border-[0.75px] border-neutral-900/12 bg-neutral-100">
                {videos ? (
                  <div className="absolute inset-0 overflow-hidden">
                    <LoopVideo srcMp4={videos.mp4} srcWebm={videos.webm} poster={image} fit="cover" />
                  </div>
                ) : (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes={shotImageSizesProp(size)}
                    style={{objectFit: 'contain'}}
                  />
                )}
              </div>
            </div>

            <div className="pt-[28px] md:pt-0">
              <h2 className="text-[16px] text-neutral-900">{title}</h2>
              <p className="text-[15px] md:text-[16px] mt-[8px] mb-[24px] text-neutral-700 leading-[20px]">
                {description}
              </p>

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
  }

  // ---------------- WIDE ----------------
  if (isWide) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} variant="wide">
        <div className="px-[20px] md:px-8 pt-[20px] md:pt-8 pb-2">
          
          {/* CENTERED + LIMITED WIDTH */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-[1600/586] rounded-[28px] md:rounded-[24px] flex justify-center items-center overflow-hidden border-[0.75px] border-neutral-900/12 bg-neutral-100">
              {videos ? (
                <div className="absolute inset-0 overflow-hidden">
                  <LoopVideo srcMp4={videos.mp4} srcWebm={videos.webm} poster={image} fit="cover" />
                </div>
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes={shotImageSizesProp(size)}
                  style={{objectFit: 'cover'}}
                />
              )}
            </div>
          </div>

          <div>
            <h2 className="text-[16px] mt-[40px] text-neutral-900">{title}</h2>
            <p className="text-[15px] md:text-[16px] mt-[8px] mb-[24px] text-neutral-700 leading-[20px]">
              {description}
            </p>

            {properties.map((item, index) => (
              <div key={item.name}>
                <ShotProperty {...item} />
                {properties.length - 1 > index && <div className="h-[1px] w-full bg-neutral-900/10" />}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    )
  }

  // ---------------- DEFAULT (SMALL/LARGE) ----------------
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="px-[20px] md:px-8 pt-[20px] md:pt-8 pb-2">
        <div className="relative w-full h-[250px] md:h-[336px] rounded-[28px] md:rounded-[20px] flex justify-center items-center overflow-hidden border-[0.75px] border-neutral-900/12">
          {videos ? (
            <div className="absolute inset-0 overflow-hidden">
              <LoopVideo srcMp4={videos.mp4} srcWebm={videos.webm} poster={image} />
            </div>
          ) : (
            <Image src={image} alt="shot" fill sizes={shotImageSizesProp(size)} style={{objectFit: 'cover'}} />
          )}
        </div>

        <h2 className="text-[16px] mt-[40px] text-neutral-900">{title}</h2>
        <p className="text-[15px] md:text-[16px] mt-[8px] mb-[24px] text-neutral-700 leading-[20px]">
          {description}
        </p>

        {properties.map((item, index) => (
          <div key={item.name}>
            <ShotProperty {...item} />
            {properties.length - 1 > index && <div className="h-[1px] w-full bg-neutral-900/10" />}
          </div>
        ))}
      </div>
    </Modal>
  )
}