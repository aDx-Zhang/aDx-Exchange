///  Calling API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const cosmosData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const ethereumData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


/// Error handling ///
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart

async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btcChart').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}



async function printCosmosChart() {
  let { times, prices } = await cosmosData()

  let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

  let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(27,30,54,.5)');
  gradient.addColorStop(.425, 'rgba(46,49,72,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createCosmosChart = new Chart(cosmosChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: "",
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(46,49,72,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


async function printEthereumChart() {
  let { times, prices } = await ethereumData()

  let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

  let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(78,56,216,.5)');
  gradient.addColorStop(.425, 'rgba(118,106,192,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createEthereumChart = new Chart(ethereumChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(118,106,192,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


/// Update current price ///
async function updateEthereumPrice() {
  let { times, prices } = await ethereumData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
  let { times, prices } = await cosmosData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}

updateEthereumPrice()
updateCosmosPrice()
updateBitcoinPrice()

printBtcChart()
printCosmosChart()
printEthereumChart()


'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);














  function getUrl(start = 0) {
    return 'https://api.coinlore.com/api/tickers/?start=' +  start + '&limit=10';
}
function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => loadDataIntoTable(data))
        .catch(err => console.log(err));
}

function loadDataIntoTable(data) {
    let coinName = [];
    let coinSymbol = [];
    let coinRank = [];
    let coinPrice = [];
    let coin24Change = [];

    data['data'].forEach((coin) => {
        coinName.push(coin.name);
        coinSymbol.push(coin.symbol);
        coinRank.push(coin.rank);
        coinPrice.push(coin.price_usd);
        coin24Change.push(coin.percent_change_24h);
    });

    let tableBody = document.getElementById('crypto-table-body');

    let html = "";

    for(let i = 0; i < coinName.length; i++) {
        html += "<tr>";
        html += "<td>" + coinName[i] + " (" + coinSymbol[i] + ")" + "</td>";
        html += "<td>" + coinRank[i] + "</td>";
        html += "<td>$" + coinPrice[i] + "</td>";
        if (coin24Change[i] > 0) {
            html += "<td class='green-text text-darken-4'>+" + coin24Change[i] + "</td>";
        } else {
            html += "<td class='red-text text-darken-4'>" + coin24Change[i] + "</td>";
        }
        
        html += "</tr>";
    }

    tableBody.innerHTML = html;
}

function handleNumberClick(clickedLink, leftArrow, rightArrow) {
    clickedLink.parentElement.classList = "active";
    let clickedLinkPageNumber = parseInt(clickedLink.innerText);
    const url = getUrl((clickedLinkPageNumber * 10) - 10);
    getData(url);

    switch(clickedLinkPageNumber) {
        case 1:
            disableLeftArrow(leftArrow);
            if (rightArrow.className.indexOf('disabled') !== -1) {
                enableRightArrow(rightArrow);
            }
            break;
        case 10:
            disableRightArrow(rightArrow);
            if (leftArrow.className.indexOf('disabled') !== -1) {
                enableLeftArrow(leftArrow);
            }
            break;
        default:
            if (leftArrow.className.indexOf('disabled') !== -1) {
                enableLeftArrow(leftArrow);
            }
            if (rightArrow.className.indexOf('disabled') !== -1) {
                enableRightArrow(rightArrow);
            }
            break;
    }
}

function handleLeftArrowClick(activePageNumber, leftArrow, rightArrow) {
    //move to previous page
    let previousPage = document.querySelectorAll('li')[activePageNumber-1];
    previousPage.classList = "active";
    url = getUrl(((activePageNumber-1) * 10) - 10);
    getData(url);
    
    if (activePageNumber === 10) {
        enableRightArrow(rightArrow);
    }

    if (activePageNumber - 1 === 1) {
        disableLeftArrow(leftArrow);
    }
}

function handleRightArrowClick(activePageNumber, leftArrow, rightArrow) {
    //move to next page
    let nextPage = document.querySelectorAll('li')[activePageNumber+1];
    nextPage.classList = "active";

    url = getUrl(((activePageNumber+1) * 10) - 10);
    getData(url);

    if (activePageNumber === 1) {
        enableLeftArrow(leftArrow);
    }

    if (activePageNumber + 1 === 10) {
        disableRightArrow(rightArrow);
    }
}

function disableLeftArrow(leftArrow) {
    leftArrow.classList = "disabled arrow-left";
}

function enableLeftArrow(leftArrow) {
    leftArrow.classList = "waves-effect arrow-left";
}

function disableRightArrow(rightArrow) {
    rightArrow.classList = "disabled arrow-right";
}

function enableRightArrow(rightArrow) {
    rightArrow.classList = "waves-effect arrow-right";
}

function init() {
    const url = getUrl();
    getData(url);
}

init();

//handle pagination
let pageLinks = document.querySelectorAll('a');
let activePageNumber;
let clickedLink;
let leftArrow;
let rightArrow;
let url = '';

pageLinks.forEach((element) => {
    element.addEventListener("click", function() {
        leftArrow = document.querySelector('.arrow-left');
        rightArrow = document.querySelector('.arrow-right');
        console.log(rightArrow);
        activeLink = document.querySelector('.active');

        //get active page number 
        activePageNumber = parseInt(activeLink.innerText);

        if ((this.innerText === 'chevron_left' && activePageNumber === 1) || (this.innerText === 'chevron_right' && activePageNumber === 10)) {
            return;
        }

        //update active class
        activeLink.classList = "waves-effect";

        if (this.innerText === 'chevron_left') {
            handleLeftArrowClick(activePageNumber, leftArrow, rightArrow);
        } else if (this.innerText === 'chevron_right') {
            handleRightArrowClick(activePageNumber, leftArrow, rightArrow);
        } else {
            handleNumberClick(this, leftArrow, rightArrow);
        }

    });
});









let App = {
	apiKey: "09011ed1655abe7f65758b58cba4fec6ed923b25a6b3be81ba0b88af095b5f8f", //Free Account Api Key
	selectElement: document.getElementById("cryptoList"),
	myMoney: document.getElementById("myMoney"),
	showMoney: document.getElementById("showMoney"),
	cryptoPrice: document.getElementById("cryptoPrice"),
	exchangeResult: document.getElementById("exchangeResult"),
	moneyValue: null,
	setUi: function () {
		let options = {
			currencySymbol: "$",
			decimalCharacter: ",",
			digitGroupSeparator: "."
		};
		this.moneyValue = new AutoNumeric(App.myMoney, options);

		fetch(
			"https://min-api.cryptocompare.com/data/blockchain/list?api_key=" +
				this.apiKey
		)
			.then((response) => response.json())
			.then((data) => {
				for (let crypto of Object.keys(data.Data)) {
					var symbol = data.Data[crypto].symbol;
					let option = document.createElement("option");
					option.innerHTML = symbol.replace("0X", "");
					option.value = symbol.replace("0X", "");
					App.selectElement.appendChild(option);
				}
			})
			.catch(console.error);
	},
	showLoading: function (status) {
		let app = document.getElementsByClassName("app");
		return status == true
			? app[0].classList.add("loading")
			: app[0].classList.remove("loading");
	},
	getCoinDetail: function (callback) {
		let uri =
			"https://min-api.cryptocompare.com/data/all/coinlist?fsym=" +
			this.selectElement.value +
			"&api_key=" +
			this.apiKey;
		fetch(uri)
			.then((response) => response.json())
			.then((data) => {
				for (let crypto of Object.keys(data.Data)) {
					let icon = document.getElementById("cryptoIcon");
					icon.src = "https://cryptocompare.com/" + data.Data[crypto].ImageUrl;
				}
			});
		return callback();
	},
	updateMath: function () {
		let selected = App.selectElement.value;
		if (selected != 0) {
			App.showLoading(true);
			let icon = document.getElementById("cryptoIcon");
			icon.src = "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif";
			let uri =
					"https://min-api.cryptocompare.com/data/price?fsym=_XXXXX_&tsyms=USD&api_key=" +
					this.apiKey,
				newUri = uri.replace("_XXXXX_", selected);
			fetch(newUri)
				.then((response) => response.json())
				.then((data) => {
					let result = App.moneyValue.rawValue / data["USD"];
					App.cryptoPrice.innerHTML = "$" + data["USD"];
					App.showMoney.innerHTML = App.moneyValue.getFormatted();
					App.exchangeResult.innerHTML = selected + " " + result.toFixed(4);
					App.getCoinDetail(function () {
						App.showLoading(false);
					});
				});
		}
	},
	setEvt: function () {
		this.selectElement.addEventListener("change", this.updateMath);
		this.myMoney.addEventListener("change", this.updateMath);
	},
	init: function () {
		this.setUi();
		this.setEvt();
	}
};
/**/
App.init();

