let catImages = [
 "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOM0wrOiJpiYIwG5Da-MfFq-JjoHrB0msXg&usqp=CAU",
 "https://pyxis.nymag.com/v1/imgs/424/858/e6c66c3a1992e711bca0137b754fea749f-cat-law.rsquare.w1200.jpg",
 "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
 "https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1",
];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catImages.length);
    imgs[i].src = catImages[randomImg];
}