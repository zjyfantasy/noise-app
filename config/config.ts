import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  keepalive: [/list/],
  // aconsole: {
  //   console: {},
  //   inspx: {},
  // },
  mobileLayout: 'mobile5',
  mfsu: {},
  hash: false,
  npmClient: 'yarn',
  define: {
    BASE_URL: 'http://121.40.190.180', // 后端api地址
  },
  proxy: {
    '/v2': {
      target: 'http://121.40.190.180/',
      changeOrigin: true,
      pathRewrite: { '^/v2': '' },
    },
  },
});
