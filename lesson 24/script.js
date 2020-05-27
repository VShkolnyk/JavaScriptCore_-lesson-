let auto = [
    {
        brandName: 'BMW',
        model: 'i4 EV',
        productionYear: 2020
    },
    {
        brandName: 'Toyota',
        model: 'Highlander',
        productionYear: 2017
    },
    {
        brandName: 'Chevrolet',
        model: 'Camaro ZL1',
        productionYear: 2019
    },
    {
        brandName: 'BMW',
        model: 'M3 E46',
        productionYear: 2003
    },
    {
        brandName: 'Chevrolet',
        model: 'Corvette',
        productionYear: 1969
    },
    {
        brandName: 'Chevrolet',
        model: 'Camaro SS',
        productionYear: 1968
    },
    {
        brandName: 'Mercedes-Benz',
        model: 'AMG GT',
        productionYear: 2020
    },
    {
        brandName: 'Porsche',
        model: 'Type 64',
        productionYear: 1939
    },
    {
        brandName: 'Porsche',
        model: 'Carrera GT',
        productionYear: 2005
    },
    {
        brandName: 'Ford',
        model: 'Mustang GT',
        productionYear: 1969
    }
];

document.getElementById('collectionsAuto').onclick = () => {
    let collectionsAuto = _.each(auto, function (value) {
        return value;
    });
    console.log(collectionsAuto);
}

document.getElementById('groupByBrandName').onclick = () => {
    let groupByBrandName = _.groupBy(auto, function (value) {
        return value.brandName;
    });
    console.log(groupByBrandName);
}

document.getElementById('groupByModel').onclick = () => {
    let groupByModel = _.groupBy(auto, function (value) {
        return value.model;
    });
    console.log(groupByModel);
}

document.getElementById('groupByProductionYear').onclick = () => {
    let groupByProductionYear = _.groupBy(auto, function (value) {
        return value.productionYear;
    });
    console.log(groupByProductionYear);
}

document.getElementById('filterProductionYear').onclick = () => {
    let a = prompt('Enter ProductionYear from:');
    let b = prompt('Enter ProductionYear to:');
    let filterProductionYear = _.filter(auto, function (value) {
        return value.productionYear >= a && value.productionYear <= b;
    });
    console.log(filterProductionYear);
}

document.getElementById('minProductionYear').onclick = () => {
    let minProductionYear = _.min(auto, function (value) {
        return value.productionYear;
    });
    console.log(minProductionYear);
}

document.getElementById('maxProductionYear').onclick = () => {
    let maxProductionYear = _.max(auto, function (value) {
        return value.productionYear;
    });
    console.log(maxProductionYear);
}