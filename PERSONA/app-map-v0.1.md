# App map v0.1

## Alcance de la primera versión

La aplicación conecta la búsqueda y reserva del cliente con la gestión de inventario de la tienda. La disponibilidad debe reflejar tanto las reservas digitales como las presenciales.

## Estructura principal

```text
App de alquiler de trajes
├── Inicio / Catálogo
│   ├── Categorías
│   │   ├── Trajes típicos
│   │   ├── Vestidos
│   │   └── Trajes formales
│   ├── Búsqueda
│   ├── Filtros
│   │   ├── Talla
│   │   ├── Color
│   │   └── Precio
│   └── Resultados con disponibilidad actualizada
├── Detalle del traje
│   ├── Fotos y descripción
│   ├── Tallas y colores
│   ├── Piezas incluidas
│   └── Precio y descuentos
├── Reserva
│   ├── Fecha del evento
│   ├── Datos del cliente
│   ├── Confirmación
│   └── Reserva guardada
├── Mis reservas
│   ├── Próximas reservas
│   ├── Detalle y descuento acordado
│   └── Estado: reservado / alquilado / devuelto
└── Panel de tienda
    ├── Inventario
    │   ├── Disponible
    │   ├── Reservado
    │   ├── Alquilado
    │   └── En mantenimiento
    ├── Reserva rápida presencial
    ├── Registrar piezas y descuento
    └── Registrar devolución y estado
```


## Límites del alcance

**Entra:** catálogo visual, filtros, disponibilidad en tiempo real, reservas digitales, registro rápido de reservas presenciales, estados del inventario, piezas incluidas, descuentos y devoluciones.

**Queda fuera:** pagos en línea, facturación, notificaciones por WhatsApp o SMS, multi-tienda y recomendaciones automáticas.