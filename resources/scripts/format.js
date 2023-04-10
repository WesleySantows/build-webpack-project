import product from '../product.json';

export default () => {
    if (!product) {
        return;
    }

    const numberDays = [];
    const productList = {};

    product.forEach((product) => {
        productList[product.id] = {
            price: product.price,
            regular_price: product.regular_price,
            sale_price: product.sale_price,
            day: product.attributes[0].option,
            mexCan: product.attributes[1].option,
            br: product.attributes[2].option,
        }

        product.attributes.map((item) => {
            if(item.name === 'Escolha o número de dias') {
                if(numberDays.indexOf(item.option) === -1) {
                    numberDays.push(item.option);
                }
            }
        });

    });

    return {
        numberDays,
        productList
    };
}
