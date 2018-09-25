const gulp = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const settings = {
    dist: 'css', 
    jsdist: 'javascript',
    styles: [ 
        'src/normalize.scss',

        // // Skeleton:
        'src/skeleton/colors.scss',
        'src/skeleton/sizes.scss',
        'src/skeleton/base-styles.scss',
        'src/skeleton/typography.scss',
        'src/skeleton/buttons.scss',
        'src/skeleton/forms.scss',
        'src/skeleton/tables.scss',
        'src/skeleton/spacing.scss',
        'src/skeleton/alerts.scss',
        'src/skeleton/notes.scss',
        'src/skeleton/checkbox.scss',
        'src/skeleton/switch.scss',
        'src/skeleton/progressbar.scss',
        'src/skeleton/pagination.scss',
        'src/skeleton/tooltip.scss',
        'src/skeleton/loader.scss',
        'src/skeleton/navbar.scss',
        'src/skeleton/cards.scss',
        'src/skeleton/jumbotron.scss',
        'src/skeleton/badges.scss',
        'src/skeleton/tabs.scss',
        'src/skeleton/dropdown.scss',
        'src/skeleton/accordion.scss',
        'src/skeleton/element-colors.scss', //? keep as last element

        // // Flexbox-Grid:
        'src/flexbox-grid.scss',
    ],
    jsFiles: [
        'src/javascript/*.js'
    ],
}

// CSS/SASS: compile scss to css, autoprefix, minify
gulp.task('sass', function () {
    return gulp.src( settings.styles ) 
        .pipe(concat( 'skeleton-styled.scss' ))
        .pipe(gulp.dest( settings.dist ))

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ 
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename('skeleton-styled.css')) 
        .pipe(gulp.dest( settings.dist )) 
        .pipe(rename('skeleton-styled.min.css'))
        .pipe(minify({compatibility: 'ie8'})) 
        .pipe(gulp.dest( settings.dist ));
});

gulp.task('js', function () {   
    gulp.src(settings.jsFiles)
        .pipe(concat('skeleton-styled.js'))
        .pipe(gulp.dest(settings.jsdist))
        .pipe(uglify())
        .pipe(rename('skeleton-styled.min.js'))
        .pipe(gulp.dest(settings.jsdist));
});

// WATCH FOR CHANGES
gulp.task('watch', function() {
    gulp.watch( settings.styles, ['sass']);
    gulp.watch(settings.jsFiles, ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);

gulp.task('build',['sass', 'js']);