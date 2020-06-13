# eslint-plugin-better-linebreak-style

Enhanced linting for linebreak styles based on OS and SCM configuration

As of initial release, this module supports native line endings only. Plans to add support for updates based git settings are in the works. 

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-better-linebreak-style`:

```
$ npm install eslint-plugin-better-linebreak-style --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-better-linebreak-style` globally.

## Usage

Add `better-linebreak-style` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "better-linebreak-style"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "better-linebreak-style/rule-name": "error"
    }
}
```

## Supported Rules

* [native](docs/rules/native.md) - Configures eslint linebreak-style rule based on detected OS





