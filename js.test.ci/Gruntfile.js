module.exports = function(grunt) {

  grunt.initConfig({
    karma: {
     options: {
       configFile: 'test/karma-conf.js'
     },
     unit: {
       singleRun: true
     }
   },

   watch: {
      karma: {
        files: ['app/js/**/*.js', 'test/spec/*.js'],
        tasks: ['karma:unit:start']
      }
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma:unit', 'watch']);

};
