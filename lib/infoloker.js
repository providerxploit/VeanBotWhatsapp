const axios = require("axios");
const cheerio = require("cheerio");

async function infoloker(query){
  return new Promise((resolve, reject) => {
    axios.get(`https://www.jobstreet.co.id/id/job-search/${query}-jobs/`)
    .then((data) => {
      //console.log(data.data)
      const $ = cheerio.load(data.data)
      const job = [];
      const perusahaan = [];
      const daerah = [];
      const format = [];
      const link = [];
      const upload = [];
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a > div').each(function(a, b) {
        deta = $(b).text();
        job.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > span').each(function(a, b) {
        deta = $(b).text();
        perusahaan.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > span > span').each(function(a, b) {
        deta = $(b).text();
        daerah.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div.sx2jih0.zcydq852.zcydq842.zcydq872.zcydq862.zcydq82a.zcydq832.zcydq8d2.zcydq8cq > div.sx2jih0.zcydq832.zcydq8cq.zcydq8c6.zcydq882 > time > span').each(function(a, b) {
        deta = $(b).text();
        upload.push(deta)
      })
      for(let i=0; i<job.length; i++){
        format.push({
          job: job[i],
          perusahaan: perusahaan[i],
          daerah: daerah[i],
          upload: upload[i],
          link_Detail: 'https://www.jobstreet.co.id' + link[i]
        })
      }
      resolve(format)
    })
    .catch(reject)
  })
}

module.exports = { infoloker };