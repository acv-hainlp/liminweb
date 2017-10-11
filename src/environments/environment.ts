// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
      apiKey: "AIzaSyB8p0wpc8SFwhutV9YAMHsEmQcaEXK7G0A",
      authDomain: "limin-studio-website.firebaseapp.com",
      databaseURL: "https://limin-studio-website.firebaseio.com",
      projectId: "limin-studio-website",
      storageBucket: "",
      messagingSenderId: "653464339936"
  }
};
