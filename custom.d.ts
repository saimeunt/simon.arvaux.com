declare namespace NodeJS {
  interface ProcessEnv {
    // system
    readonly NODE_ENV: 'development' | 'production';
    readonly VERCEL_ENV: 'development' | 'preview' | 'production';
    readonly VERCEL_GIT_COMMIT_REF: string;
    readonly VERCEL_URL: string;
    // private
    readonly MAILJET_API_KEY: string;
    readonly MAILJET_API_SECRET: string;
    readonly RECAPTCHA_SECRET_KEY: string;
    // public
    readonly NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
  }
}
