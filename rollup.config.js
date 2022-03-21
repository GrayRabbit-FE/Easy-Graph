import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
export default {
    input: 'src/index.ts',
    external: /(node_modules\/)/,
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'dist'
    },
    plugins: [resolve(), typescript(), commonjs({
        include: 'node_modules/**',
        namedExports: {
            "react": ["createContext", "useState", "useContext"],
        },
    })]
};