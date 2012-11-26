/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        lint: {
            files: ['grunt.js', 'content/static/js/src/**/*.js', 'test/**/*.js']
        },
        qunit: {
            files: 'test/**/*.html'
        },
        concat: {
            dist: {
                src: 'content/static/js/src/**/*.js',
                dest: 'content/static/js/dist/concat.js'
            }
        },
        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: 'content/static/js/dist/minified.min.js'
            }
        },
        cssmin: {
            dist: {
                src: 'content/static/css/screen.css',
                dest: 'content/static/css/minified.min.css'
            }
        },
        watch: {
            files: ['<config:lint.files>', 'sass/**/*.scss'],
            tasks: 'lint concat min compass:dev cssmin'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {}
        },
        uglify: {},
        compass: {
            dev: {
                bundleExec: true,
                config: 'config.rb'
            }
        }
    });

    // Default task.
    grunt.registerTask('default', 'lint concat min compass:dev cssmin');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-compass');
};
