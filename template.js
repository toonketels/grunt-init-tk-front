exports.description = "Creates web project layout with dev server, jade and sass.";

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Ensure use needs --force option for any warning
exports.warnOn = '*';

// The real meat
exports.template = function(grunt, init, done) {
  "use strict";

  // Start prompting..
  init.process({
    'type': 'browser',
    "devDependencies": {
      "grunt": "~0.4.1",
      "grunt-contrib-connect": "~0.2.0",
      "grunt-jade": "~0.4.0",
      "grunt-regarde": "~0.1.1",
      "grunt-contrib-livereload": "~0.1.2",
      "grunt-contrib-sass": "~0.3.0"
    }
  }, [
    init.prompt('name'),
    init.prompt('version'),
    init.prompt('title'),
    {
      name: 'langcode',
      message: 'The language of the default index.html',
      default: 'en',
      warning: 'It must be an 2 character language code.'
    }
  ], function(err, props) {

    // Grab the files...
    var files = init.filesToCopy(props);

    // Actually copy (and process) files...
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    done();
  });

};