## ANTES

**Qué problema de jerarquía, layout o espaciado observaron**


En la pantalla de "Detalles y Datos de Reserva" del Vestido Celeste, la información del producto (nombre, precio, tallas) y el formulario de reserva (correo, celular, fecha) se mostraban todos al mismo tiempo, sin agrupación clara. Ademas habia dos botones de acción visibles a la vez ("Reservar" y "Guardar"), lo que no dejaba claro cuál era la acción principal para completar la tarea. Los espacios entre elementos eran inconsistentes (medían entre 12px sin ningún criterio), lo que no ayudaba a distinguir qué información pertenecía junta.

## CAMBIO

**Qué modificaron en Figma y en el código**


Se dividió la pantalla en dos estados: 
(A) vista del producto con talla informativa y un solo botón "Reservar"
(B) formulario de reserva donde la talla se vuelve seleccionable y aparece un único botón de cierre "Guardar". Se aplicó una escala de espaciado de 8,16,24,32px: 8px entre elementos muy relacionados (etiqueta-input, círculos de talla), 16px entre contenido del mismo grupo (nombre-precio-tallas, campos del formulario), 24px entre el grupo de producto y el grupo de formulario, y 32px antes de cada botón de acción principal. El mismo criterio se implementó en el código del MVP con variables CSS y se ajustó el JavaScript para que solo un botón de acción esté visible a la vez.

## DESPUÉS

**Qué hizo la persona durante la prueba**

La persona encontró el botón "Reservar" sin que se le indicara dónde estaba. Entendió que debía elegir una talla antes de continuar. No tuvo dificultad para encontrar ningún campo del formulario y no hizo clic en nada inesperado ni mostró confusión en ningún punto. Al terminar de llenar el formulario, buscó el botón de confirmar debajo de este sin dudar y lo presionó directamente.



## SIGUIENTE

**Qué conservarán, corregirán o investigarán**


Conservaremos la separación en dos estados "03.Detalles y Datos de Reserva" A y B,   y la escala de espaciado de 8,16,24,32px, ya que la persona pudo completar la tarea sin ayuda ni confusión. Como siguiente paso, aplicaremos el mismo criterio de jerarquía y espaciado a las demás pantallas del flujo y probaremos con otras personas para confirmar que el resultado se repite antes de darlo por definitivo.



## FIGMA

https://www.figma.com/design/jsgAZTQJxWdZGsgzzknWwB/Plataforma-AlquilerTrajes?node-id=66-4&t=sjLQj6e15FdpxZGN-1