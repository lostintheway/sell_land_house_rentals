"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.QuestionModel = mongoose_1.default.model('Product', new mongoose_1.default.Schema({
    userID: { type: String, required: true },
    title: { type: String, required: true },
    annwer: { type: String, required: true },
    status: { type: Number, required: true },
    users: [{ type: String }],
}));
