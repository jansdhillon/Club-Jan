"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const Post_1 = require("./entities/Post");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const main = async () => {
    console.log("dirname: ", __dirname);
    const orm = await core_1.MikroORM.init(mikro_orm_config_1.default);
    const post = orm.em.create(Post_1.Post, {
        title: 'my first post'
    });
    await orm.em.persistAndFlush(post);
    console.log("------sql 2-------");
    await orm.em.insert(Post_1.Post, { title: 'my second post' });
};
main().catch((err => {
    console.error(err);
}));
//# sourceMappingURL=index.js.map