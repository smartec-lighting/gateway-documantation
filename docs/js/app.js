
    const schema = {
  "asyncapi": "2.0.0",
  "id": "urn:smartec:gateway:luminaria-control",
  "info": {
    "title": "Comando On/Off para Dispositivo",
    "version": "1.0.0",
    "description": "Especificación AsyncAPI para el envío de comandos (on, off, dimming, rgb_on, rgb_off)\na dispositivos vía MQTT. Este ejemplo modela la lógica de un handler que envía el\ncomando recibido al dispositivo identificado.\n",
    "contact": {
      "name": "Soporte Técnico",
      "url": "https://ejemplo.com/soporte",
      "email": "soporte@ejemplo.com"
    },
    "license": {
      "name": "Propietario"
    }
  },
  "tags": [
    {
      "name": "luminaria",
      "description": "Operaciones relacionadas con el control de luminarias"
    }
  ],
  "servers": {
    "production": {
      "url": "mqtt://broker.ejemplo.com",
      "protocol": "mqtt"
    }
  },
  "defaultContentType": "application/json",
  "channels": {
    "device/luminaria/control": {
      "description": "Canal para enviar comandos de control a una luminaria.",
      "publish": {
        "summary": "Publica comandos para controlar una luminaria (encender, apagar, dimming).",
        "operationId": "sendLuminariaCommand",
        "message": {
          "payload": {
            "type": "array",
            "oneOf": [
              {
                "type": "array",
                "description": "Comando para encender luminaria",
                "items": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "minItems": 3,
                "maxItems": 3,
                "example": [
                  0,
                  0,
                  1
                ],
                "x-parser-schema-id": "LuminariaEncender"
              },
              {
                "type": "array",
                "description": "Comando para apagar luminaria",
                "items": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "minItems": 3,
                "maxItems": 3,
                "example": [
                  0,
                  0,
                  2
                ],
                "x-parser-schema-id": "LuminariaApagar"
              },
              {
                "type": "array",
                "description": "Comando para ajustar dimming",
                "items": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "minItems": 4,
                "maxItems": 4,
                "example": [
                  0,
                  0,
                  3,
                  75
                ],
                "x-parser-schema-id": "LuminariaDimming"
              }
            ],
            "discriminator": "2",
            "x-parser-schema-id": "LuminariaControlPayload"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "LuminariaControlPayload": "$ref:$.channels.device/luminaria/control.publish.message.payload",
      "LuminariaEncender": "$ref:$.channels.device/luminaria/control.publish.message.payload.oneOf[0]",
      "LuminariaApagar": "$ref:$.channels.device/luminaria/control.publish.message.payload.oneOf[1]",
      "LuminariaDimming": "$ref:$.channels.device/luminaria/control.publish.message.payload.oneOf[2]"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  