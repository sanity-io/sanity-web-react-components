// Placeholder which barely makes sense. Needs some work.
// http://highlightjs.readthedocs.io/en/latest/language-guide.html

function groq(hljs: any) {
  const GROQ_KEYWORDS = {
    keyword: '&& || | [ ] { } ( ) > < == >= <= order path match asc desc references defined',
    literal: 'true false',
  }

  const GROQ_DEFAULT_CONTAINS = [
    hljs.C_LINE_COMMENT_MODE,
    {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE],
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }],
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0,
    },
    {
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))', // variables
    },
    {
      className: 'params',
      begin: /\|/,
      end: /\|/,
      keywords: GROQ_KEYWORDS,
    },
  ]

  return {
    case_insensitive: true, // eslint-disable-line camelcase
    aliases: ['groq'],
    keywords: GROQ_KEYWORDS,
    illegal: /\/\*/,
    contains: GROQ_DEFAULT_CONTAINS,
  }
}

export default groq
