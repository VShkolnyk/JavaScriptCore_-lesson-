document.getElementById('createAuto').onclick = () => {
    function Auto(brandName, model, productionYear) {
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }

    let createAutoObj = _.create(Auto.prototype, {
        brandName: 'Chevrolet',
        model: 'Camaro SS',
        productionYear: 1968
    });
    console.log(createAutoObj);

    document.getElementById('invertObject').onclick = () => {
        console.log(_.invert(createAutoObj));
    }
    document.getElementById('pickObject').onclick = () => {
        console.log(_.pick(createAutoObj, 'brandName', 'productionYear'));
    }
    document.getElementById('omitObject').onclick = () => {
        console.log(_.omit(createAutoObj, 'model'));
    }
}