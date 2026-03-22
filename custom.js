const abilities = [{
  ability: `Reimu Hakurei + Kyouko Kasodani: "Capable of floating through reality while reflecting sound waves."`
}, {
  ability: `Koishi Komeiji + Tsukasa Kudamaki: "Capable of slipping into the weakest spots of one's soul without the target ever realizing."`
}, {
  ability: `Utsuho Reiuji + Nue Houjuu: "Capable of disguising nuclear fusion as useless objects."`
}, {
  ability: `Doremy Sweet + Alice Margatroid: "Capable of utilizing dolls by eating and controlling dreams."`
}, {
  ability: `Shou Toramaru + Raiko Horikawa: "Capable of finding and utilizing treasures by making them follow a rhythm."`
}, {
  ability: `Sunny Milk + Hatate Himekaidou: "Capable of refracting light to render the user invisible using thoughtography."`
}, {
  ability: `Keine Kamishirasawa + Minamitsu Murasa: "Capable of manipulating history through shipwrecks."`
}, {
  ability: `Remilia Scarlet + Mai Teireida: "Capable of draining one's fate and vitality through dancing."`
}, {
  ability: `Megumu Iizunamaru + Okina Matara: "Capable of creating interdimensional backdoors on the starry sky."`
}, {
  ability: `Hina Kagiyama + Satono Nishida: "Capable of storing people's misfortune and mental energy by dancing"`
}, {
  ability: `Patchouli Knowledge + Mayumi Joutouguu: "Capable of summoning each of the five elements by converting loyalty"`
}, {
  ability: `Hecatia Lapislazuli + Chiyari Tenkajin: "Capable of storing three bodies by absorbing into blood and fire"`
}, {
  ability: `Parsee Mizuhashi + Renko Usami: "Capable of using jealousy by looking at the stars and the moon"`
}, {
  ability: `Eternity Larva + Minoriko Aki: "Capable of scattering abundant harvest into scales"`
}, {
  ability: `Hatate Himekaidou + Ichirin Kumoi: "Capable of wielding nyuudou using thoughtography"`
}, {
  ability: `Aya Shameimaru + Shion Yorigami: "Capable of making people unlucky including herself by using and controlling wind"`
}, {
  ability: `Marisa Kirisame + Saki Kurokoma: "Capable of utilizing magic through an unmatched leg strength"`
}, {
  ability: `Yuyuko Saigyouji + Mayumi Joutouguu: "Capable of turning loyalty directly into death"`
}, {
  ability: `Alice Margatroid + Shinmyoumaru Sukuna: "Capable of utilizing dolls through the Miracle Mallet"`
}, {
  ability: `Medicine Melancholy + Seija Kijin: "Capable of reversing everything that is beneficial with poison"`
}];

let btn = document.querySelector("#Abtn");
let ability = document.querySelector(".ability");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * abilities.length);
    
    ability.innerHTML = abilities[random].ability;
});
