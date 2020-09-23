let classement = document.getElementById("classement");
let information = [
  //po,gm,+/-,psuedo,arabicName

  {
    point: 41,
    matches: 16,
    plusMoins: 26,
    arabicName: "ريال مولاي عبد الله",
  },
  {
    point: 38,
    matches: 16,
    plusMoins: 28,
    arabicName: "النادي الإسماعيلي",
  },
  {
    point: 28,
    matches: 16,
    plusMoins: 12,
    arabicName: "الشبيبة السحيمية",
  },
  {
    point: 27,
    matches: 16,
    plusMoins: 8,
    arabicName: "شباب دار السي عيسى",
  },
  {
    point: 27,
    matches: 16,
    plusMoins: 4,
    arabicName: "نجم آسفي",
  },
  {
    point: 21,
    matches: 16,
    plusMoins: 1,
    arabicName: "راسينغ آسفي",
  },
  {
    point: 23,
    matches: 15,
    plusMoins: 9,
    arabicName: "الشباب الجديدي",
  },
  {
    point: 21,
    matches: 16,
    plusMoins: 3,
    arabicName: "شباب آسفي",
  },
  {
    point: 19,
    matches: 16,
    plusMoins: 0,
    arabicName: "إتحاد أولاد الغضبان",
  },
  {
    point: 19,
    matches: 16,
    plusMoins: "01-",
    arabicName: "إتحاد أزمور",
  },
  {
    point: 18,
    matches: 16,
    plusMoins: "05-",
    arabicName: "نهضة أولاد فرج",
  },
  {
    point: 17,
    matches: 16,
    plusMoins: "13-",
    arabicName: "نجم أولاد فرج",
  },
  {
    point: 15,
    matches: 16,
    plusMoins: "08-",
    arabicName: "نجم الساحل سيدي بوزيد",
  },
  {
    point: 5,
    matches: 16,
    plusMoins: "30-",
    arabicName: "الترجي الجديدي",
  },
  {
    point: 8,
    matches: 16,
    plusMoins: "17-",
    arabicName: "إتحاد شهدة",
  },
  {
    point: "إعــتــــ",
    matches: "ــــذار",
    plusMoins: "عام",
    arabicName: "أمل الصويرية",
  },
];

information.sort(function (a, b) {
  return b.point - a.point || b.plusMoins - a.plusMoins;
});

for (let i = 0; i < information.length; i++) {
  if (information[i].plusMoins >= 0 && information[i].plusMoins < 10) {
    information[i].plusMoins = "0" + information[i].plusMoins;
  }
  if (information[i].plusMoins > 0) {
    information[i].plusMoins = information[i].plusMoins + "+";
  }
  if (information[i].point >= 0 && information[i].point < 10) {
    information[i].point = "0" + information[i].point;
  }
  classement.innerHTML += `
  <div class="equipe">
    <div class="place"><h3>${i + 1}</h3></div>
    <div class="classementGeneral"><h3>${information[i].arabicName}</h3></div>
    <div class="point"><h3>${information[i].point}</h3></div>
    <div class="nombreMatch"><h3>${information[i].matches}</h3></div>
    <div class="plusMoins"><h3>${information[i].plusMoins}</h3></div>
  </div>
  `;
}
