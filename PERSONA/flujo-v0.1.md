# Flujo v0.1 y v0.2

## Tarea principal

Lourdes quiere encontrar y reservar un traje para la fecha del evento de su hija sin visitar tiendas que no tengan la talla o el color disponibles.

## Flujo normal principal

- **Abrir la aplicación**
- **Elegir categoría** ( Vestidos o Trajes Formales)
- **Ver lista de trajes**
- **Seleccionar un traje** (ej. "Vestido")
- **Ver detalle** (fotos, tallas, precio)
- **Reservar** (fecha del evento, nombre y teléfono)
- **Ver confirmación**



### Resultado esperado
El cliente encuentra un traje disponible, lo reserva para su evento y recibe una confirmación de que la reserva fue guardada.



### Pregunta pendiente
En esta iteración se definió que los datos necesarios para que el administrador gestione la reserva son: correo electrónico, número de celular y fecha para recogerlo (no se pidió nombre ni dirección, ya que el correo y celular ya identifican al cliente para contactarlo).

**Nueva pregunta pendiente**


Actualmente la aplicación no distingue roles: cualquier persona que abre la app puede ver y reservar como si fuera cliente, sin que exista un panel separado para el administrador o el vendedor, y las reservas se guardan solo en el navegador de cada usuario (no en una base de datos central). Falta definir: ¿qué datos y funciones le corresponden a cada rol (cliente, vendedor, administrador), y qué necesitamos (base de datos, login, permisos) para separarlos en las próximas iteraciones?