# wppconnect-nestjs-client

This is a WhatsApp chatbot project developed in Typescript using [NestJS](https://nestjs.com/), which consumes the [wppconnect-server](https://github.com/wppconnect-team/wppconnect-server) API. This README provides essential information for setting up the project.

## Screenshots

Commands ping and commands            |  Commands help and sticker
:-------------------------:|:-------------------------:
<img src="https://github.com/usernein/wppconnect-nestjs-client/assets/29507335/226331fb-a366-4781-a2bd-ad13c800cc6d" width="600" /> | <img src="https://github.com/usernein/wppconnect-nestjs-client/assets/29507335/81d6c52f-b8e6-4be6-9571-4fd4a66e43ec" width="600" />

## Configuration

Before running the project, follow these steps:

1. Clone the repository.

2. Create a `.env` file based on the provided `.env.example` file in the repository. Fill in the recommended environment variables with appropriate values.

   **Note:** Some environment variables present in `.env.example` are optional, but it is recommended to fill in all of them.

## Running the Project

To run the project, you can use Docker Compose with the background mode:

```bash
docker compose up -d
```

## Language Support

Please note that currently, all strings in the chatbot are in Brazilian Portuguese, and there is no language preference handling for users yet.

## Acknowledgements

- [WPPConnect-MultiClient](https://github.com/rodriguesabner/WPPConnect-MultiClient), which showed me that wppconnect-server actually has socket support.
- [Kien Nguyen Ngoc](https://keyyuki.medium.com/), who wrote [this article](https://keyyuki.medium.com/implement-simple-socket-io-client-to-nestjs-microservice-7640e0dfb5ce) that helped me to implement socket handling in NestJS
- [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen), which made it a lot easier to use the REST API of wppconnect-server

## Related

- [wppconnect-php-client](https://github.com/wppconnect-team/wppconnect-php-client)
- [wppconnect-laravel-client](https://github.com/wppconnect-team/wppconnect-laravel-client)
