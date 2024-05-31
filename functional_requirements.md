## Requerimientos funcionales

La primera versión de la API (v1) se busca tener la siguiente funcionalidad:
* Operaciones CRUD sobre los perfiles de mascotas
    * GET /v1/pets?species=:value&breed=:value&lifeStage=:value
    * GET /v1/pets/:id
    * POST /v1/pets
    * PUT /v1/pets
    * DELETE /v1/pets
* Enviar solicitud de adopción
    * POST /v1/adoptions
* Seguimiento del estado de solicitudes de adopción buscando por email
    * GET /v1/adoptions?email=:value
* Lista de solicitudes de adopción filtrable por status
    * POST /v1/adoptions?status=:value
* Resolver status de petición de adopción
    * POST /v1/adoptions/:id/resolve
* No es un requisito crear usuarios.