
// import dependencies
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

// extensions
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// export rollup config
export default {
  input  : pkg.source,
  output : [
    {
      file   : pkg.main,
      format : 'cjs',
    },
    {
      file   : pkg.module,
      format : 'esm',
    },
  ],
  plugins : [
    progress(),
    resolve({
      browser : true,
      extensions,
    }),
    commonjs({
      include : [
        'node_modules/**',
      ],
      exclude : [
        'node_modules/process-es6/**',
      ],
    }),
    babel({
      extensions,
      ignore  : [],
      babelrc : true,
      include : ['src/**/*', 'node_modules/**/*'],
    }),
    external(),
    del({
      targets : ['dist/*'],
    }),
  ],

  external : [...Object.keys(pkg.peerDependencies || {})],
};