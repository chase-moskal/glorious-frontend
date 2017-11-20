
GLORIUS FRONTEND — [![build status](https://travis-ci.org/ChaseMoskal/glorious-frontend.svg?branch=master)](https://travis-ci.org/ChaseMoskal/glorious-frontend)
================

_a stack to stake your career on_ [⟶ chasemoskal.github.io/glorious-frontend ⟵](https://chasemoskal.github.io/glorious-frontend/)

### javascript tooling

- **typescript** — fancy modern javascript
- **preact** — jsx view framework, lightweight react replacement
- **mobx** — state management, observables
- **jest** — testing framework
- **browserify** — bundle scripts and node_modules for browser consumption
- **uglify** — minifier, compression
- **http-server** — application is viewable and debuggable at http://localhost:8080/

### css tooling

- **sass** — fancy modern css

### features and motivations

- **minimalistic** — choose your own tools for page routing, etc
- **lightweight** — weighs less than 50 kB gzipped
- **debuggable** — use chrome devtools to debug at runtime, and use vscode to debug tests, sourcemaps work
- **frontend-only** — if you need a node server, make it a separate repo, and use containers for god's sake

## dev quick guide — create your own app

1. **install prerequisite software**

	- **git** — source control engine *[required]*
	- **node and npm** — javascript runtime and package manager *[required]*
	- **vscode** — code editor, project is preconfigured *[recommended]*
	- **meld** — merge tool for resolving conflicts *[recommended]*

2. **fork or clone this repository** — make your own fork of this repo, and clone it locally

3. **project commands**

	- **`npm install`** — this single command both installs project dependencies and runs the build (`ctrl+shift+b` in vscode)
	- **`npm start`** — start http server, and then visit http://localhost:8080/
	- **`npm run build-debug`** — build while providing a better debugging experience in chrome devtools, by preserving sourcemaps, and skipping minification
