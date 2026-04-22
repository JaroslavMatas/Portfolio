import {Config} from '@/config'

export const CardMapCity = () => (
  <div className="absolute left-[16px] bottom-[16px] z-20 pointer-events-none">
    <div className="px-3 py-1.5 rounded-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] backdrop-blur-[4px] bg-white/85">
      <span className="text-[14px] font-medium leading-[24px] tracking-[0px] text-neutral-700">
        {Config.location.city}
      </span>
    </div>
  </div>
)