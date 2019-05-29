// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular.json`.

// For local development with live angular editing and JSON server
export const environment = {

  production: false,

  // Webapi server configurations
  server: 'http://localhost',
  port: '3000',  // Default JSON server port
  apiUrl: '',  // Default JSON server apiUrl should be like this

  // Setup App title
  appTitle: '', // your project app title here

};
