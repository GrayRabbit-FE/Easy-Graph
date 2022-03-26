import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import css from "rollup-plugin-import-css";
export default {
    input: 'src/index.ts',
    external: /(node_modules\/)/,
    output: {
        file: 'dist/index.js',
        format: 'esm',
        name: 'dist'
    },
    sourceMap: 'inline',
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                "react": ["createContext", "useState", "useContext", "useMemo", "useRef"],
            },
        }),
        postcss({
            extensions: ['.css']
        }),
        css(),
        typescript(),

    ]
};