package com.ginpay.ginpayapi.repository

import com.ginpay.ginpayapi.model.Destination
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DestinationRepository: JpaRepository<Destination, Int>