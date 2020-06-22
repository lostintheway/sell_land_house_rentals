"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModel = exports.CategoryModel = exports.ProductModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.ProductModel = mongoose_1.default.model('Product', new mongoose_1.default.Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    imgLink: { type: String, required: true },
    brandID: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Brand', required: true },
    catID: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Category', required: true },
}));
exports.CategoryModel = mongoose_1.default.model('Category', new mongoose_1.default.Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    imgLink: { type: String, required: true },
}));
exports.BrandModel = mongoose_1.default.model('Brand', new mongoose_1.default.Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    imgLink: { type: String, required: true },
}));
