# React Webpack Bazel example

This example shows how to transpile and bundle a React JS application using SWC for transpilation
and Webpack for bundling.

The Bazel build is build from two rules:

- transpilation, handled by rules_swc
- bundling, handled by rules_webpack

The transpilation is converting the JSX files to plain JS files, so that Webpack can use them
directly.
Then Webpack bundles the simple JS files in a single JS file.
Also, Webpack has an HTML template plugin added, so the result can be seen in a browser.
The plugin is added as a part of the Webpack rule.

There are two configurations for Webpack added:

- webpack.bazel.config.js - the configuration that Bazel uses
- webpack.config.js - a sample configuration for showcasing what is the difference when using Bazel
  with Webpack

