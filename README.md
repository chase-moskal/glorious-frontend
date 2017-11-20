
# G L O R I O U S • F R O N T E N D — [![build status](https://travis-ci.org/ChaseMoskal/glorious-frontend.svg?branch=master)](https://travis-ci.org/ChaseMoskal/glorious-frontend)

*a stack to stake your career on* [⟶ chasemoskal.github.io/glorious-frontend ⟵](https://chasemoskal.github.io/glorious-frontend/)

free open source minimalistic clientside web application boilerplate template  
you can copy/clone/fork this project and start your own application!  

## features and motivations

- **minimalistic** — choose your own tools, for anything you need, like page routing, or whatever
- **lightweight** — the infrastructure weighs less than 50 kB gzipped
- **debuggable** — use chrome devtools to debug at runtime, and use vscode to debug tests, sourcemaps work
- **frontend-only** — if you need a node server, make it a separate repo, and use containers for god's sake
- **unopinionated** — no linter, no hints about application architecture

## javascript tooling

- **typescript** — fancy future javascript
- **preact** — jsx view framework, lightweight react replacement
- **mobx** — state management, observables
- **jest** — testing framework
- **browserify** — bundle scripts and node_modules for browser consumption
- **uglify** — minifier, compression

## other tooling

- **sass** — fancy future css
- **http-server** — application is viewable and debuggable at http://localhost:8080/
- **vscode settings** — fancy developer experience

## create your own application

1. **install prerequisite software**

	- **git** — source control engine ***[required]***
	- **node and npm** — javascript runtime and package manager ***[required]***
	- **vscode** — code editor, project is preconfigured *[recommended]*
	- **meld** — merge tool for resolving conflicts *[recommended]*

2. **fork or clone this repository** — make your own fork of this repo, and clone it locally

3. **project commands**

	- **`npm install`**  
		this single command both installs project dependencies and runs the build (`ctrl+shift+b` in vscode)

	- **`npm start`**  
		start http server, then you can visit http://localhost:8080/

	- **`npm run build-debug`**  
		build while providing a better debugging experience in chrome devtools, by preserving sourcemaps, and skipping minification
