/**
 * Created by vajoylarn on 2017/6/13.
 */
let path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        publicPath: "/assets/",
        filename: 'bundle.js',
        //path: '/'   //ֻʹ�� dev-middleware ���Ժ��Ա�����
    }
};