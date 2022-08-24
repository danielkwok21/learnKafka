const kafka = require('kafka-node')

const config = {
    topic: 'my-topic',
    partition: 0,
    address:'localhost:9092',
}

const client = new kafka.KafkaClient({
    kafkaHost: config.address
})

// 1. Create kafka consumer
const consumer = new kafka.Consumer(
    client,
    [
        { topic: config.topic, partition: config.partition }
    ],
    {
        autoCommit: false
    }
)

// 2. Listen to kafka message from topic "my-topic"
consumer.on('message', message => {
    console.log(`[MESSAGE RECEIVED ${new Date()}]: ${message.value}`)
})