import { themes } from '@storybook/components'

const brandColor = '#f04a39'

export const sanity = {
  ...themes.normal,
  mainTextFace: '"Inter var", sans-serif',
  mainBackground: '#fff',
  brand: {
    background:
      'url("https://cdn.sanity.io/images/3do82whm/production/51af00784c5addcf63ae7f0c416756acca7e63ac-353x71.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 1rem',
    backgroundPosition: 'left center',
  },
  storiesNav: {
    backgroundColor: '#fff',
  },
  brandLink: {
    border: 'none',
    paddingLeft: '5.5rem',
    fontSize: '0.4rem',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  inputFill: '#eee',
  barSelectedColor: brandColor,
  activeMenuLink: {
    background: 'none',
    color: brandColor,
  },
  filter: {
    backgroundColor: '#f3f3f3',
  },
}
