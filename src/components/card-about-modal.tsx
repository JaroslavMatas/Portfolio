import {FC} from 'react'

import {About} from './about'
import {Modal} from './modal'

type CardAboutModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const CardAboutModal: FC<CardAboutModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} variant="large">
      <div className="flex flex-col items-center py-[32px] md:py-[56px] px-[32px] md:px-0">
        <About animated />
      </div>
    </Modal>
  )
}