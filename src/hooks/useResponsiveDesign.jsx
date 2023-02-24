import React from 'react'
import { useWindowSize } from './useWindowSize'

const useResponsiveDesign = () => {
  const {width} = useWindowSize()
  const isMobile = width <= 460
  const isTablet = width >= 768 && width <= 1024
  const isDesktop = width >= 1200
  const isBigScreen = width >= 1900
  return {width, isMobile, isTablet, isDesktop, isBigScreen}
}

export default useResponsiveDesign