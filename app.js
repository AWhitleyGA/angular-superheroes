let superheroData = [
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Captain America", phone_number: "334-839-3200", affiliation: "Avengers", img_url: "http://static.srcdn.com/wp-content/uploads/Captain-America-Glamour.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Batman", phone_number: "334-653-8873", affiliation: "Justice League", img_url: "http://wallpapermad.com/wp-content/uploads/2016/09/batman-wallpaper1.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Thor", phone_number: "334-839-0398", affiliation: "Avengers", img_url: "http://static.comicvine.com/uploads/original/11112/111123593/3279571--comics-thor-lightning-marvel-mjolnir-fresh-new-hd-wallpaper--.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Superman", phone_number: "334-653-3473", affiliation: "Justice League", img_url: "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/345520/d94bdc8cef8245408ed30a6f83d6ac6bdf01226a.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Hulk", phone_number: "334-839-2039", affiliation: "Avengers", img_url: "https://images7.alphacoders.com/328/328787.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Flash", phone_number: "334-653-3843", affiliation: "Justice League", img_url: "http://5dwallpaper.com/wp-content/uploads/2016/07/flash-wallpaper7.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Doctor Strange", phone_number: "334-839-3019", affiliation: "Avengers", img_url: "https://bamsmackpow.com/files/2014/06/Doctor_Strange_Large.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Wonder Woman", phone_number: "334-653-9072", affiliation: "Justice League", img_url: "http://img.wallpaperfolder.com/f/710D55FE6EDD/wonder-woman-1920x1080-76365.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Hawkeye", phone_number: "334-839-9702", affiliation: "Avengers", img_url: "http://img.wallpaperfolder.com/f/711C54B89709/hawkeye-artwork-1920x1080.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Aquaman", phone_number: "334-653-3992", affiliation: "Justice League", img_url: "http://static.srcdn.com/wp-content/uploads/Aquaman-King-of-Atlantis.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Spiderman", phone_number: "334-839-3920", affiliation: "Avengers", img_url: "http://vignette4.wikia.nocookie.net/hombre-arana/images/4/4c/Spiderman_perfil.png/revision/latest?cb=20140608225748&path-prefix=es" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Cyborg", phone_number: "334-653-1020", affiliation: "Justice League", img_url: "http://static2.comicvine.com/uploads/scale_small/6/66303/4519749-cyborg-01-cover-v02-600-color-blue-4dacd.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "Vision", phone_number: "334-839-8300", affiliation: "Avengers", img_url: "http://esq.h-cdn.co/assets/15/18/1430500341-age-of-ultron-vision-hd.jpg" },
  { universe: "dc", team_logo: "http://img03.deviantart.net/6e3e/i/2016/240/f/d/justice_league_logo___transparent_by_asthonx1-dafn02k.png", name: "Green Lantern", phone_number: "334-653-2070", affiliation: "Justice League", img_url: "http://thekoalition.com/images/2015/06/171183.jpg" },
  { universe: "marvel", team_logo: "https://s-media-cache-ak0.pinimg.com/originals/16/1e/64/161e648f23f29183aa278df513ca35cb.png", name: "War Machine", phone_number: "334-839-2394", affiliation: "Avengers", img_url: "http://www.zoom-comics.com/wp-content/uploads/sites/36/2011/12/war-machine-in-the-sky.jpg" },
]


angular
  .module("superheroes", [])
  .controller("superheroesController", superheroesController )


function superheroesController() {
  this.superheroes = superheroData
}
