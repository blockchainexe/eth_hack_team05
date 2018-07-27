package com.ginpay.ginpayapi.model

import javax.persistence.*

@Entity
@Table
class Destination (
        @Id
        @Column
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Int = 0,

        @Column
        var name: String = "",

        @Column
        var image: String? = null,

        @Column
        var point: Double? = 0.0,

        @Column
        var description: String? = null
)