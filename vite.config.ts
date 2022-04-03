import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        linterPlugin({
            include: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
            linters: [
                new EsLinter({
                    configEnv: configEnv,
                    serveOptions: { clearCacheOnStart: true }
                }),
                new TypeScriptLinter()
            ],
            build: { includeMode: 'filesInFolder' }
        })
    ],
    build: { outDir: 'build' }
}));
