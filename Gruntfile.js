﻿module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      //app:          {
      //  src:        'js/script.js',
      //  dest:       'js/wibar.js'
      //},
      client: {
        src: ['js/**/*.js'],
        dest: 'script/boundle.js'
      }
    },

    processhtml: {
      options: {
        data: {
          message: 'Hello world!'
        }
      },
      dist: {
        files: {
          '../Web/index.html': ['index.html']
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['bootstrap/*'], dest: '../Web/bootstrap/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['lib/*'], dest: '../Web/lib/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['css/*'], dest: '../Web/css/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['script/*'], dest: '../Web/script/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['media/*'], dest: '../Web/media/',
            filter: 'isFile'
          },
        ],
      },
    },
    
    handlebars: {
      compile: {
        options: {

          // configure a namespace for your templates
          //namespace: 'hbs',

          // convert file path into a function name
          // in this example, I convert grab just the filename without the extension 
          processName: function (filePath) {
            var pieces = filePath.split('/');
            return pieces[pieces.length - 1].split('.')[0];
          },

          node: true,
          commonjs: true

        },

        // output file: input files
        files: {
          'js/templates.js': 'templates/*.hbs'
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['handlebars', 'browserify']);
  grunt.registerTask('build', ['handlebars', 'browserify', 'processhtml', 'copy']);
};
