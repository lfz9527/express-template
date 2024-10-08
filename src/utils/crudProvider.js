// 常用的mongodb 增删改查操作方法
class BaseCrudProviderCls {
  constructor(DBModel) {
    this.DBModel = DBModel;
  }
  async create(input) {
    const data = await this.DBModel.create(input);
    return data.toJSON();
  }
  async update(query, update, options) {
    return this.DBModel.updateOne(query, update, options);
  }

  async find(query, projection, options) {
    const result = await this.DBModel.find(query, projection, options);
    return result && result.map((d) => d.toJSON());
  }
  async findOne(query, projection, options) {
    const result = await this.DBModel.findOne(query, projection, options);
    return result && result.toJSON();
  }
}

const BaseCrudProvider = function (DBModel) {
  const CRUD = new BaseCrudProviderCls(DBModel);

  return {
    create: CRUD.create.bind(CRUD),
    update: CRUD.update.bind(CRUD),
    find: CRUD.find.bind(CRUD),
    findOne: CRUD.findOne.bind(CRUD),
  };
};

module.exports = BaseCrudProvider;
