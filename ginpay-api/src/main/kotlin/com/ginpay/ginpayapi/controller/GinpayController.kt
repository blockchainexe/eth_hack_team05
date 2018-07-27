package com.ginpay.ginpayapi.controller

import com.ginpay.ginpayapi.model.Chat
import com.ginpay.ginpayapi.model.Destination
import com.ginpay.ginpayapi.model.Request
import com.ginpay.ginpayapi.model.User
import com.ginpay.ginpayapi.repository.ChatRepository
import com.ginpay.ginpayapi.repository.DestinationRepository
import com.ginpay.ginpayapi.repository.RequestRepository
import com.ginpay.ginpayapi.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import com.ibm.watson.developer_cloud.assistant.v1.Assistant
import com.ibm.watson.developer_cloud.assistant.v1.model.InputData
import com.ibm.watson.developer_cloud.assistant.v1.model.MessageOptions
import org.springframework.http.HttpStatus


@RestController
@RequestMapping("/")
class GinpayController @Autowired constructor(private val userRepository: UserRepository,
                                              private val destinationRepository: DestinationRepository,
                                              private val requestRepository: RequestRepository,
                                              private val chatRepository: ChatRepository){

    @GetMapping("/api/destinations")
    @CrossOrigin(origins = ["http://localhost:3000"])
    fun getDestination(): List<Destination> = destinationRepository.findAll()

    @GetMapping("/api/requests")
    @CrossOrigin(origins = ["http://localhost:3000"])
    fun getRequests(): List<Request> = requestRepository.findAll()

    @GetMapping("/api/user")
    @CrossOrigin(origins = ["http://localhost:3000"])
    fun getUser(@RequestParam(value = "id") id: String): User = userRepository.getOne(id)

    @PostMapping("/api/request")
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin
    fun addRequest(@RequestBody request: Request): String {
        requestRepository.save(request)
        return "{'status': 'success'}"
    }

    @PostMapping("/api/user")
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin
    fun addUser(@RequestBody user: User) {
        userRepository.save(user)
    }

    @PostMapping("/api/message")
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin
    fun addMessage(@RequestBody chat: Chat): String {
        val service = Assistant("2018-07-10")
        service.setUsernameAndPassword("user-name", "pass")

        val workspaceId = "workspace_id"

        val newMessageOptions = MessageOptions.Builder()
                .workspaceId(workspaceId)
                .input(InputData.Builder(chat.message).build())
                .build()

        chatRepository.save(chat)

        val response = service.message(newMessageOptions).execute()

        return "{'message': '" + response.output.text.get(0) + "'}"
    }

    @PostMapping("/api/evaluation")
    @CrossOrigin
    fun createEvaluation(@RequestBody evaluation: String): String {
        println(evaluation)
        return "{'status': 'success'}"
    }
}
