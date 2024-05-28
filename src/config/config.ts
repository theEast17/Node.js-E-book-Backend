import {config as conf} from 'dotenv'
conf()

const _config={
    port:process.env.PORT,
    database_url:process.env.DATABASE_ENV
}

export const config=Object.freeze(_config)