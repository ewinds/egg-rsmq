# egg-rsmq

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rsmq.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rsmq
[travis-image]: https://img.shields.io/travis/eggjs/egg-rsmq.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rsmq
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rsmq.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rsmq?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rsmq.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rsmq
[snyk-image]: https://snyk.io/test/npm/egg-rsmq/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rsmq
[download-image]: https://img.shields.io/npm/dm/egg-rsmq.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rsmq

Paginator for egg-mysql

## Install

```bash
$ npm i egg-rsmq --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rsmq = {
  enable: true,
  package: "egg-rsmq"
};
```

```js
// {app_root}/config/config.default.js
config.rsmq = {
  host: "192.168.16.104",
  port: 6379
};
```

## Example

```javascript
// query
await app.rsmq.sendMessageAsync({
  name: "foo",
  message: JSON.stringify(json_info)
});
```

## License

[MIT](LICENSE)
