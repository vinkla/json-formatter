import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import clean from 'postcss-clean';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import size from 'rollup-plugin-size';

const isProduction = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bason.js',
    format: 'iife',
  },
  plugins: [
    json(),
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/icon.png', dest: 'build' },
        { src: 'src/manifest.json', dest: 'build' },
      ],
    }),
    postcss({
      inject: false,
      plugins: [clean()],
    }),
    isProduction && terser(),
    isProduction && size(),
  ],
};
