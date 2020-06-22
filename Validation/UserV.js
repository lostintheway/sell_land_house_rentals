"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = void 0;
var yup = __importStar(require("yup"));
// creating schema for yup validator
exports.RegisterSchema = yup.object({
    displayName: yup
        .string()
        .required()
        .max(40)
        .min(6)
        .label('First Name')
        .matches(/^[a-zA-Z0-9 ]*$/, 'Name cannot include special characters!'),
    email: yup.string().email().required().max(50).min(2).label('E-mail'),
    password: yup
        .string()
        .required()
        .max(30)
        .min(6)
        .label('Password')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{6,30}$/, 'Must include 1 lowercase, 1 uppercase letter, 1 number & no spaces'),
    phoneNumber: yup.string().required().min(10).max(15).label('Phone'),
});
