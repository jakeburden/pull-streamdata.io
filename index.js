var streamdata = require('streamdata.io-events')
var Pushable = require('pull-pushable')

function createSource (url, key, headers) {
  var SSE = streamdata(url, key, headers)
  var pushable = Pushable(true, function onEnd (err) {
    if (err) throw new Error(err)
    SSE.close()
    SSE.removeAllListeners()
  })

  SSE.on('data', function (data) {
    pushable.push(data)
  })

  SSE.on('end', function () {
    pushable.end()
  })

  SSE.on('error', function (err) {
    pushable.end(err)
  })

  return pushable.source
}

module.exports = createSource
