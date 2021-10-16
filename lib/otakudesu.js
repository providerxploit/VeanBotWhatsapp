const axios = require("axios");
const cheerio = require("cheerio");
const got_1 = __importDefault(require("got"));

function otakudesu(judul){
  return new Promise(async(resolve, reject) => {
  axios.get('https://otakudesu.moe/?s=' + judul + '&post_type=anime')
  .then(({ data }) => {
  const $ = cheerio.load(data)
  const result = {};
  let limk = $('#venkonten > div > div.venser > div > div > ul > li:nth-child(1) > h2 > a').attr('href')
  axios.get(limk).then(({ data }) => {
  const $$ = cheerio.load(data)
  result.message = 'By X - Far Dev'
  result.img = $$('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
  $$('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function(a, b) {
    result.judul = $$(b).find('p:nth-child(1)').text().replace('Judul: ','')
    result.jepang = $$(b).find('p:nth-child(2)').text().replace('Japanese: ','')
    result.rate = $$(b).find('p:nth-child(3)').text().replace('Skor: ','')
    result.produser = $$(b).find('p:nth-child(4)').text().replace('Produser: ','')
    result.tipe = $$(b).find('p:nth-child(5)').text().replace('Tipe: ','')
    result.status = $$(b).find('p:nth-child(6)').text().replace('Status: ','')
    result.episode = $$(b).find('p:nth-child(7)').text().replace('Total Episode: ','')
    result.durasi = $$(b).find('p:nth-child(8)').text().replace('Durasi: ','')
    result.rilis = $$(b).find('p:nth-child(9)').text().replace('Tanggal Rilis: ','')
    result.studio = $$(b).find('p:nth-child(10)').text().replace('Studio: ','')
    result.genre = $$(b).find('p:nth-child(11)').text().replace('Genre: ','')
    result.desc = $$('#venkonten > div.venser > div.fotoanime > div.sinopc').text().replace('.','\n') + $$(b).find('div.sinopc > p:nth-child(2)').text()
    result.batch = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
  })
  const lim = $$('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
  axios.get(lim).then(({ data }) => {
  const $$$ = cheerio.load(data)
    result.batchSD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(1) > a:nth-child(3)').attr('href')
    result.batchHD = $$$('#venkonten > div:nth-child(6) > ul > li:nth-child(3) > a:nth-child(3)').attr('href')
    resolve(result)
        })
      })
    })
  .catch(reject)
  })
}

function infootaku(URL) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield got_1.default.get(URL, {
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "accept-language": "en-US,en;q=0.9,id;q=0.8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
                }
            }).then(res => {
                const $ = cheerio.default.load(res.body);
                const hasil = [];
                const thumb = $('#venkonten').find('div.venser > div.fotoanime > img').attr('src');
                const sinopsis = [];
                $('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function (a, b) {
                    $(b).find('span').each(function (tyu, zu) {
                        const Data = $(zu).text().trim();
                        hasil.push(Data);
                    });
                });
                $('#venkonten > div.venser').find('div.fotoanime > div.sinopc').each(function (c, d) {
                    const Data = $(d).find('p').text().trim();
                    sinopsis.push(Data);
                });
                let Bio = "";
                for (const i of hasil) {
                    Bio += i + "\n";
                }
                const Result = {
                    status: res.statusCode,
                    author: "I`am Ra",
                    result: {
                        thumb: thumb,
                        bio: Bio,
                        sinopsis: sinopsis[0]
                    }
                };
                resolve(Result);
            }).catch(reject);
        }));
    });
}

const otakuongoing = async (p) => {
const res = await axios.get(`https://otakudesu.moe/ongoing-anime`)
const $ = cheerio.load(res.data)
const result = []
$('.venz').find('li > div.detpost').each(function(c, d) {
const judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
const thumb = $(d).find('div.thumb > a > div.thumbz > img').attr('src')
const eps = $(d).find('div.epz').text()
const hri = $(d).find('div.epztipe').text()
const link = $(d).find('div.thumb > a').attr('href')
const tgl = $(d).find('div.newnime').text()
result.push({ judul, thumb, eps, hri, tgl, link })
})
return result
}

module.exports = { otakudesu, infootaku, otakuongoing };