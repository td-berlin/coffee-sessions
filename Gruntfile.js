module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'static/css/td.css': 'source/sass/td.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      build: {
        src: 'static/css/td.css',
        dest: 'static/css/td.css'
      }
    },
    watch: {
      css: {
        files: ['source/sass/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);

};
