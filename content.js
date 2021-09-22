let catImages = [
 "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOM0wrOiJpiYIwG5Da-MfFq-JjoHrB0msXg&usqp=CAU",
 "https://pyxis.nymag.com/v1/imgs/424/858/e6c66c3a1992e711bca0137b754fea749f-cat-law.rsquare.w1200.jpg",
 "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
 "https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1",
];

const observer = new MutationObserver(mutation => {
  replaceAds();
});

observer.observe(document.body, {
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true
});

  function replaceAds() {
    var rem = document.querySelectorAll('iframe[id^="google_ads_iframe"]');
    for (let i = 0; i < rem.length; i++) {
        console.log(rem[i].parentNode)
        const randomImg = Math.floor(Math.random() * catImages.length);

        var newImg = document.createElement("img")
        newImg.id = "catAd-" + i;
        newImg.src = catImages[randomImg];
        
        var parent = rem[i].parentNode;
        parent.replaceChild(newImg, rem[i])
    }
  }