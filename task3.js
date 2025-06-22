//Создание композитного индекса:
db.users.createIndex({ first_name: 1, last_name: 1 });

//Проверка, что индекс используется (через explain()):
db.users.find({ first_name: "Владимир", last_name: "Владимирович" }).explain("executionStats")
