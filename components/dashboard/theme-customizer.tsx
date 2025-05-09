'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { useThemeContext } from '@/lib/theme-context'
import { type ProjectType, themePresets } from '@/lib/theme-config'

export function ThemeCustomizer() {
  const { currentTheme, setProjectTheme, applyCustomColors } = useThemeContext()
  const [selectedType, setSelectedType] = useState<ProjectType>('default')
  const [customColor, setCustomColor] = useState('')

  const handleThemeChange = (type: ProjectType) => {
    setSelectedType(type)
    setProjectTheme(type)
  }

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value)
    if (e.target.value) {
      applyCustomColors({ primary: e.target.value })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Theme Customization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Project Type</Label>
            <RadioGroup
              value={selectedType}
              onValueChange={(value) => handleThemeChange(value as ProjectType)}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {Object.entries(themePresets).map(([type, preset]) => (
                <div
                  key={type}
                  className="flex items-center space-x-2 rounded-md border p-4"
                  style={{
                    borderColor: preset.colors.border,
                    backgroundColor: preset.colors.background,
                  }}
                >
                  <RadioGroupItem value={type} id={type} />
                  <Label
                    htmlFor={type}
                    className="flex-1"
                    style={{ color: preset.colors.primary }}
                  >
                    {preset.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Custom Primary Color</Label>
            <div className="flex space-x-2">
              <Input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="w-24"
              />
              <Button
                variant="outline"
                onClick={() => {
                  setCustomColor('')
                  setProjectTheme(selectedType)
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}