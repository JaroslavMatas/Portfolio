import {
  CardContact,
  CardCV,
  CardGallery,
  CardMap,
  CardProfile,
  CardShot,
  CardTechnologies,
  IntroOverlay,
} from '@/components'
import {CardAbout} from '@/components/card-about'
import {CardPainting} from '@/components/card-painting'
import { entries } from '@/db'
import { CameraProvider, IntroProvider } from '@/providers'

export default async function Home() {
  return (
    <IntroProvider>
      <CameraProvider>
        {entries.map(entry => {  
          switch (entry.variant) {
            case 'contact':
              return <CardContact key={entry.area} {...entry} />
            case 'cv':
              return <CardCV key={entry.area} {...entry} />
            case 'gallery':
              return <CardGallery key={entry.area} {...entry} />
            case 'map':
              return <CardMap key={entry.area} {...entry} />
            case 'profile':
              return <CardProfile key={entry.area} {...entry} />
            case 'shot':
              return <CardShot key={entry.area} {...entry} />
            case 'technologies':
              return <CardTechnologies key={entry.area} {...entry} />
            case 'about':
              return <CardAbout key={entry.area} {...entry} />
            case 'painting':
              return <CardPainting key={entry.area} {...entry} />
          }
        })}
      </CameraProvider>
      <IntroOverlay />
    </IntroProvider>
  )
}
