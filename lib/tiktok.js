const axios = require("axios");
const cheerio = require("cheerio");

 const UserAgent = () => {
ossss = [
'Macintosh; Intel Mac OS X 10_15_7',
'Macintosh; Intel Mac OS X 10_15_5',
'Macintosh; Intel Mac OS X 10_11_6',
'Macintosh; Intel Mac OS X 10_11_5',
'Windows NT 10.0; Win64; x64',
'Windows NT 10.0',
];
return `Mozilla/5.0 (${ossss[Math.floor(Math.random() * ossss.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(
Math.random() * 3,
) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}
    async function tiktokmusic(URL) {
return new Promise(async (resolve, reject) => {
GDF = await axios.get('https://www.tiktok.com/')
Cookie = "ttwid=1%7C5UyITGuqEDXVZHtmtbU-7V35lTk8--iB6IjJuxRKPTs%7C1625390616%7C62c0b171e938115d5940a9af40c377000bc616cc7b25dfd76557913951585606; Domain=.tiktok.com; Path=/; Expires=Mon, 04 Jul 2022 09:23:36 GMT; HttpOnlytt_webid_v2=6980999485653632513; path=/; expires=Mon, 04 Jul 2022 09:23:37 GMT; domain=.tiktok.com; samesite=none; secure; httponlytt_webid=6980999485653632513; path=/; expires=Mon, 04 Jul 2022 09:23:37 GMT; domain=.tiktok.com; samesite=none; secure; httponlytt_csrf_token=9u_ml89_dULuOD6oMp_zTH06; path=/; domain=.tiktok.com; samesite=lax; secure; httponly"
axios.get(URL, {
headers: {
'user-agent': UserAgent(),
'Cookie': Cookie
}
})
.then(({ data }) => {
var $ =cheerio.load(data)
ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)
meta = ttdata.props.pageProps.itemInfo.itemStruct
console.log(meta)
resolve({meta})
})
})
}
async function tiktok(Url) {
return new Promise (async (resolve, reject) => {
await axios.request({
url: "https://ttdownloader.com/",
method: "GET",
headers: {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(respon => {
 var $ =cheerio.load(respon.data)
 token = $('#token').attr('value')
axios({
url: "https://ttdownloader.com/req/",
method: "POST",
data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
headers: {
"accept": "*/*",
"accept-language": "en-US,en;q=0.9,id;q=0.8",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
}
}).then(res => {
 ch = cheerio.load(res.data)
 result = {
status: res.status,
result: {
nowm: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href'),
wm: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
}
}
resolve(result)
console.log(result)
}).catch(reject)
}).catch(reject)
})
}

module.exports = { tiktok, tiktokmusic };