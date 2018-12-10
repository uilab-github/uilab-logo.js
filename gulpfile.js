const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

gulp.task('build-babel', () => {
  return gulp.src('src/**/*')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('dev-webpack', () => {
  DevServer.addDevServerEntrypoints(webpackConfig, {
    ...webpackConfig.devServer,
    host: 'localhost',
  });
  const compiler = webpack(webpackConfig);
  const server = new DevServer(compiler, webpackConfig.devServer);
  server.listen(4000, 'localhost', err => {
    if (err) {
      throw err;
    }
    console.log('Dev server is running.');
  });
});

gulp.task('dev', ['dev-webpack']);
gulp.task('build', ['build-babel']);