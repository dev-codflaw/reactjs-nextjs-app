// const dev = process.env.NODE_ENV !== 'production'

const dev = false

export const server = dev ? 'http://localhost:8000' : 'https://cms.codflaw.com'
