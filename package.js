Package.describe({
  name: '4commerce:blaze-as-react',
  version: '1.0.1',
  summary: 'Use your Blaze templates as React components.',
  git: 'https://github.com/4commerce-technologies-AG/meteor-package-blaze-as-react',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('underscore');
  api.use('templating');
  api.use('react-runtime@0.13.3_7');
  api.addFiles('blaze-as-react.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('4commerce:blaze-as-react');
});
