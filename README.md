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

Example:

```powershell
git submodule add https://github.com/erwinel/sn_typings_server_scoped.git types/snc
git commit -m "Added server-scoped SNC typings"
```

To update submodules, use `submodule update --init --recursive`.

## Dev Setup

This is intended to be developed using VS Code. See [/.vscode/extensions.json](./.vscode/extensions.json) for a list of recommended extensions. Dependencies are mananged using [npm](https://www.npmjs.com/).

Run `npm install` from the root folder of this repository to install dependencies.
