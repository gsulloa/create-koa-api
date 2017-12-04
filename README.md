# Create Koa API
Scrip to automatically create a Koa app API. The template used is in this [repo](https://github.com/gsulloa/koa-boilerplate)

## Getting Started

### Requirements
- [node](https://nodejs.org/) >= 8.5.0
- [yarn](https://yarnpkg.com/) >= 1.0.1
- [hub](https://github.com/github/hub)

### Installation
Install with yarn globally
```sh
$ yarn global add create-koa-api
```
### Usage

```
  Usage: create-koa-api [options] <dir>

  Options:

    -r, --repo <repo-url>  URL repository to use as template
    -a, --auth             Start with auth
    -h, --help             output usage information
```

### Creating an App
To create a new app, run
```sh
$ create-koa-api my-app
$ cd my-app
```

To create a new app with authentication, run
```sh
$ create-koa-api my-app -a
$ cd my-app
```


