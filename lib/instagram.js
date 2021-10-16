const axios = require("axios");
const cheerio = require("cheerio");

function igDown(Url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield axios.default.request({
                url: "https://instadownloader.co/",
                method: "GET",
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then((respon) => __awaiter(this, void 0, void 0, function* () {
                const $ = cheerio.default.load(respon.data);
                const token = $('#token').attr('value');
                const BodyForm = {
                    url: Url,
                    token: token
                };
                yield axios.default({
                    method: "POST",
                    url: "https://instadownloader.co/id/system/action.php",
                    data: new URLSearchParams(Object.entries(BodyForm)),
                    headers: {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9,id;q=0.8",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                    }
                }).then(response => {
                    const res = {
                        status: response.status,
                        author: "X - Far Dev",
                        result: {
                            thumb: response.data.thumbnail,
                            link_awal: response.data.video_url,
                            data: response.data.links
                        }
                    };
                    resolve(res);
                }).catch(reject);
            }));
        }));
    });
}

function igtv(link) {
return new Promise(async(resolve, reject) => {
let config = {
'url': link,
'submit': ''
}
axios('https://downloadgram.org/igtv-downloader.php',{
method: 'POST',
data : new URLSearchParams(Object.entries(config)),
headers: {
"cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
})
.then(tod => {
const $ = cheerio.load(tod.data)
resolve({
link: $('#downloadBox > a').attr('href')
})
})
})
}

function igstalk(username) {
    return new Promise(async(resolve, reject) => {
    let {data} = await axios('https://www.instagram.com/'+username+'/?__a=1', {
        'method': 'GET',
        'headers': {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'cookie': 'ig_did=EA7DC112-2D2C-45CF-9B49-911C077DC4CB; mid=X93bwQAEAAHzC4NGbr6c9GYzt-3Y; ig_nrcb=1; shbid="10275\0548779859677\0541661946092:01f7424bc919399c1dc38f4eac6e8d8160709204e1344a7194bbd6582cace763d309b43e"; shbts="1630410092\0548779859677\0541661946092:01f7f9f9b9d96f9609bf67a9231b46b3d57b4b00e5490f411cd28f129c8434e32f4c5b09"; csrftoken=jcEYSDhU18NVlrs6wN4BHnH9gnRSBHlP; ds_user_id=49121569472; sessionid=49121569472%3AOOQibX82GkZK5W%3A25; rur="EAG\05449121569472\0541661946359:01f74f4d54dfde5712dc7d9b67f4b85b9b028952a12e14d704146184b4df470026d96097',
        }
    })
    let user = data.graphql.user
    let json = {
        creator: 'X - Far Dev',
        status: 'ok',
        code: 200,
        username: user.username,
        fullname: user.full_name,
        verified: user.is_verified,
        video_count_reel: user.highlight_reel_count,
        followers: user.edge_followed_by.count,
        follow: user.edge_follow.count,
        is_bussines: user.is_business_account,
        is_professional: user.is_professional_account,
        category: user.category_name,
        thumbnail: user.profile_pic_url_hd,
        bio: user.biography,
        info_account: data.seo_category_infos
    }
    resolve(json)
})
}

module.exports = { igDown, igtv, igstalk };