module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
    	'js/lib/angular/angular.js',
		'js/lib/angular/angular-*.js',
      	'js/*.js',
      	'js/**/*.js',
      	'test/unit/*.js'
    ],

    exclude : [      
    	'js/lib/angular/angular-loader.js',
		'js/lib/angular/*.min.js',
		'js/lib/angular/angular-scenario.js',
		'js/bootstrap*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
