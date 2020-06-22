"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = __importDefault(require("util"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var compression_1 = __importDefault(require("compression"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(compression_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// check auth middleware
// app.use('/', (req, res, next) => {
//   console.log(req.headers.authtoken);
//   if (req.headers.authtoken) {
//     firebaseAdmin
//       .auth()
//       .verifyIdToken(req.headers.authtoken.toString())
//       .then(() => {
//         next();
//       })
//       .catch(() => {
//         res.status(403).send('Unauthorized');
//       });
//   } else {
//     res.status(403).send('No token received');
//   }
// });
app.get('/', function (req, res) {
    res.send('Hello from ecommerce server.ts');
});
var accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'RequestErrors.log'), {
    flags: 'a',
});
app.use(morgan_1.default('combined', {
    stream: accessLogStream,
    skip: function (req, res) {
        return res.statusCode < 400;
    },
}));
var log_file_err = fs_1.default.createWriteStream(__dirname + '/ConsoleErrors.log', {
    flags: 'a',
});
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    log_file_err.write(util_1.default.format('Caught exception: ' + err) + '\n');
});
var Users_1 = __importDefault(require("./routes/Users"));
// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/users', Users_1.default);
// app.use('/agency', Agencies);
mongoose_1.default
    .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(function () { return console.log('Mongodb Successful'); })
    .catch(function (err) { return console.log('MgoERR:', err.message); });
var port = process.env.PORT || 6070;
app.listen(port, function () { return console.log('Listening to port:', port); });
