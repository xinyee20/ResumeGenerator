/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_SERVER_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
