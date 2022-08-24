package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func main() {
	const (
		topic     = "my-topic"
		partition = 0
		address   = "localhost:9092"
	)

	// 1. Create kafka topic "my-topic"
	conn, err := kafka.DialLeader(context.Background(), "tcp", address, topic, partition)
	if err != nil {
		log.Fatal("Failed to dial leader:", err)
	} else {
		log.Println("Dialed leader successfully")
	}

	// 2. Every second, send mesage to pic for 100 seconds
	for i := 1; i < 100; i++ {
		message := fmt.Sprint(i)

		_, err = conn.WriteMessages(
			kafka.Message{Value: []byte(message)},
		)

		if err != nil {
			log.Fatal("Failed to write messages", err)
		}

		time.Sleep(1 * time.Second)
	}

	// 3. Close
	if err := conn.Close(); err != nil {
		log.Fatal("Failed to close writer", err)
	}

}
