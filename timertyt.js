let hr = min = sec = ms = "0" + 0,
    startTimer;

  const startBtn = document.querySelector(".start"),
   stopBtn = document.querySelector(".stop"),
   resetBtn = document.querySelector(".reset");

   startBtn.addEventListener("click", start);
   stopBtn.addEventListener("click", stop);
   resetBtn.addEventListener("click", reset);

  function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
    document.getElementById('baslatbutonu').style.opacity = '0.7'

    dersler = setTimeout(
        function(){
            document.getElementById('sosyal').style.backgroundImage = 'linear-gradient(150deg, rgba(110,241,61,1) 0%, rgba(111,223,68,1) 49%, rgba(82,162,52,1) 100%)'
            document.getElementById('dispsosyal').style.visibility = 'visible'
            document.getElementById('dispsosyal').style.opacity = '1'
        }
    , 1800000);

    setTimeout(
        function(){
            document.getElementById('turkce').style.backgroundImage = 'linear-gradient(150deg, rgba(110,241,61,1) 0%, rgba(111,223,68,1) 49%, rgba(82,162,52,1) 100%)'
            document.getElementById('dispturkce').style.visibility = 'visible'
            document.getElementById('dispturkce').style.opacity = '1'
        }
    , 4800000);

    setTimeout(
        function(){
            document.getElementById('matematik').style.backgroundImage = 'linear-gradient(150deg, rgba(110,241,61,1) 0%, rgba(111,223,68,1) 49%, rgba(82,162,52,1) 100%)'
            document.getElementById('dispmat').style.visibility = 'visible'
            document.getElementById('dispmat').style.opacity = '1'
        }
    , 7800000);

    setTimeout(
        function(){
            document.getElementById('fen').style.backgroundImage = 'linear-gradient(150deg, rgba(110,241,61,1) 0%, rgba(111,223,68,1) 49%, rgba(82,162,52,1) 100%)'
            document.getElementById('dispfen').style.visibility = 'visible'
            document.getElementById('dispfen').style.opacity = '1'
        }
    , 9600000);

    sayacidurdur = setTimeout(
        function(){
            startBtn.classList.remove("active");
            stopBtn.classList.add("stopActive");
            clearInterval(startTimer);
            document.getElementById('header2').style.display = 'flex'
            document.getElementById('baslatbutonu').disabled = true;
            document.getElementById('baslatbutonu').style.opacity = '0.7'
        }
    , 9600001);



    startTimer = setInterval(()=>{
      ms++
      ms = ms < 10 ? "0" + ms : ms;

      if(ms == 100){
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }
      if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }
      if(min == 60){
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
      }
      putValue();
    },10); //1000ms = 1s
  }

  function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
    clearTimeout(dersler);
  }
  function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearTimeout(dersler);
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
    document.getElementById('dispturkce').style.visibility = 'hidden'
    document.getElementById('dispturkce').style.opacity = '0'
    document.getElementById('turkce').style.backgroundImage = 'linear-gradient(150deg, rgba(244,210,13,1) 0%, rgba(238,207,28,1) 49%, rgba(198,171,15,1) 100%)'
    document.getElementById('header2').style.display = 'none'
    document.getElementById('baslatbutonu').style.opacity = '1'
    document.getElementById('baslatbutonu').disabled = false;
}

  function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
  }