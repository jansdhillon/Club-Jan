"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230227042415 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230227042415 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20230227042415 = Migration20230227042415;
//# sourceMappingURL=Migration20230227042415.js.map