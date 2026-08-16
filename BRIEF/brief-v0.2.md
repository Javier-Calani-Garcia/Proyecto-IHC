# Brief v0.2.0 – Plataforma Móvil de Alquiler y Multicategoría de Trajes

## Problema Revisado
## ¿Qué dificultad se mantiene después de investigar?
El cliente puede reservar un traje en la plataforma, pero persiste el riesgo de doble asignación porque las reservas también se realizan de forma presencial en la tienda (ej. abuelos que reservan para sus nietos). El dueño, al gestionar reservas en dos canales (físico y digital), puede olvidar actualizar el inventario en la plataforma, dejando el traje como "disponible" cuando en realidad ya está reservado, lo que genera conflictos y pérdida de confianza.

## Usuario y Contexto
Clientes a partir de 18 años que necesitan alquilar trajes para asistir o participar en eventos formales y sociales. Que acceden a la plataforma desde su celular con conexión a internet, especialmente cuando son épocas de demanda alta como celebraciones masivas (festividades locales, temporada de graduaciones, fines de semana largos, fiestas patrias) y fechas especiales que varían según la planificación de cada usuario. Las limitaciones son los clientes que no tienen experiencia previa en aplicaciones de alquiler; los dueños de tiendas tienen poco tiempo para actualizar el inventario manualmente.

## Evidencia
-Los dueños de tiendas registran reservas en libretas y al atender múltiples consultas simultáneas olvidan anotar o actualizar los apartados.
-Los dueños no pueden mantener un control preciso de las tallas cuando tienen más de 4 clientes preguntando por diferentes prendas al mismo tiempo.
-Los dueños presentaban varios colores del mismo traje diciéndole al cliente que "estos nomás tendría por el momento, pero este de aquí también llevan, es lo mismo solo que el color es un poco diferente pero se asemeja", cuando no encuentran el traje en el color que el cliente pide.
-Cuando realizan un descuento y al poco rato el cliente se va de la tienda y vuelve, se les olvida el descuento y el cliente debe hacerle acuerdo.

## Insight
## ¿Qué aprendimos que no sabíamos al crear v0.1?
Aprendimos que el problema no era solo la falta de un catálogo digital accesible, sino la falta de sincronización entre las reservas físic (en tienda) y las digitales, lo que genera doble asignación de trajes. También descubrimos que los dueños pierden el control del inventario específicamente cuando atienden a más de 4 clientes a la vez, y que sustituyen colores o pierden descuentos acordados por falta de registro, afectando la confianza del cliente.

## Hipótesis Revisada
## ¿Qué creemos ahora y qué falta comprobar?
Creemos que el problema no se resuelve solo con un catálogo digital, sino con un sistema que sincronice en tiempo real las reservas físicas y digitales, y que permita al dueño registrar una reserva presencial en menos de 30 segundos (sin frenar la atención al cliente que tiene enfrente). Si logramos que el dueño actualice el estado de un traje desde su celular en el momento en que lo aparta en tienda, esperamos reducir a cero los casos de doble asignación y que el cliente confíe en que la disponibilidad mostrada en la app es real.


## Alcance
## Qué entra en la primera versión y qué queda fuera.
**Entra:**
- Catálogo digital con fotos, tallas, colores y precios.
- Reserva en línea con confirmación inmediata.
- Estados de inventario: disponible / reservado / alquilado / en mantenimiento.
- Registro de descuentos acordados asociado a la reserva (para que no se pierdan entre visitas).

**Queda fuera (por ahora):**
- Pagos en línea o pasarela de pago.
- Sistema de facturación o contabilidad.
- Notificaciones automáticas por WhatsApp/SMS.
- Multi-tienda o multi-sucursal (se valida primero con una tienda).
- Recomendaciones automáticas de tallas o colores alternativos.
- Botón de "reserva rápida presencial" para que el dueño bloquee un traje desde su celular en segundos, sin llenar un formulario largo.

## Flujo Principal
## La tarea de inicio a fin en 3 a 7 pasos.
## Flujo Principal
1. El cliente abre la app y filtra por categoría, talla y color.
2. El cliente ve el catálogo con disponibilidad en tiempo real (incluyendo lo apartado en tienda).
3. El cliente selecciona un traje, elige la fecha del evento y confirma la reserva.
4. El sistema bloquea automáticamente el traje, envía confirmación inmediata y ofrece la opción (no obligatoria) de agendar una cita para probárselo dentro de las próximas 72 horas.
5. (Canal físico) El dueño, al recibir una reserva presencial, marca el traje como reservado desde su celular en segundos.
6. (Si el cliente eligió probárselo) Llega a la tienda dentro del plazo, se prueba el traje y puede pedir ajustes (ej. más brillo, algún detalle); el dueño registra y realiza la modificación. (Si el cliente no eligió probárselo, o no fue) La reserva se mantiene sin cambios; el traje se entrega tal cual en la fecha establecida.
7. El cliente recoge el traje en la fecha acordada; el dueño actualiza el estado a "alquilado".

## Criterios de Éxito
## 3 señales observables para saber si funciona.
1. Cero casos de doble asignación durante el periodo de prueba (mismo traje reservado por dos clientes distintos).
2. Al menos el 70% de los clientes completan una reserva en menos de 15 minutos desde que abren la app.
3. El dueño registra una reserva presencial en la app en menos de 50 segundos, sin necesidad de detener la atención al cliente presente.


## Primer Requerimiento
## Una capacidad concreta para diseñar o implementar.
Función de "reserva rápida presencial": el dueño, desde su celular, selecciona el traje, la talla y el color, marca la fecha, y con un solo toque adicional bloquea el traje en el sistema como "reservado" sin formularios largos ni pasos intermedios para que el inventario digital refleje al instante lo que ocurre en tienda, incluso con varios clientes esperando.


## Preguntas Abiertas
## Qué todavía no podemos afirmar.
- ¿Los dueños usarán el celular para registrar reservas presenciales de forma consistente, o volverán a la libreta bajo presión?
- ¿Qué pasa si el dueño no tiene señal de internet en el momento de la reserva presencial? ¿Se necesita un modo offline con sincronización posterior?
- ¿Cómo se debe manejar la sustitución de color/talla dentro de la app se muestra como alternativa sugerida, o simplemente no se oferta si no hay stock exacto?
- ¿El registro de descuentos debe requerir aprobación o límite, para evitar que se usen indiscriminadamente?
- ¿Cuántas tiendas/dueños se necesitan en el piloto para validar el criterio de "cero doble asignación" con confianza?