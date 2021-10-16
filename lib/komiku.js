const cheerio = require("cheerio")
const axios = require('axios')

function komiku(judul) {
	return new Promise(async(resolve,reject) => {
	axios.get('https://data3.komiku.id/cari/?post_type=manga&s=' + encodeURIComponent(judul))
	.then(({ data }) => {
	const $ = cheerio.load(data)
	const hasil = [];
	$('body > main > section > div.daftar').each(function (a,b) {
		const img = $(b).find('div:nth-child(1) > div.bgei > a').find('img').attr('data-src')
		const ind = $(b).find('div:nth-child(1) > div.kan > span').text().trim()
		const or = $(b).find('div:nth-child(1) > div.kan > a > h3').text().trim()
		const up = $(b).find('div:nth-child(1) > div.kan > p').text().trim()
		const des = $('div:nth-child(1) > div.kan > p').text().trim()
		const result = {
			image: img,
			title: or,
			indo: ind,
			update: up.split('.')[0],
			desc: des.split('. ')[1]
		}
		hasil.push(result)
		if ($(b).find('div:nth-child(1) > div.bgei > a').find('img').attr('data-src') !== undefined) {
		resolve(hasil)
	} else {
		reject({status: 404,message:'Not Found'})
	}
	})
})
	.catch(reject)
})

}

module.exports = { komiku }
