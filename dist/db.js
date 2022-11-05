"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistory = exports.insertDataPoint = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let db, histroy;
const URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const client = new mongodb_1.MongoClient(URL);
client.connect().then(() => {
    db = client.db("coinsbit");
    histroy = db.collection("histroy");
});
function insertDataPoint(dataPoint) {
    histroy.insertOne(dataPoint);
}
exports.insertDataPoint = insertDataPoint;
function getHistory(market, from, to) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield histroy.find({
            market,
            time: {
                $gte: from,
                $lte: to
            }
        }).toArray();
    });
}
exports.getHistory = getHistory;
