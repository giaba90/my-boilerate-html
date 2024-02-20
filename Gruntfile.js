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
        uglify: {
            my_target: {
                files: {
                    'assets/js/index.min.js': ['js/script.js']
                }
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev', ['sass', 'jshint', 'uglify', 'watch']);
}