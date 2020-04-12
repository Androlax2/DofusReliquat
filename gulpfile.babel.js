import { src, dest, watch, series, parallel } from 'gulp';
import del from 'del';
import named from 'vinyl-named';
import webpack from 'webpack-stream';

/**
 * Task for scripts
 */
export const scripts = () => {
    return src(['src/js/app.js'])
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            mode: 'development',
            devtool: 'inline-source-map',
            output: {
                filename: '[name].js'
            },
        }))
        .pipe(dest('dist/js'));
};

/**
 * Task to clean the dist folder
 */
export const clean = () => del(['dist']);

/**
 * Watch for changes and start the task needed
 */
export const watchForChanges = () => {
    watch('src/js/**/*.js', series(scripts));
};

/**
 * Commands
 */
export const dev = series(clean, parallel(scripts), watchForChanges);
export default dev;