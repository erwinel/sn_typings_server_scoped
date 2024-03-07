# Dependent Repository Usage

This document explains how to set up and maintain another repository that uses this repository for TypeScript typings.

## Dependent Repository Setup

### 1. Add git submodule

Add a submodule for [sn_typings_server_scoped](https://github.com/erwinel/sn_typings_server_scoped) under a folder referenced by the
`compilerOptions.typeRoots` of the `tsconfig.json` file.

In this example, it is assumed that `./types` is going to be a `typeRoots` subdirectory:

```bash
mkdir types
git submodule add https://github.com/erwinel/sn_typings_server_scoped.git types/snc
cd types/snc
git checkout master
cd ../..
git commit -m "Added scoped SNC typings"
```

### 2. Initialize **npm**

From the command prompt, run `npm init` to initialize **npm**. This will prompt you for the following information:

- package name: This is the name of the package, which is typically the same name as the repository. You can just hit *enter* to accept the default.
- version: Enter the version number or hit *enter* to accept the default.
- description: Enter a short description for the project.
- entry point: This is usually irrelevant for ServiceNow TypeScript development, and you can just hit *enter* to accept the default
- test command: This can be left blank.
- git repository: Enter the URL of the git repository, including the trailing *".git"*. *(e.g. `https://github.com/myusername/my-repository.git`)*
- keywords: Enter any relevant keywords. It is okay to leave this blank.
- author: Enter the name of the author.
- license: This determines how others are permitted to use the contents of the repository, which is usually a [SPDX license identifier](https://spdx.org/licenses/). An example might be `GPL-3.0-only`. See [npm documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#license) for other options.

> See documentation for [npm-init](https://docs.npmjs.com/cli/v10/commands/npm-init) for more information.

Next, execute the following commands to add the necessary dependencies:

```bash
npm add @types/jasmine
npm add -D gulp-cli
npm add -D gulp-dest
npm add -D gulp
npm add typescript
```

### 3. Configure TypeScript

These instructions have the following assumptions:

- TypeScript source files will be in the `./src` subdirectory.
- Transpiled output will be generated in the `./dist` subdirectory.
- Declaration files be generated in the `./out` subdirectory.
- TypeScript type root subdirectory is `./types`.

Create the `./src/tsconfig.json` file with the following contents:

```json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "module": "none",
    "target": "ES2015",
    "lib": ["es2015"],
    "removeComments": false,
    "sourceMap": false,
    "strict": true,
    "typeRoots": ["../types"],
    "declaration": true,
    "declarationDir": "../out",
    "outDir": "../dist/js",
    "noEmitHelpers": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### 4. Configure transpile Tasks

These instructions have the following assumptions:

- TypeScript source files will be in the `./src` subdirectory.
- Transpiled output will be generated in the `./dist` subdirectory.
- Declaration files be generated in the `./out` subdirectory.
- TypeScript type root subdirectory is `./types`.

Create the `./gulpfile.js` file with the following contents:

```javascript
gulp.task("copyTypings", function(cb) {
    gulp.src("src/*.d.ts").pipe(gulp.dest("dist/scoped-types/"));
    gulp.src("out/*.d.ts").pipe(gulp.dest("dist/scoped-types/"));
    gulp.src("out/*.d.ts").pipe(gulp.dest("dist/global-types/"));
    cb();
});
```

Next, create the `./.vscode/tasks.json` file wih the following contents:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build",
      "dependsOrder": "sequence",
      "dependsOn": ["transpile", "copyTypings"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "clear": true
      }
    },
    {
      "type": "typescript",
      "tsconfig": "src/tsconfig.json",
      "problemMatcher": "$tsc",
      "group": "build",
      "label": "transpile"
    },
    {
      "label": "copyTypings",
      "type": "shell",
      "group": "build",
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "command": "node_modules/.bin/gulp",
      "args": ["copyTypings"]
    }
  ]
}

```

### 5. Configure Git Ignore

Add the following entries in the `./.gitignore` file, if they do not already exist:

#### Ignore **Node.js** modules

```ini
# Node.js Tools for Visual Studio
.ntvs_analysis.dat
node_modules/
```

#### Ignore declarations output

This assumes that the `compilerOptions.declarationDir` settings of the `tsconfig.json` file refers to `./out`.

```ini
# Ignore direct transpile output
out/
```

#### Include only specific **VS Code** files

This ignores everying in the `./.vscode` subdirectory, except for `settings.json`, `tasks.json`, `launch.json`, `extensions.json`, and any file with the `.` extension.

```ini
# VS Code files for those working on multiple tools
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
*.code-workspace
```

### 6. VS Code Options

The following files may be copied to the `./vscode` subdirectory of the dependent repository:

- [dist/extensions.json](./dist/extensions.json): Recommended VS Code extensions.
- [dist/settings.json](./dist/extensions.json): VS Code workspace settings.
- [dist/ServiceNow.code-snippets](./dist/ServiceNow.code-snippets): TypeScript code snippets.

### 7. CodeSpaces DevContainer Configuration

For GitHub CodeSpaces, use the following configuration:

```json
{
  "image": "mcr.microsoft.com/devcontainers/universal:2",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {},
    "ghcr.io/devcontainers-contrib/features/typescript:2": {}
  },
  "postCreateCommand": [
    "npm install",
    "git submodule update --init --recursive",
    "cd types/snc; git checkout master"
  ]
}
```

## Submodule Maintenance

### Initialize Submodule After Repository Cloning

If submodules aren't cloned at the same time as the repository is cloned *(i.e. `./types/snc` is empty)*, you will need to initialize them using the following commands:

```sh
git submodule update --init --recursive
cd types/snc
git checkout master
```

### Update Submodule from Origin

The following example shows how to rebase the submodule for `sn_typings_server_scoped` to the latest revision and commit the current revision to the parent repository.

This example assumes that the current working directory is the root of the parent repository, and the submodule exists at `./types/snc`.

```sh
cd types/snc
git pull --rebase
cd ../..
git commit -am "Updated types/snc submodule to latest revision"
```

### Push Submodule Updates to Origin

The following example shows how to commit changes you've made changes in the submodule for `sn_typings_server_scoped` and commit the revision to the parent repository.

This example assumes that the current working directory is the root of the parent repository, and the submodule exists at `./types/snc`.

```sh
cd types/snc
git add -A
git commit -am "[Your message here]"
git push
cd ../..
git commit -am "[Your message here]"
```
