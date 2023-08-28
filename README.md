# wppconnect-nestjs-client

This is a WhatsApp chatbot project developed in Typescript using [NestJS](https://nestjs.com/), which consumes the [wppconnect-server](https://github.com/wppconnect-team/wppconnect-server) API. This README provides essential information for setting up the project.

## Screenshot

<img src="https://github.com/usernein/wppconnect-nestjs-client/assets/29507335/af092a9c-e502-4f51-a86e-eafdb0f531a9" width="600" />

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
