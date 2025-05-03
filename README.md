# 📡 Microservicio de Usuarios

Este microservicio está desarrollado completamente con **NestJS**. Su propósito es gestionar usuarios a través de eventos WebSocket en tiempo real y consumir endpoints HTTP externos para registrar y obtener datos actualizados.

---

## 📁 Estructura del Proyecto

```bash
src/
│
├── usuarios/
│   ├── usuarios.gateway.ts     # Gateway WebSocket con los eventos
│   ├── usuarios.module.ts      # Módulo de usuarios
│   └── usuarios.service.ts     # Lógica de negocio y consumo HTTP externo
│
├── app.controller.ts           # Controlador base NestJS (sin uso principal aquí)
├── app.module.ts               # Módulo raíz de la aplicación
└── main.ts                     # Punto de entrada principal
```

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js v18+
- npm v9+
- Backend corriendo en `http://localhost:3000` con endpoints:
  - `POST /Registrar-Usuario`
  - `GET /obtUsuarios`

### Pasos
```bash
npm install   # Instalar dependencias
npm run start # Iniciar microservicio
```

## 🔌 Eventos WebSocket (Socket.IO)

### Emitidos por el cliente
| Evento            | Acción                          | Ejemplo de payload          |
|-------------------|---------------------------------|------------------------------|
| `createUsuario`   | Crear usuario                  | `{     nombres : Jesus ,"apellidoPat": "Molla","apellidoMat": "Patzi","correo": "jesusm@ucb.edu.bo","ci": "12378945","rol": 3 }`|

### Recibidos del servidor
| Evento            | Descripción                     | Ejemplo de respuesta        |
|-------------------|---------------------------------|------------------------------|
| `findAllUsuarios` | Lista actualizada de usuarios  | `{"ok":true,"cuentas":[{"ci":"1234","nombres":"Christian","apellido_paterno":"Coronel","apellido_materno":"Condori","correo":"christian.coronel@ucb.edu.bo", ...`|

## 🌐 Consumo de endpoints externos
```http
POST /Registrar-Usuario  # Registro de usuarios
GET /obtUsuarios         # Obtener lista completa
```

## 👨💻 Autor
[Alan Franz Flores Campos] - 2025