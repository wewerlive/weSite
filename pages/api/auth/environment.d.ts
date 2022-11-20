/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_SERVER: string;
    EMAIL_FROM: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    TWITTER_CLIENT_ID: string;
    TWITTER_CLIENT_SECRET: string;
    LINKEDIN_CLIENT_ID: string;
    LINKEDIN_CLIENT_SECRET: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}
