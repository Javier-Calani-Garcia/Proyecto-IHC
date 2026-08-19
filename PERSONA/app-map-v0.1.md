# App map v0.1

## Alcance de la primera versión
El usuario encuentra un traje específico y lo reserva para una fecha. La aplicación se enfoca en completar el ciclo de reserva digital de principio a fin.

## Estructura principal

```text
App de alquiler de trajes
│
├── Inicio
│ └── Categorías principales
│ ├── Vestidos
│ └── Trajes formales
│
├── Lista de trajes
│ └── Resultados filtrados por categoría
│ └── Traje específico 
│
├── Detalle del traje
│ ├── Fotos
│ ├── Tallas disponibles
│ └── Precio
│
└── Reserva
├── Seleccionar fecha del evento
├── Datos del cliente (nombre y teléfono)
└── Confirmación.
```
**Camino principal:**  
`Inicio → Trajes formales → Vestido → Reservar → Confirmación`


## Límites del alcance
**Entra (V1):**

- Navegación por 2 categorías principales

- Visualización de fotos del traje

- Visualización de tallas 

- Visualización de precio

- Reserva con fecha del evento

- Registro de datos básicos del cliente (nombre y teléfono)

- Confirmación de reserva exitosa


**Queda fuera (V1):**

- Búsqueda por texto

- Filtros avanzados (talla, color, precio)

- Historial de "Mis reservas"

- Panel de inventario para la tienda

- Registro de devoluciones

- Descuentos y promociones

- Piezas incluidas

- Pagos en línea

- Facturación

- Notificaciones

- Multi-tienda

- Recomendaciones automáticas

