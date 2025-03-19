
    const schema = {
  "asyncapi": "2.0.0",
  "info": {
    "title": "Comando On/Off para Dispositivo",
    "version": "1.0.0",
    "description": "Especificación AsyncAPI para el envío de comandos (on, off, dimming, rgb_on, rgb_off)\na dispositivos vía MQTT. Este ejemplo modela la lógica de un handler que envía el\ncomando recibido al dispositivo identificado.\n"
  },
  "servers": {
    "production": {
      "url": "mqtt://broker.ejemplo.com",
      "protocol": "mqtt"
    }
  },
  "channels": {
    "device/onoff": {
      "description": "Canal para enviar comandos a un dispositivo.",
      "publish": {
        "summary": "Publica un comando para cambiar el estado de un dispositivo.",
        "operationId": "sendOnOffCommand",
        "message": {
          "contentType": "application/json",
          "payload": {
            "type": "object",
            "properties": {
              "node_id": {
                "type": "string",
                "description": "Identificador único del dispositivo.",
                "example": "12345",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "command": {
                "type": "string",
                "description": "Comando a ejecutar en el dispositivo.",
                "enum": [
                  "on",
                  "off",
                  "dimming",
                  "rgb_on",
                  "rgb_off"
                ],
                "example": "on",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "payload_bytes": {
                "type": "string",
                "description": "Representación en cadena hexadecimal de los datos.",
                "example": "0A0B0C0D",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "required": [
              "node_id",
              "command",
              "payload_bytes"
            ],
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-message-name": "<anonymous-message-1>"
        }
      }
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
  