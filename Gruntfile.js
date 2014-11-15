
/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    },

    jshint: {
        all: ['server.js'],
        options: {
          jshintrc: true
        }
      },

    jscs: {
      src: 'server.js',
        options: {
          config: '.jscsrc'

        }
        
      }
  });
  
  //Addition of JSCS to gruntfile
  grunt.loadNpmTasks("grunt-jscs");

  //Addition of JShint to gruntfile
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Add a default task. This is optional, of course :)
  grunt.registerTask('test', ['jshint','jscs','simplemocha']);
  grunt.registerTask('default',['test']);

};
