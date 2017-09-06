var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function totalSales(salesArr){
  var sum = 0;
  for (var i = 0; i < salesArr.length; i++) {
    sum += salesArr[i];
  }
  return sum;
}

function calculateTax(total, prov, taxRates) {
  return taxRates[prov] * total;
}

function calculateSalesTax(salesData, taxRates) {
  var finalOutput = {};
  for (var i = 0; i < salesData.length; i++) {
    var currRecord = salesData[i];
    var total = totalSales(currRecord.sales);
    var totalTaxes = calculateTax(total, currRecord.province, taxRates);
    if (!finalOutput[currRecord.name]) {
      finalOutput[currRecord.name] = {totalSales: 0, totalTaxes: 0};
    }
    finalOutput[currRecord.name].totalSales += total;
    finalOutput[currRecord.name].totalTaxes += totalTaxes;

  }
  return finalOutput;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/