function matchRoute(path?: string) {
  switch (true) {
    case path === '/':
      return { name: 'root', params: {} }
    case path && path.startsWith('/story/'): {
      const parts = path ? path.split('/') : []
      return {
        name: 'root',
        params: {
          storyName: parts[2],
          patternIndex: parseInt(parts[3]) || 0,
        },
      }
    }
    case path && path.startsWith('/stage/'): {
      const parts = path ? path.split('/') : []
      return {
        name: 'stage',
        params: {
          storyName: parts[2],
          patternIndex: parseInt(parts[3]) || 0,
        },
      }
    }
    default:
      return { name: null }
  }
}

export default matchRoute
