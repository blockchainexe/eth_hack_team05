package com.ginpay.ginpayapi.repository

import com.ginpay.ginpayapi.model.Chat
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ChatRepository: JpaRepository<Chat, String>