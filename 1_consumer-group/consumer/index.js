const kafka = require('kafka-node')

const config = {
    topic: 'my-topic',
    partition: 0,
    address: 'localhost:9092',
    groupId: 'myGroupId'
}


const client = new kafka.KafkaClient({
    kafkaHost: config.address,
})

// 1. Create kafka consumer
const consumer = new kafka.Consumer(
    client,
    [
        { topic: config.topic, partition: config.partition }
    ],
    {
        groupId: config.groupId,
    }
)

// 2. Listen to kafka message from topic "my-topic"
consumer.on('message', message => {
    console.log(`[MESSAGE RECEIVED ${new Date()}]: ${message.value}`)
})

// const options = {
//     kafkaHost: config.address,
//     groupId: config.groupId,
//     // An array of partition assignment protocols ordered by preference. 'roundrobin' or 'range' string for
//     // built ins (see below to pass in custom assignment protocol)
//     protocol: ['roundrobin'],
// }
// const consumerGroup = new kafka.ConsumerGroup(options, [config.topic])
// consumerGroup.on('message', message => {
//     console.log(`[CONSUMER GROUP MESSAGE RECEIVED ${new Date()}]: ${message.value}`)
// })
// consumerGroup.on('error', error => {
//     console.log(`[CONSUMER GROUP ERROR ${new Date()}]: ${error}`)
// })