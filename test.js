var streamdata = require('./')
var pull = require('pull-stream')

var URL = 'https://www.reddit.com/r/random.json?obey_over18=true'
var KEY = 'ODRlZDNmYmUtMDAxZC00NWJmLTgwMzQtNTkzMWJiYjFhYjVj'

var SSE = streamdata(URL, KEY)

// pull from streamdata 4 times
pull(
  SSE,
  pull.take(4),
  pull.log()
)
