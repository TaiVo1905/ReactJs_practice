function Products(dataName) {
    switch (dataName) {
        case "products":
            const localData = localStorage.getItem("products");
            if (localData) {
                return JSON.parse(localData);
            }
            const products = [
                {
                    id: "1",
                    name: "Áo phông nam",
                    name_category: "Thời trang nam",
                    code: "19381-4141",
                    image: "https://i.pinimg.com/originals/68/8f/45/688f453c9e8d1fc30d15de414313d3a5.jpg",
                    price: "788.00",
                    old_price: "529.00"
                },
                {
                    id: "2",
                    name: "Quần baggy",
                    name_category: "Thời trang nam",
                    code: "81541",
                    image: "https://down-vn.img.susercontent.com/file/vn-11134207-23010-5eezx6bpo8lvd2",
                    price: "13.00",
                    old_price: "729.00"
                }
            ];
            return products;
        default:
            return [];
    }
}
export default Products;