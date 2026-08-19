# Flujo v0.1

## Tarea principal

Lourdes quiere encontrar y reservar un traje para la fecha del evento de su hija sin visitar tiendas que no tengan la talla o el color disponibles.

## Flujo normal del cliente

1. **Abrir el catálogo.** Lourdes entra a la aplicación y revisa los trajes.
2. **Buscar un traje.** Selecciona una categoría y, si lo necesita, filtra por talla o color.
3. **Ver el detalle.** Consulta la foto, el precio y si el traje está disponible.
4. **Solicitar la reserva.** Ingresa su nombre, número de celular y fecha del evento.
5. **Confirmar la reserva.** La aplicación muestra un mensaje de confirmación y el administrador cambia el estado a `reservado`.
6. **Recoger el traje.** Lourdes recoge el traje en la tienda en la fecha acordada.

## Flujo sencillo para el administrador

```text
1. Recibir la solicitud de reserva.
2. Revisar que el traje esté disponible.
3. Cambiar el estado del traje a “reservado”.
4. Confirmar la reserva al cliente.
```

## Funciones fuera de esta primera versión

- Pagos en línea.
- Recomendaciones automáticas de tallas o colores.
- Chatbot o asistente con IA.
- Notificaciones automáticas por WhatsApp o SMS.
- Registro detallado de piezas, descuentos y devoluciones.