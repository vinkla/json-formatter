import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  json(),
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  }),
  (process.env.NODE_ENV === 'production' && terser())
];

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'build/content.js',
      format: 'iife'
    },
    plugins
  },
  {
    input: 'src/background.js',
    output: {
      file: 'build/background.js',
      format: 'iife'
    },
    plugins
  },
];