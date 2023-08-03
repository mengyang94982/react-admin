import React, { useMemo } from 'react'
import { Icon } from '@iconify/react'

interface SvgIconProps {
  icon?: string
  localIcon?: string
  className?: string
  style?: object
}

const SvgIcon = (props: SvgIconProps) => {
  const { icon, localIcon, className, style } = props
  const renderLocalIcon = useMemo(() => Boolean(localIcon || !icon), [localIcon, icon])
  const symbolId = useMemo(() => {
    const { VITE_ICON_LOCAL_PREFIX: preffix } = import.meta.env
    const defaultLocalIcon = 'no-icon'
    const icons = localIcon || defaultLocalIcon
    return `#${preffix}-${icons}`
  }, [localIcon])
  return (
    <>
      {renderLocalIcon ? (
        <svg
          aria-hidden="true"
          width="1em"
          height="1em"
          className={className}
          style={style}
        >
          <use
            xlinkHref={symbolId}
            fill="currentColor"
          />
        </svg>
      ) : icon ? (
        <Icon
          icon={icon}
          className={className}
          style={style}
        />
      ) : null}
    </>
  )
}

//
export default SvgIcon
