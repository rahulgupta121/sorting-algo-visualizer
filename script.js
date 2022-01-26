const container = document.querySelector(".data-container");

// generate bars 
function generatebars() {
    deleteBars();
    let num = 20
  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 100) + 1;

    const bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${value * 3}px`;

    bar.style.transform = `translateX(${i * 30}px)`;

    const barLabel = document.createElement("label");

    barLabel.classList.add("bar_id");

    barLabel.innerHTML = value;

    bar.appendChild(barLabel);

    container.appendChild(bar);
  }
}


function deleteBars(){
    
    container.innerHTML = '';
}



// // selection sort

async function SelectionSort() {
    let delay = 300
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;

    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = parseInt(bars[j].childNodes[0].innerHTML);

      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

}

// Bubble Sort
async function BubbleSort() {
    let delay = 300
  var bars = document.querySelectorAll(".bar");

  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "#FF4949";
      bars[j + 1].style.backgroundColor = "#FF4949";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = Number(bars[j].childNodes[0].innerHTML);
      var val2 = Number(bars[j + 1].childNodes[0].innerHTML);

      if (val1 > val2) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".bar");
      }

      bars[j].style.backgroundColor = "#6b5b95";
      bars[j + 1].style.backgroundColor = "#6b5b95";
    }

    bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
  }
  function swap(el1, el2) {
    return new Promise((resolve) => {
      var temp = el1.style.transform;
      el1.style.transform = el2.style.transform;
      el2.style.transform = temp;

      window.requestAnimationFrame(function () {
        setTimeout(() => {
          container.insertBefore(el2, el1);
          resolve();
        }, 250);
      });
    });
  }
}


// insertion sort
async function InsertionSort() {
    let delay = 300
  let bars = document.querySelectorAll(".bar");

  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;

    var key = parseInt(bars[i].childNodes[0].innerHTML);

    var height = bars[i].style.height;

    bars[i].style.backgroundColor = "darkblue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";

      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}


const generateArray = document.querySelector('.generateArray');
const SelectionSortButton = document.querySelector('.SelectionSortBtn');
const bubbleSortButton = document.querySelector('.bubbleSortBtn');
const insertionSortButton = document.querySelector('.insertionSortBtn');

const disabledBtns = () => {
    // generateArray.disabled = true;
    SelectionSortButton.disabled = true;
    bubbleSortButton.disabled =true;
    insertionSortButton.disabled = true;
}

const enableBtns = () => {
    // generateArray.disabled = true;
    SelectionSortButton.disabled = false;
    bubbleSortButton.disabled =false;
    insertionSortButton.disabled = false;
}

disabledBtns();

generateArray.addEventListener('click', () => {
    console.log('hhh');
    generatebars();
    enableBtns();
})

SelectionSortButton.addEventListener('click', () => {
    console.log('jhdh');
    SelectionSort();
    disabledBtns();
})

bubbleSortButton.addEventListener('click', () => {
    console.log('jhdhas');
    BubbleSort();
    disabledBtns();
})

insertionSortButton.addEventListener('click', () => {
    console.log('jhasdh');
    InsertionSort()
    disabledBtns();
})