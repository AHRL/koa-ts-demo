import development from './development'
import production from './production'
const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? production : development

Object.keys(env.mongo).forEach(key => {
  env.mongo[key] = process.env[key] || env.mongo[key]
})

export const Environment = env