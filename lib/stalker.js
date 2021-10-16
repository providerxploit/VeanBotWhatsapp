const axios = require('axios')
const cheerio = require('cheerio')

async function igstalk(username) {
return new Promise(async(resolve, reject) => {
await axios.request({
method: "get",
url: `https://www.instagram.com/${username}/?__a=1`,
headers: {
"User-Agent":"Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
"Cookie":'mid=YT5aMwABAAE8mK0FHN7EHT-7pyid; ig_did=D995B665-EE36-4973-8861-2A0B4786235D; ig_nrcb=1; csrftoken=LaVRYtnZmHv5y7jNNMSXGH6NxDUv5DMl; ds_user_id=43861906163; sessionid=43861906163%3APP0ntsNdAt0H4p%3A24; shbid="17127\05443861906163\0541665346157:01f7aad61603c99be44eda8e2c9f0a1c79ccd1de8574fbef34fd2c0fa88350f791aa0c00"; shbts="1633810157\05443861906163\0541665346157:01f74f9b86f88214797215927f8b2f43d8e8a1a2f2013b82ee583889c19eaac6b3bf3a4f"; rur="PRN\05443861906163\0541665346809:01f70532eed90f56357f6e2d609ca7f8c50c323371b4e997149fee06efe6189ab6b98403"',
"Origin":"https://www.instagram.com",
"Accept-Language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
}
}).then(anu => {
    const metaData = anu.data.graphql.user;
    const final = {
      username: metaData.username,
      full_name: metaData.full_name ? metaData.full_name : "-",
      biography: metaData.biography ? metaData.biography : "-",
      followers: metaData.edge_followed_by.count+" Followers",
      following: metaData.edge_follow.count+" Following",
      posts_count: metaData.edge_owner_to_timeline_media.edges.map(x => x.node).length+" Posts",
      external_url: metaData.external_url ? metaData.external_url : "-",
      is_private: typeof metaData.is_private !== true ? "Not Private":"Private Account",
      is_verified: typeof metaData.is_verified !== true ? "Not Verified":"Is Verified",
      profile_url: metaData.profile_pic_url_hd
    };
    resolve(final);
  }).catch(reject);
});
}

async function ttstalk(username) {
return new Promise(async(resolve, reject) => {
axios.request({
  method:"GET",
  url: `https://www.tiktok.com/@${username}`,
  headers:{
    "sec-ch-ua":'"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    "upgrade-insecure-requests":1,
    "user-agent":"Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language":"id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "cookie":"MONITOR_WEB_ID=d996d521-6812-4143-a391-8bc4e11fa505;_tea_utm_cache_1284={%22utm_source%22:%22copy%22%2C%22utm_medium%22:%22android%22%2C%22utm_campaign%22:%22client_share%22};__tea_cookie_tokens_1284=%257B%2522web_id%2522%253A%2522%2522%252C%2522timestamp%2522%253A1634031770804%257D;R6kq3TV7=ANtfOXR8AQAA3VPUSAcm7wCjcM6T5z2rzfvL2LPfxBnJ_8_x10fH8JHzUkPg|1|0|85c4a5e59e857d239c6bbcb3229d3c8aebf96aba;msToken=t4rJ6yOXuS7p30XZHEwYfbJfo88Iv18Tp1ADm-r_DNiVjTVrrb_L6FpWEs1jO4hx_EAszUu9fFEPhMzKDMHDHmNC8Col4L7uyMi7PbUc-spmsvPfQgKX_wnKS39QvugyoDJGvA==;ttwid=1%7CfFYYdxzxTV-5k0QZ7GDgOX_-jIZSdJu-mVz-WdmCkG4%7C1634037553%7Ce3e78eeffee7fdbc48c784f87940f6d515473dcedd149c63a26b9c0bcb006951",
    "set-cookie":"tt_csrf_token=ZJx22J9TTEumgDRDzId2ZKci; path=/; domain=.tiktok.com; samesite=lax; secure; httponly"
  }
}).then(anu => {
  $ = cheerio.load(anu.data)
  script = $("script[id='__NEXT_DATA__']").get()
  let results;
  for(let itu of script){
    json = itu.children[0].data;
    results = JSON.parse(json)
  }
  resolve(results.props.pageProps.userInfo)
})
});
}

module.exports = { igstalk, ttstalk }