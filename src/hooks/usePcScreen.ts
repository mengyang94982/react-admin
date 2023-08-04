import { useMedia } from 'react-use'

export const usePcScreen = () => {
  const isPc = useMedia('(min-width:1024px)')
  return isPc
}
