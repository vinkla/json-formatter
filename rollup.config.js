import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-cpy';
import cssnano from 'cssnano';
import filesize from 'rollup-plugin-filesize';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'build/content.js',
    format: 'iife'
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    copy({
      dest: 'build',
      files: [
        'src/icon.png',
        'src/manifest.json'
      ]
    }),
    postcss({
      inject: false,
      plugins: [
        cssnano()
      ]
    }),
    (isProduction && terser()),
    (isProduction && filesize())
  ]
};
