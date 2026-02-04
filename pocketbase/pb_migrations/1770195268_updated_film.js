/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = user.id",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})
