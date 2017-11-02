# pull-streamdata.io

> streamdata.io server-sent events as a pull-stream source

Creates a [pull-stream](https://github.com/pull-stream/pull-stream) source from [streamdata.io](https://github.com/jekrb/streamdata.io-events) sever-sent events (SSE) in the browser (and hopefully node.js soon!)

## Usage

```js
var streamdata = require('pull-streamdata.io')
var pull = require('pull-stream')

var URL = 'https://www.reddit.com/r/random.json?obey_over18=true'
var KEY = 'ODRlZDNmYmUtMDAxZC00NWJmLTgwMzQtNTkzMWJiYjFhYjVj'

var SSE = streamdata(URL, KEY)

// pull from streamdata.io 4 times and then closes the SSE
pull(
  SSE,
  pull.take(4),
  pull.log()
)

```

outputs

```js
{kind: "Listing", data: {…}}
{kind: "Listing", data: {…}}
{kind: "Listing", data: {…}}
{kind: "Listing", data: {…}}
streamdataio.min.js:1 Closing the SSE Stream.
```

## API

```js
var streamdata = require('pull-streamdata.io')
```

### `streamdata(url, key, headers)`
- url: (String) The rest endpoint you set https://streamdata.io to poll for changes.
- key: (String) Your auth key from https://streamdata.io
- headers: (Optional) (Array) Additional headers for the SSE

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install pull-streamdata.io
```


## See Also

- [pull-stream](https://github.com/pull-stream/pull-stream)
- [streamdata.io-events](https://github.com/jekrb/streamdata.io-events)

## License

[MIT](https://tldrlegal.com/license/mit-license)

