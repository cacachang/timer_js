function startTimer () {
  let timeInput = document.querySelector("#timeInput").value
  let display = document.querySelector("#display")


  let timer = setInterval(() => {
    if (timeInput > 0) {
      display.innerHTML = `剩餘時間: ${timeInput} 秒`;
      timeInput--;
    } else {
      clearInterval(timer)
      display.innerHTML = '時間到！';
    }
  }, "1000");
}