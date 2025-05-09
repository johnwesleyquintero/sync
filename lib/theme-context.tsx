'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { type ThemePreset, type ProjectType, getThemePreset } from './theme-config'

type ThemeContextType = {
  currentTheme: ThemePreset
  setProjectTheme: (projectType: ProjectType) => void
  applyCustomColors: (colors: Partial<ThemePreset['colors']>) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<ThemePreset>(getThemePreset('default'))

  const setProjectTheme = (projectType: ProjectType) => {
    const preset = getThemePreset(projectType)
    setCurrentTheme(preset)
    setTheme(preset.type)
    applyThemeColors(preset.colors)
  }

  const applyCustomColors = (colors: Partial<ThemePreset['colors']>) => {
    const updatedColors = { ...currentTheme.colors, ...colors }
    setCurrentTheme({ ...currentTheme, colors: updatedColors })
    applyThemeColors(updatedColors)
  }

  const applyThemeColors = (colors: ThemePreset['colors']) => {
    const root = document.documentElement
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })
  }

  useEffect(() => {
    applyThemeColors(currentTheme.colors)
  }, [currentTheme.colors])

  return (
    <ThemeContext.Provider value={{ currentTheme, setProjectTheme, applyCustomColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }
  return context
}