import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import filesize from 'rollup-plugin-filesize';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

const isProduction = process.env.NODE_ENV === 'production';

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
    babel({
      exclude: 'node_modules/**'
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
