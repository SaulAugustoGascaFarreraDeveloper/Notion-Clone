import {drizzle} from "drizzle-orm/postgres-js"
import * as dotnev from 'dotenv'
import * as schema from "../../../migrations/schema"
import postgres from 'postgres'
import {migrate} from "drizzle-orm/postgres-js/migrator"

dotnev.config({path:'.env'})

if(!process.env.DATABASE_URL)
{
    console.log("Cannot Find Database URL 🍎 ")
}

const client = postgres(process.env.DATABASE_URL as string,{max: 1})
const db = drizzle(client,{schema})

const migrateDB = async () => {

    try{
        console.log("Migrating Client 🧡 ")

        await migrate(db,{migrationsFolder:"migrations"})

        console.log('Succesfully Migrated 🍏 ')


    }catch(error)
    {
        console.log("Error Migrationg Client")
    }
   
}

migrateDB()

export default db