/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 5,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "action",
      "aventure",
      "romance",
      "animation",
      "comédie",
      "thriller",
      "horreur",
      "western",
      "drame"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 5,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "action",
      "aventure",
      "romance",
      "animation",
      "comédie",
      "thriller",
      "horreur"
    ]
  }))

  return app.save(collection)
})
