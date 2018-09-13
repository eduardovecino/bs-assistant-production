"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const products_1 = require("./dialogflow/intents/products");
const actions_on_google_1 = require("../node_modules/actions-on-google");
class AppDialogFlow {
    constructor() {
        this.productIntents = new products_1.ProductIntents();
        console.log('AppDialogFlow constructor');
        this.app = actions_on_google_1.dialogflow({ debug: true });
        this.expressApp = express();
        this.config();
        this.expressApp.post('', this.app);
        // this.productIntents.intents(this.app);
        this.app.intent('Default Welcome Intent', conv => {
            console.log('INTENT: Default Welcome Intent');
            conv.ask('Hola');
        });
    }
    config() {
        // support application/json type post data
        this.expressApp.use(bodyParser.json());
    }
    initialize() {
        console.log('initialize');
    }
}
exports.default = AppDialogFlow;
const app = actions_on_google_1.dialogflow({ debug: true });
const expressApp = express().use(bodyParser.json());
expressApp.post('', app);
//# sourceMappingURL=app-dialogflow.js.map