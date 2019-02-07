# sanity-web-react-components

Shared React components for web apps on Sanity.io.

> NOTE: this project is at a very early stage. API and scope will change.

```sh
npm install sanity-web-react-components
```

[![npm version](https://img.shields.io/npm/v/sanity-web-react-components.svg?style=flat-square)](https://www.npmjs.com/package/sanity-web-react-components)

## Development

```sh
git clone git@github.com:sanity-io/sanity-web-react-components.git
cd sanity-web-react-components
npm install
npm run dev
# Open http://localhost:8080
```

Build JS and CSS to `dist/`:

```sh
npm run build
```

## Documentation

### `<Avatar />`

| Property | Type                             | Required |
| -------- | -------------------------------- | -------- |
| `image`  | `{src: string, alt: string}`     | No       |
| `size`   | `"small" \| "normal" \| "large"` | No       |

```jsx
import { Avatar } from 'sanity-web-react-components'

const vdom = <Avatar image={{ src: 'image.png', alt: 'Image' }} size="large" />
```

### `<Button />`

| Property   | Type                                        | Required              |
| ---------- | ------------------------------------------- | --------------------- |
| `type`     | `"button" \| "reset" \| "submit" \| "link"` | No                    |
| `onClick`  | `Function`                                  | No                    |
| `disabled` | `Boolean`                                   | No                    |
| `href`     | `String`                                    | Only if `type="link"` |

```jsx
import { Button } from 'sanity-web-react-components'

const vdom = <Button>Push button</Button>
```

### `<Code />`

| Property   | Type                                                                                          | Required |
| ---------- | --------------------------------------------------------------------------------------------- | -------- |
| `code`     | `String`                                                                                      | Yes      |
| `language` | `"css" \| "html" \| "markdown" \| "javascript" \| "json" \| "jsx" \| "php" \| "text" \| "sh"` | Yes      |

```jsx
import { Code } from 'sanity-web-react-components'

const vdom = <Code language="javascript" code={`console.log('Hello, world!')`} />
```

### `<Icon />`

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `symbol` | `"hamburger"` | Yes      |

```jsx
import { Icon } from 'sanity-web-react-components'

const vdom = <Icon symbol="hamburger" />
```

### `<SanityLogo />`

```jsx
import { SanityLogo } from 'sanity-web-react-components'

const vdom = <SanityLogo />
```

### `<ServiceConnect />`

| Property      | Type     | Required |
| ------------- | -------- | -------- |
| `title`       | `string` | Yes      |
| `description` | `string` | Yes      |
| `status`      | `any`    | Yes      |

```jsx
import { ServiceConnect } from 'sanity-web-react-components'

const vdom = (
  <ServiceConnect
    title="Connect to GitHub"
    description="We need to connect your account to GitHub"
    status="Not connected"
  />
)
```

### `<SiteFooter />`

| Property       | Type                                 | Required |
| -------------- | ------------------------------------ | -------- |
| `systemStatus` | `"partially-down" \| "down" \| "up"` | No       |

```jsx
import { SiteFooter } from 'sanity-web-react-components'

const vdom = <SiteFooter systemStatus="up" />
```

### `<SiteHeader />`

| Property     | Type       | Required                  |
| ------------ | ---------- | ------------------------- |
| `onHideNav`  | `Function` | Yes                       |
| `onShowNav`  | `Function` | Yes                       |
| `renderLink` | `Function` | No                        |
| `showNav`    | `Boolean`  | Yes                       |
| `siteTitle`  | `String`   | No (defaults to "Sanity") |

```jsx
import { useState } from 'react'
import { SiteHeader } from 'sanity-web-react-components'

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <SiteHeader
      onHideNav={() => setShowNav(false)}
      onShowNav={() => setShowNav(true)}
      showNav={showNav}
    />
  )
}
```

### `<SuggestSearch />`

| Property          | Type       | Required |
| ----------------- | ---------- | -------- |
| `name`            | `string`   | Yes      |
| `hasResults`      | `boolean`  | No       |
| `id`              | `string`   | No       |
| `query`           | `string`   | No       |
| `onFocus`         | `Function` | No       |
| `onQueryChange`   | `Function` | Yes      |
| `open`            | `boolean`  | No       |
| `placeholder`     | `string`   | Yes      |
| `results`         | `any`      | No       |
| `setInputElement` | `Function` | No       |

```jsx
import { SuggestSearch } from 'sanity-web-react-components'

const vdom = <SuggestSearch name="q" onQueryChange={() => {}} placeholder="Search docs" />
```

## License

MIT © [Sanity.io](https://www.sanity.io)
