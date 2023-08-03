import { create } from 'zustand'

import { devtools, persist, createJSONStorage } from 'zustand/middleware'

interface State {
  collapsed: boolean
  lang: string
  token: string
  refreshToken: string
  darkMode: string
}

interface Action {
  setCollapsed: (collapsed: State['collapsed']) => void
}

export const useGlobalStore = create<State & Action>()(
  devtools(
    persist(
      set => {
        return {
          collapsed: false,
          lang: 'zh',
          darkMode: '',
          token: '',
          refreshToken: '',
          setCollapsed: (collapsed: State['collapsed']) =>
            set({
              collapsed
            })
        }
      },
      {
        name: 'globalStore',
        storage: createJSONStorage(() => localStorage)
      }
    ),
    { name: 'globalStore' }
  )
)
