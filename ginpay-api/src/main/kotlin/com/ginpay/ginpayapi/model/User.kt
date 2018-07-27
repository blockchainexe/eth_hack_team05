package com.ginpay.ginpayapi.model

import javax.persistence.*


@Entity
@Table
class User (
        @Id
        @Column
        var id: String = "",

        @Column
        var name: String = "",

        @Column
        private var image: String? = null,

        @Column
        private var point: Double? = 0.0
)