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
exports.serviceAccount = exports.firebaseApi = void 0;
var firebaseAdmin = __importStar(require("firebase-admin"));
exports.firebaseApi = {
    apiKey: 'AIzaSyDB6z36BvQLh68Fyb50sUipCVMhBihfvVU',
    authDomain: 'ecommerceapp-5a2de.firebaseapp.com',
    databaseURL: 'https://ecommerceapp-5a2de.firebaseio.com',
    projectId: 'ecommerceapp-5a2de',
    storageBucket: 'ecommerceapp-5a2de.appspot.com',
    messagingSenderId: '947716179971',
    appId: '1:947716179971:web:cba56bd518a097d66be636',
    measurementId: 'G-69E19GGT4J',
};
exports.serviceAccount = {
    type: 'service_account',
    project_id: 'ecommerceapp-5a2de',
    private_key_id: '97db8438efb02b9ee400604651374310dbc8df8b',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC5twWhGebsomIh\nngocuY4B/QZf5xL8ry5U6m73Pw6VDN6mG1MPuiL42FW6ZV/GyXzespRGM9gjfMj2\nuQEvOl0BKcxwY/YeXz/Vm8IJbqtAnbSmiICj0vyzSRVOsFR9eiZ6tDTWPQL2uHCV\nXXQaj9Hk3cF0O+xZf1VFbezZ86UySKm2B0+zeEzIppaUVEOgW5/oYK55V7DAAVFN\nVWVa2LyTDiwIJOzHmELMZHCUQWtf6iZnzu8jrahAoIvMdImikj0YODrsQNEwy25A\n9+Mise7nmMiuAxeMa3glosPv5caaZFwFQWHEmoUZ9H2U2tCoMHxbqRb+d6ChtESr\nxVUGppHJAgMBAAECggEAJLOCNcmwJLCckwcv+WhEI6l00owQaQZXsilYP51jDNqr\nv4jj29ZNpf7exkTVbiwQdNQ20D7bpnu5HWUHUmWGzr2LbOScVXk+XMD40jNgPZdN\nBaIxRe7iyK2XO+NF9zwmEZa+YF5TUR23BhWfZcZpVQDsA8P529/5ooxsQ9BOI8b4\noq4aFqwgjfBYrFzsChhGZR9GvebiLs100wdXXUF/ShkzjRfo59AWEKZJ5GOcenGI\nGMu6QAklC5LIt1MdMV1YYYDQ0DuYTyAvagBSz/2KnETN2GapPhG10YS7bKkCqWuX\nKplFZvQxrzBrP0KMa+pAGULd/Emj8m6X32RlxmNDfwKBgQD0Nyssf3u1H25zwo6Z\nYDNrjfji3yOtPa0Lxy8IdX2eoriVRFM8y/r50q2iB0gc7FJhxzhFBGLfa+Wt8+9k\nfn2RH2L5DYdS/dudssFkArym1E3qnRnyGXWcmLqb9x7XcrG2Z3Kb/v/1zKWGCGmH\nzQVM7ofCpXmDdCeQZdx6uPqZqwKBgQDCrS/U3+rbmHq5wjvv5+U6Occ391kkfrWR\nRJAVbgp4dyYboGEcI2dTfwdzlXQTdWvHJqAmvfJHyLSngbsRB4cm4VtiKrJ8LbBi\ndv4yWOgxxeuA/lmr7D7sz8EwQYHvNzqdqq+/7TQAOk0mV1hWFJDfFkJS83jB90+P\n0JzMsFfWWwKBgQCHOQTu3qfg4kaGUnQi+OF/7FyjQmq+wifPHbstM+EatX7/J5Xv\nVALj0YPS87U6TqBPA8BkdslIbLYAW9FyE5fzgy2KObN0gJvZ9eCfP+S1e1ipT9PN\n+crlqqupMGwjX56HIUCUn92afHYqgP3t89e7gVgqrvVZlDdT/RLX4RThgQKBgBng\nOTZbWPU9TDq6pYra0O4vVdqLhw7BxNJ9QYWHrd6bP7Z2V9IMpqRDgzMKz3XyqpO6\n/5iGsNh3xgNpy/qUfJNfau0ebcDxtbsww9LfXGWZQBdSN4sRiL+jUbNfUa0BM0pX\nsKqbFcld9nk9LOGsNCFi7Qfnksp9W9bqzJysZ9B3AoGBAIBr4Cpjl+LCx0jNuSzb\nH6qlIl4MhSMUnBT6CZe1/n8uTtV8TLxWLk7MHL+qr+f0NEAmvA6pvNnQF5Tso6n+\nvDMnhZ/FbJIOXzHFSeLHl/iiwA9JPv5VyNV/FiRuSiQ9FsYEkOn5RtOvziuB/YT6\njqNjIGAXod/IE11gnMTvWUwF\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-2lay0@ecommerceapp-5a2de.iam.gserviceaccount.com',
    client_id: '114208556808926131880',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2lay0%40ecommerceapp-5a2de.iam.gserviceaccount.com',
};
// import serviceAccount from './config/serviceAccount.json';
// import {firebaseApi, serviceAccount} from './config/firebaseApi';
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(exports.serviceAccount),
    databaseURL: exports.firebaseApi.databaseURL,
});
exports.default = firebaseAdmin;
