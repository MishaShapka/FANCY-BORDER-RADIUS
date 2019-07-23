module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.watch(["./src/index.pug", "./src/pages/**/*.pug"], $.gulp.series("pug"));
            $.watch(["./src/assets/app.scss", "./src/assets/**/*.{sass,scss,css}"], $.gulp.series("sass"));
            $.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.watch("./src/img/icons/svg/*.svg", $.gulp.series("iconfont"));
            $.watch("./src/fonts/**/*.*", $.gulp.series("transfer"));
            //$.watch("./src/index.html", $.gulp.series("html2pug"));
            $.watch("./src/js/**/*.js", $.gulp.series("scripts"));
            $.watch("./dist/**/*.*", $.browsersync.reload);
            
            res();
        });
    });
};