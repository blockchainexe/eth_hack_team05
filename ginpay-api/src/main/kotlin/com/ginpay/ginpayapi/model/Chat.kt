package com.ginpay.ginpayapi.model

import javax.persistence.*

@Entity
@Table
data class Chat (
        @Id
        @Column
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Int = 0,

        @Column
        var user_id: String = "",

        @Column
        var message: String? = null
)