import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // baseUrl: `${process.env.BASE_PATH}`,
      // resourcesUrl: `${process.env.BASE_PATH}`,
      baseUrl: `https://rumenpetrov.github.io`,
      resourcesUrl: `https://rumenpetrov.github.io/vacations-calendar`,
      prerenderConfig: './prerender.config.ts',
    },
  ],
  plugins: [
    dotenvPlugin()
  ]
};
