module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      app:          {
        src:        'js/app.js',
        dest:       'script/boundle.js'
      }
      //client: {
      //  src: ['js/**/*.js'],
      //  dest: 'script/boundle.js'
      //}
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

    uglify: {
      my_target: {
        files: {
          '../Web/script/tolia-min.js': [
            'lib/jquery/jquery-2.1.4.js',
            'lib/bootstrap/bootstrap-3.3.6-dist/js/bootstrap.min.js',
            'lib/angular/v1.4.0/angular.js',
            'lib/angular/v1.4.0/angular-route.js',
            'js/constants.js',
            'js/app.js',
            'js/Controllers/menuController.js'
            //'script/boundle.js'
          ]
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            //flatten: true,
            src: ['lib/bootstrap/**'], dest: '../Web/',
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
            src: ['media/*'], dest: '../Web/media/',
            filter: 'isFile'
          },
          {
            expand: true,
            //flatten: true,
            src: ['templates/*'], dest: '../Web/',
            filter: 'isFile'
          }
        ]
      }
    }
    
    //handlebars: {
    //  compile: {
    //    options: {
    //
    //      // configure a namespace for your templates
    //      //namespace: 'hbs',
    //
    //      // convert file path into a function name
    //      // in this example, I convert grab just the filename without the extension
    //      processName: function (filePath) {
    //        var pieces = filePath.split('/');
    //        return pieces[pieces.length - 1].split('.')[0];
    //      },
    //
    //      node: true,
    //      commonjs: true
    //
    //    },
    //
    //    // output file: input files
    //    files: {
    //      'js/templates.js': 'templates/*.hbs'
    //    }
    //  }
    //}

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  //grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [/*'browserify'*/]);
  grunt.registerTask('build', [/*'browserify',*/ 'uglify', 'processhtml', 'copy']);
};
