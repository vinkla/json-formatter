# Yayson [![Build Status](https://badgen.net/travis/vinkla/yayson/master)](https://travis-ci.com/vinkla/yayson)

> A simple JSON formatter extension for Google Chrome.

Format and prettify JSON data to make it human readable in Google Chrome.

### Features

- Formats JSON data using [built-in methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).
- Linkify URLs using the [`linkify-urls`](https://github.com/sindresorhus/linkify-urls#readme) package.

## Installation

To install the extension in Google Chrome, [visit the Chrome Web Store]().

![Chrome Web Store](https://badgen.net/chrome-web-store/v/icglamneckmpaleiddbpbfmmjahlkcgj)

## Contributing

Install the extension dependencies:

```sh
$ npm install
```

To build the extension and compress the source code, run the `build` script:

```sh
$ npm run build
```

Once built, load it in the browser:

1. Open `chrome://extensions`.
2. Check the **Developer mode** checkbox.
3. Click on the **Load unpacked extension** button.
4. Select the folder `yayson/build`.

During development you may use the `start` script to listen for file changes:

```sh
$ npm start
```

## License

[MIT](LICENSE) © [Vincent Klaiber](https://vinkla.com)
