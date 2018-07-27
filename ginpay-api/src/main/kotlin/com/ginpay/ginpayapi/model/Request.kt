package com.ginpay.ginpayapi.model

import javax.persistence.*

@Entity
@Table(name="user_travel")
data class Request (
        @Id
        @Column
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Int = 0,

        @Column
        var user_id: String = "",

        @Column
        var destination_id: Int = 0,

        @Column
        var message: String? = null
)