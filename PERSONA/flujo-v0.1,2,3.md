# Flujo v0.1 y v0.2 y v0.3

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
En esta iteración se definió que los datos necesarios para que el administrador gestione la reserva son: correo electrónico, número de celular y fecha para recogerlo (no se pidió nombre ni dirección, ya que el correo y celular ya identifican al cliente para contactarlo).¿Qué pasa si el cliente se equivocó al reservar o cambió de opinión? ¿Cómo puede eliminar o cancelar una reserva que ya no necesita?



## Flujo 1 Continuacion
- **Abrir la aplicación**
- **Presionar "Ver Reservas"**
- **Ver lista de reservas guardadas** (traje, talla, correo, celular, fecha de recojo)
- **Presionar "Cancelar reserva"** en la reserva que ya no necesita
- **Confirmar la cancelación**
- **Ver lista actualizada sin esa reserva** (el traje vuelve a estar disponible para otros clientes)


### Resultado esperado
El cliente canceló la reserva porque se arrepintió y quería otro traje, y el sistema liberó automáticamente el cupo para que otro cliente pueda reservarlo. 


### Pregunta pendiente
Actualmente la aplicación no distingue roles: cualquier persona que abre la app puede ver y reservar como si fuera cliente, sin que exista un panel separado para el vendedor o el administrador. Además, las reservas se guardan solo en el navegador de cada usuario, no en una base de datos. ¿Qué datos y funciones le corresponden al cliente o vendedor?


## Flujo 2: Vendedor gestiona inventario de trajes

**Actor:** Vendedor
- **Vendedor abre la aplicación**
- **Accede a su cuenta mediante un boton**
- **Ve lista de todos los trajes** (con stock, tallas, precios)
- **Selecciona "Agregar nuevo traje"**
- **Completa formulario** (nombre, categoría, tallas disponibles, colores, precio, sube fotos)
- **Guarda el nuevo traje**
- **El traje aparece en el catálogo para que los clientes lo vean**


### Resultado esperado
El vendedor ahora cuenta con su propio acceso, separado de la vista del cliente, y puede ampliar el catálogo. 


### Pregunta pendiente
Ya hay un rol de vendedor definido, pero sus datos y los trajes que agrega solo existen en el navegador, no hay una estructura persistente que garantice que el stock, las tallas y los colores se mantengan consistentes para todos los clientes que consultan al mismo tiempo. ¿Necesitamos una base de datos para que todos los productos y reservas queden correctamente relacionados y guardados?


## Flujo 3: Cliente filtra por talla y color disponibles

**Actor:** Cliente

- **Abrir la aplicación**
- **Elegir categoría**
- **Presionar "Filtrar"**
- **Seleccionar talla y color deseado**
- **Ver lista de trajes que cumplen ese filtro**
- **Seleccionar un traje** (continúa hacia Flujo 1: ver detalle) |

### Resultado esperado
El cliente reduce la búsqueda innecesaria y solo ve trajes realmente disponibles en su talla y color, gracias a que ya se definió la base de datos que sostiene esta consulta con datos reales y consistentes. Esto resuelve directamente la tarea principal: *"sin visitar tiendas que no tengan la talla o el color disponibles"*.

### Pregunta pendiente
Ya existe la base de datos y el vendedor puede agregar productos, pero todavía no puede ver ni gestionar las reservas hechas por los clientes (solo el propio cliente puede cancelar la suya). Tampoco existe el rol de administrador ni un sistema de autenticación con contraseña. ¿Cómo debería el vendedor visualizar y controlar las reservas de sus clientes, y qué diferencia habrá entre vendedor y administrador?




