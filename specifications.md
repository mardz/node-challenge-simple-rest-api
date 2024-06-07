### Especificaciones generales
Cada perfil de mascota debe incluir la siguiente información:
* ID único de mascota
* Nombre de mascota
* Especies (p. ej., "Dog" para perro, "Cat" para gato) 
* Raza (p. ej., dependiendo de la especie, "Labrador Retriever" para perro, "Persian" para gato, etcétera )
* Fecha Nacimiento
* Fecha Adopcion (solo si ya fue adoptado)
* Género ("Male" para macho, "Female" para hembra)
* Descripción 
* Imagen (formato URL, asume que la imagen estaría previamente guardada en un servicio externo)
* Estado de adopción ("Available" o disponible, "Pending" o pendiente, "Adopted" o adoptado)

Las solicitudes de adopción deben contener la siguiente informacion:
* Nombre de solicitante
* Email de solicitante
* Telefono de solicitante
* Mascota que quiere adoptar
* Notas donde pueda explicar razones por que se aceptó o rechazó la petición de adopción (llenadas por usuarios administradores)
* Estado de solicitud de adopción (p. ej. "Received", "In Review", "Accepted", "Rejected")

#### Reglas adicionales a considerar
* Ver lista de mascotas disponibles para adoptar
    * Permitir filtros por especie, raza, género, edad/lifeStage (puppy < 1 año, adult 1 a 7 años, senior > 7 años)
* Ver detalle de mascota
* Crear una solicitud de adopción para mascotas específicas
* Solo permitir 1 solicitud de adopción activa por mascota

#### Proceso de Adopción:
Cuando un usuario envía una solicitud de adopción, actualice el estado de adopción de la mascota a "Pending" para que no se muestre hasta no resolver su situación.
Permita que los administradores revisen y aprueben/rechacen solicitudes de adopción, actualizando el estado de la mascota en consecuencia. 