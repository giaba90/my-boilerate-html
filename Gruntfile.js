module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: false,
                    'no-source-map': true
                },
                files: {
                    'assets/css/style.css': 'css/style.scss'
                }
            }
        },
        jshint: {
            files: {
                src: ['my-boilerate-html/**/*.js']
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev', ['sass', 'jshint', 'watch']);
}