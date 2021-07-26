/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

const { merge }         = require('webpack-merge');
const common            = require('./webpack.common.js');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const SOURCE_ROOT = __dirname + '/src';

module.exports = merge(common, {
   mode: 'development',
   watch: true,
   devtool: 'inline-source-map',
   performance: { hints: "warning" },
   devServer: {
      inline: true,
      proxy: [{
         context: ['/content', '/etc.clientlibs'],
         target: 'http://localhost:4502',
      }]
   },
   plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:7000/'
      })
   ]
});
