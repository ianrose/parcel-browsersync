/**
 * Require Browsersync
 */
const browserSync = require('browser-sync');

/**
 * Run Browsersync with server config
 */
browserSync({
    server: "dist",
    files: ["dist/*.html", "dist/*.css", "dist/*js"]
});