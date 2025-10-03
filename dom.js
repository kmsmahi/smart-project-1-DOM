// update the heart count.....
const allBtn = document.getElementsByClassName("love-btn");
for (let btn of allBtn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("heart-num").innerText++;
  });
}
// update the call button......
// for cart-1.......
document.getElementById("call-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_1 = document.getElementById("sub-title-1").innerText;
  const number_1 = document.getElementById("number-1").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_1 + " " + number_1);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;

  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">National Emergency Number</h3>
      <p class="text-sm font-semibold">999</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});
// for cart-2.......
document.getElementById("call-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_2 = document.getElementById("sub-title-2").innerText;
  const number_2 = document.getElementById("number-2").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_2 + " " + number_2);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;
  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">Police Helpline Number</h3>
      <p class="text-sm font-semibold">123</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});
// for cart-3.......
document.getElementById("call-btn-3").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_3 = document.getElementById("sub-title-3").innerText;
  const number_3 = document.getElementById("number-3").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_3 + " " + number_3);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;

  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">Fire Service Number</h3>
      <p class="text-sm font-semibold">1576</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});

// for cart-4.......
document.getElementById("call-btn-4").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_4 = document.getElementById("sub-title-4").innerText;
  const number_4 = document.getElementById("number-4").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_4 + " " + number_4);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;
  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">Ambulance Service</h3>
      <p class="text-sm font-semibold">1038</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});
// for cart-5.......
document.getElementById("call-btn-5").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_5 = document.getElementById("sub-title-5").innerText;
  const number_5 = document.getElementById("number-5").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_5 + " " + number_5);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;
  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">Woman & child Helpline</h3>
      <p class="text-sm font-semibold">109</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});
// for cart-6.......
document.getElementById("call-btn-6").addEventListener("click", function (e) {
  e.preventDefault();
  const subTitle_6 = document.getElementById("sub-title-6").innerText;
  const number_6 = document.getElementById("number-6").innerText;
  // coin-update-part
  const coinNum_1 = Number(document.getElementById("coin-num-1").innerText);
  if (coinNum_1 !== 0) {
    alert("calling:" + " " + subTitle_6 + " " + number_6);
  }
  if (coinNum_1 < 20) {
    alert("❌ you do not have sufficient coins");
    return;
  }
  const coinMinus = coinNum_1 - 20;
  document.getElementById("coin-num-1").innerText = coinMinus;
  // history related......
  const addHistory = document.getElementById("add-history");
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
    <div class="history-collection w-[200px] h-auto lg:w-[220px] lg:h-auto bg-gray-100 px-4 py-4 mx-auto rounded-[10px] flex flex-col gap-[15px] mt-[20px] mb-[20px]">
    <div class="flex flex-col">
      <h3 class="text-sm font-semibold">Anti-corruption Helpline</h3>
      <p class="text-sm font-semibold">1234</p>
    </div>
    <div class="time-box text-xs text-gray-600">
    //   blank.......
    </div>
  </div>
  
    `;
  const now = new Date();
  const time = now.toLocaleTimeString();
  newHistory.querySelector(".time-box").textContent = time;
  addHistory.append(newHistory);
});
