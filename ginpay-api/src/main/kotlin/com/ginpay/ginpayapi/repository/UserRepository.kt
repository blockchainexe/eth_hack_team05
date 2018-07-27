package com.ginpay.ginpayapi.repository

import com.ginpay.ginpayapi.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: JpaRepository<User, String>