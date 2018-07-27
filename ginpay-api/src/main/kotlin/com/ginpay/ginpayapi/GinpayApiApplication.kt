package com.ginpay.ginpayapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GinpayApiApplication

fun main(args: Array<String>) {
    runApplication<GinpayApiApplication>(*args)
}
