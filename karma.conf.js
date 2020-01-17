module.exports = config => {
    config.set({
    frameworks: ['mocha', 'chai'],
    files: [{pattern: 'test/**/*.js', type: 'module'}, {pattern: '*.js', included: false},],
    reporters: ['progress','coverage'],
    port: 9876,  // karma web server port
    colors: true,
    browsers: ['Chrome'],
    autoWatch: false,
    esm: {
      nodeResolve: true,
    },
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
  return config;
};
