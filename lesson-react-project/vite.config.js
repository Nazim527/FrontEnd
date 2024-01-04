import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default {
  server: {
    host: '0.0.0.0', // Yerel sunucunun hangi IP adresinde çalışacağını belirleyin (örneğin, herkes için erişilebilir yapmak istiyorsanız '0.0.0.0' kullanabilirsiniz).
    port: 5000, // Yerel sunucunun hangi portta çalışacağını belirleyin.
  },
}