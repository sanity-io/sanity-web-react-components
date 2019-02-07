# API documentation

## `<Avatar />`

| Property | Type                             | Required |
| -------- | -------------------------------- | -------- |
| `image`  | `{src: string, alt: string}`     | No       |
| `size`   | `"small" \| "normal" \| "large"` | No       |

```jsx
import { Avatar } from 'sanity-web-react-components'

const vdom = <Avatar image={{ src: 'image.png', alt: 'Image' }} size="large" />
```

## `<Button />`

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

## `<Code />`

| Property   | Type                                                                                          | Required |
| ---------- | --------------------------------------------------------------------------------------------- | -------- |
| `code`     | `String`                                                                                      | Yes      |
| `language` | `"css" \| "html" \| "markdown" \| "javascript" \| "json" \| "jsx" \| "php" \| "text" \| "sh"` | Yes      |

```jsx
import { Code } from 'sanity-web-react-components'

const vdom = <Code language="javascript" code={`console.log('Hello, world!')`} />
```

## `<Icon />`

| Property | Type          | Required |
| -------- | ------------- | -------- |
| `symbol` | `"hamburger"` | Yes      |

```jsx
import { Icon } from 'sanity-web-react-components'

const vdom = <Icon symbol="hamburger" />
```

## `<SanityLogo />`

```jsx
import { SanityLogo } from 'sanity-web-react-components'

const vdom = <SanityLogo />
```

## `<ServiceConnect />`

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

## `<SiteFooter />`

| Property       | Type                                 | Required |
| -------------- | ------------------------------------ | -------- |
| `systemStatus` | `"partially-down" \| "down" \| "up"` | No       |

```jsx
import { SiteFooter } from 'sanity-web-react-components'

const vdom = <SiteFooter systemStatus="up" />
```

## `<SiteHeader />`

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

## `<SuggestSearch />`

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
