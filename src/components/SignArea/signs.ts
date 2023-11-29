import type { SignProps } from './Sign'

export const SIGNS: SignProps[] = [
  {
    textContent: 'Welcome',
    borderColor: '#4F96B9',
    parallaxSpeed: 10,
    cssTop: '24vh',
    cssLeft: '2vw'
  },
  {
    textContent: '完全に',
    borderColor: '#932B8E',
    parallaxSpeed: 20,
    cssTop: '40vh',
    cssRight: '10vw'
  }
  // TODO: Add more signs according to the Figma.
]
