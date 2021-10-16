const axios = require("axios");
const cheerio = require("cheerio");

 const mangatoon = async (search) => {
 if (!search) return "No Querry Input! Bakaa >\/\/<";
 try {
 const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
 method: "GET",
 headers: {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
 }
 });
 const hasil = [];
 const $ = cheerio.load(res.data);
 $('div.recommend-item').each(function(a, b) {
 let comic_name = $(b).find('div.recommend-comics-title > span').text();
 let comic_type = $(b).find('div.comics-type > span').text().slice(1).split(/ /g).join("");
 let comic_url = $(b).find('a').attr('href');
 let comic_thumb = $(b).find('img').attr('src');
 const result = {
 status: res.status,
 creator: "@dehan_j1ng",
 comic_name,
 comic_type,
 comic_url: 'https://mangatoon.mobi' + comic_url,
 comic_thumb
 };
 hasil.push(result);
 });
 let filt = hasil.filter(v => v.comic_name !== undefined && v.comic_type !== undefined);
 return filt;
 } catch (eror404) {
 return "=> Error =>" + eror404;
 }
}

module.exports = { mangatoon };