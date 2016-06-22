const Merge = require('broccoli-merge-trees');
const Sass = require('broccoli-sass');
const LiveReload = require('broccoli-inject-livereload');

let pubFiles = new LiveReload('public');

if (process.env.EMBER_ENV === 'production') {
  pubFiles = 'public';
}

const stylePaths = [
  'styles',
  'node_modules/normalize-css',
  'node_modules/font-awesome/scss',
  'node_modules/yoga-sass/assets',
];

const styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge([pubFiles, styles]);
