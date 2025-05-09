export type ThemePreset = {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    border: string
  }
  type: 'light' | 'dark'
}

export type ProjectType = 'development' | 'design' | 'marketing' | 'default'

export const themePresets: Record<ProjectType, ThemePreset> = {
  development: {
    name: 'Developer Theme',
    colors: {
      primary: 'hsl(234, 89%, 74%)',
      secondary: 'hsl(234, 39%, 85%)',
      accent: 'hsl(280, 89%, 65%)',
      background: 'hsl(222, 47%, 11%)',
      border: 'hsl(217, 27%, 51%)'
    },
    type: 'dark'
  },
  design: {
    name: 'Designer Theme',
    colors: {
      primary: 'hsl(325, 90%, 66%)',
      secondary: 'hsl(325, 40%, 85%)',
      accent: 'hsl(258, 90%, 66%)',
      background: 'hsl(0, 0%, 100%)',
      border: 'hsl(325, 25%, 85%)'
    },
    type: 'light'
  },
  marketing: {
    name: 'Marketing Theme',
    colors: {
      primary: 'hsl(150, 84%, 67%)',
      secondary: 'hsl(150, 40%, 85%)',
      accent: 'hsl(180, 84%, 67%)',
      background: 'hsl(0, 0%, 100%)',
      border: 'hsl(150, 25%, 85%)'
    },
    type: 'light'
  },
  default: {
    name: 'Default Theme',
    colors: {
      primary: 'hsl(221.2, 83.2%, 53.3%)',
      secondary: 'hsl(215, 20.2%, 65.1%)',
      accent: 'hsl(210, 40%, 96.1%)',
      background: 'hsl(0, 0%, 100%)',
      border: 'hsl(214.3, 31.8%, 91.4%)'
    },
    type: 'light'
  }
}

export const getThemePreset = (projectType: ProjectType): ThemePreset => {
  return themePresets[projectType] || themePresets.default
}