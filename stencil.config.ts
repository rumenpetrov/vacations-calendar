import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3001,
    basePath: '/vacations-calendar/',
  },
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      // serviceWorker: null,
      // baseUrl: `https://${process.env.BASE_PATH}`,
      // resourcesUrl: `https://${process.env.BASE_PATH}`,
      // baseUrl: `https://rumenpetrov.github.io/vacations-calendar/`,
      // resourcesUrl: `https://rumenpetrov.github.io/vacations-calendar/`,
      // prerenderConfig: './prerender.config.ts',
      // copy: [
      //   {
      //     src: '**/*.{jpg,png}',
      //     dest: 'dist/components/assets',
      //     warn: true,
      //   }
      // ],
    },
  ],
  plugins: [
    dotenvPlugin()
  ]
};
