import { envSchema } from "./validations"

const envParsed = envSchema.safeParse(process.env)

if (!envParsed.success) {
  console.error("❌ Invalid environment variables:", envParsed.error.format())
  throw new Error("Invalid environment variables")
}

export const env = envParsed.data

// [dev-log-sync]: 21727bd054e1027f