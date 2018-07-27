package com.ginpay.ginpayapi.repository

import com.ginpay.ginpayapi.model.Request
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface RequestRepository: JpaRepository<Request, Int>