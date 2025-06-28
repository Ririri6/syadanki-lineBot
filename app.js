const express = require("express");
const line = require("@line/bot-sdk");
const ngrok = require("ngrok");
require("detenv").config();
const xlsl = require("xlsx"); //Excel読み込みライブラリ

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const app = express();
