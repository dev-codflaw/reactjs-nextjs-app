const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:8000' : 'https://cms.codflaw.com'
// export const server = dev ? 'https://cms.codflaw.com' : 'https://cms.codflaw.com'
