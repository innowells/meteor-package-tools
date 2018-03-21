Package.describe({
  name: 'moac:tools',
  summary: 'Helper functions for dapps',
  version: '0.1.0',
  git: 'http://github.com/innowells/meteor-package-tools'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);
  api.use('http', ['client', 'server']);

  api.use('spacebars', 'client');
  api.use('templating', 'client');
  api.use('tracker', 'client');

  //api.use('numeral:numeral@1.5.3', ['client', 'server']);
  api.use('3stack:bignumber@2.0.0', 'client');

  api.use('moac:chain3@0.1.2', ['client', 'server']);
  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('frozeman:storage@0.1.8', 'client');

  api.export(['McTools'], ['client', 'server']);


  api.addFiles('mctools.js', ['client', 'server']);
  api.addFiles('ticker.js', ['client', 'server']);

  api.addFiles('globalHelpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mc:tools');
  api.addFiles('mctools-tests.js', ['client', 'server']);
});

