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
