# sn_typings_server_scoped

TypeScript definitions for ServiceNow server-side scoped application development.

See [Using Class.create with TypeScript](./$$class.md) for API class creation.

[dist/ServiceNow.code-snippets](./dist/ServiceNow.code-snippets) contains VS Code snippets to assist with class creation.

Refer to the following repositories for other ServiceNow type definitions:

- [sn_typings_server_global](https://github.com/erwinel/sn_typings_client_scoped) Client-Side Scoped.
- [sn_typings_server_global](https://github.com/erwinel/sn_typings_server_global) Server-Side Global.
- [sn_typings_server_global](https://github.com/erwinel/sn_typings_client_global) Client-Side Global.

## Usage

Until the first version is published, you can reference these types using git submodules.

### Adding Typings to Another Repository

#### Add submodule

In this example, the submodule will be added at `./types/snc`:

```sh
mkdir types
git submodule add https://github.com/erwinel/sn_typings_server_scoped.git types/snc
cd types/snc
git checkout master
cd ../..
git commit -m "Added scoped SNC typings"
```

#### TypeScript Configuration

In this example, the tsconfig.json file is located in the `./src` subdirectory, and we'll use the base path of the previous example for the `typeRoots` setting:

```json
{
  "compilerOptions": {
    "noImplicitAny": false,
    "module": "none",
    "target": "ES2015",
    "lib": ["ES2021"],
    "removeComments": false,
    "sourceMap": false,
    "strict": true,
    "typeRoots": ["../types"],
    "declaration": true,
    "declarationDir": "../dist/types",
    "outDir": "../dist/js",
    "noEmitHelpers": true
  }
}
```

### Initialize Submodule After Repository Cloning

If the submodules aren't cloned at the same time as the repository is cloned, you will need to initialize them using the following command:

```sh
git submodule update --init --recursive
cd types/snc
git checkout master
```

#### DevContainer Configuration

For the `.devcontainer/devcontainer.json` file, you will need to include the aforementioned git command in the `postCreateCommand` setting. Following is an example:

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

### Update Submodule from Origin

In the following examples, the submodule exists at `./types/snc`.

```sh
cd types/snc
git pull --rebase
cd ../..
git commit -am "Updated types/snc submodule to latest revision"
```

## Push Submodule Updates to Origin

In the following examples, the submodule exists at `./types/snc`.

```sh
cd types/snc
git add -A
git commit -am "[Your message here]"
cd ../..
git commit -am "[Your message here]"
```

## Dev Setup

This is intended to be developed using VS Code. See [/.vscode/extensions.json](./.vscode/extensions.json) for a list of recommended extensions. Dependencies are mananged using [npm](https://www.npmjs.com/).

Run `npm install` from the root folder of this repository to install dependencies.
