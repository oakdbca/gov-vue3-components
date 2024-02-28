# gov-vue-components
Repository of common vue components that can be imported into department projects.

See /docs folder for user documentation

To add a vue3 component to this library:

01. Create a virtual environment for node (You can use nodeenv to do that) # TODO: Set up dev container for this repo?
02. Run 'npm install'
03. Copy your component file into the src/components folder
04. Make sure any css definitions are named uniquely as the scoped attribute for the style block does not work when deploying a library
05. Import and export your component in the src/components.js file.
06. Add any images you will need for your documentation to the docs/images folder
07. Create a markdown file in the docs/components folder to document how your component works
08. Add a link to your markdown file in the docs/.vitepress/config.js file
09. Run 'npm run docs:dev' command to preview your documentation locally
10. Once you are happy with everything, run 'npm run docs:build' - This will client and server bundles and render pages for the docs
11. Run 'npm run build' - This will generate a dist folder and the library files (.js, .mjs /assets/.css) or overwrite them if they are already there
12. Increment the version number in the package.json file
13. Do a Pull Request for the new version
14. Once the PR is merged, follow the 'To publish to npm' instructions below to publish the new version to npm.

Maintenance:

01. Run 'npm update'
02. Run 'npm outdated' to see if anything needs updating
03. Modify the package.json as required to update the version numbers
04. Run 'npm run build'
05. Increment the version number in the package.json file
06. Do a Pull Request for the new version
07. Once the PR is merged, follow the 'To publish to npm' instructions below to publish the new version to npm.

To publish to npm:

01. run 'npm login'
02. run 'npm publish --access=public'
03. To check it was published correctly, run 'npm view @dbca/gov-vue3-components'