var gulp = require('gulp');
var del = require('del');
var log = require('fancy-log');

var AlloySource = "target/bower_components/alloy-ui/build/**";
var DiagramDest = "src/main/resources/org/vaadin/diagrambuilder/public/diagram-builder/js/diagram/alloyui/build";

gulp.task('clean', function () {
   log.info("CLEANING Diagram Destination folder");
   return del.sync([DiagramDest]);
});

gulp.task('build', ['clean'], function() {
    log.info("COPYING Alloy Source into Diagram Destination");
    return gulp.src(AlloySource)
        .pipe(gulp.dest(DiagramDest));
});