import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import {
  AntDesignVueResolver,
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default (): UserConfigExport => {
  return {
    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // 1. If you are using the ant-design series, you need to configure this
    // 2. Make sure less is installed in the dependency `yarn add less -D`
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      Components({
        dts: true,
        resolvers: [
          AntDesignVueResolver(),
          ElementPlusResolver()
        ],
      })
    ],
    server: {
      port: 8080, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 8080
      },
      // 设置 https 代理
      // proxy: {
      //     '/api': {
      //         target: 'your https address',
      //         changeOrigin: true,
      //         rewrite: (path: string) => path.replace(/^\/api/, '')
      //     }
      // }
    }
  }
}