# Producer and Consumer
Simplest implementation of kafka. To highlight even more, the produce is written in Go, and consumer in Node.js.

## Getting started
1. Start kafka  
Follow this guide till https://kafka.apache.org/quickstart#quickstart_startserver
2. Start producer
```bash
cd /producer
go run /main.go
```

3. Start consumer (can open as many terminals and create as many consumer as you wish)
```bash
cd /consumer
node index.js
```