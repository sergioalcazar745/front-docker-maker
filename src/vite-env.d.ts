/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ID: string
  readonly VITE_AUTHORITY: string
  readonly VITE_REDIRECT_URI: string
  readonly VITE_GRAPH_ENDPOINT: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
