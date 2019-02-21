var appid =85141;
var secret = "1b8df1536ebe488c923b47d1d5d204d3";
var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;

var textJoke = "https://route.showapi.com/341-1" + param;
var imgJoke = "https://route.showapi.com/341-2" + param;
var gifJoke = "https://route.showapi.com/341-3" + param;
var BaseURL = "http://api.budejie.com/api/api_open.php";
var parameters = 'a=list&c=data&type=';

//module.exports为固定写法

module.exports = {
  textJoke: textJoke,
  imgJoke: imgJoke,
  gifJoke: gifJoke,
  BaseURL: BaseURL,
  parameters:parameters
};