function chooseBanner(n) {
  let cvsP = document.getElementsByTagName("canvas")[0]
  let ctxP = document.getElementsByTagName("canvas")[0].getContext("2d");
  ctxP.clearRect(0, 0, cvsP.width, cvsP.height);
  let imgP = document.getElementById("bb"+n)
  ctxP.drawImage(imgP,0,0,192,108)

  let cvsF = document.getElementsByTagName("canvas")[1]
  let ctxF = document.getElementsByTagName("canvas")[1].getContext("2d");
  ctxF.clearRect(0, 0, cvsF.width, cvsF.height);
  let imgF = document.createElement("img")
  imgF.src = "assets/img/bb"+n+".png"
  ctxF.drawImage(imgF,0,0,100,30)
}
