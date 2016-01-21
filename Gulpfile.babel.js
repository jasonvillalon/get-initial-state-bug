import fs from "fs"
import gulp from "gulp"
import gulpPlugins from "gulp-load-plugins"
import runSequence from "run-sequence"

let $ =  gulpPlugins()

gulp.task("default", () => {
  return runSequence("serve", "watch")
})

// Serve
gulp.task("serve", function() {
  return $.connect.server({
    root: ".",
    livereload: true,
    middleware: function() {
      return [
        require("connect-history-api-fallback")(),
      ]
    }
  })
})

// Watch
gulp.task("watch", function() {
  gulp.watch(["./index.html"], function() {
    return gulp.src("./index.html").pipe($.connect.reload())
  })

  gulp.watch(["./src/**/*.js*"], function() {
    return gulp.src("./src/**/*.js*").pipe($.connect.reload())
  })
})
