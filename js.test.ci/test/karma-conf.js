module.exports = function(config){
  config.set({
    basePath : '../',
    files : [
      'app/**/app.js',
      'test/**/*.js'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    preprocessors: {
      'app/js/app.js': ['coverage']
    },

    reporters: ['growl', 'progress', 'coverage'],

    plugins : [
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-growl-reporter'
    ],

    coverageReporter: {
      type : 'text-summary' // text, html
    }
})}
