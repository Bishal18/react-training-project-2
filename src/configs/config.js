const config = {
    baseApiUrl: "https://reactprojectdbserver.azurewebsites.net",
    apiRoutes: {
        productRoute: "/products",
        categoryRoute: "/categories",
        orderRoute: "/orders",
        usersRoute: "/users"
    },
    topProductsCount: 4,
    totalStars: 5,
    carouselImages: [
        {
            name: "Carousel Image 1",
            url: "https://via.placeholder.com/2000x400.png?text=Carousel Image 1"
        },
        {
            name: "Carousel Image 2",
            url: "https://via.placeholder.com/2000x400.png?text=Carousel Image 2"
        },
        {
            name: "Carousel Image 3",
            url: "https://via.placeholder.com/2000x400.png?text=Carousel Image 3"
        }
    ],
    listingType: {
        allProductsListing: 'allProductsListing',
        topProductsListing: 'topProductsListing',
        filterProductsListing: 'filterProductsListing'
    },
    filterType: {
        searchFilter: 'searchFilter',
        categoryFilter: 'categoryFilter'
    },
    formDetails: [
        { fieldname: "Name" },
        { fieldname: "Address" },
        { fieldname: "City" },
        { fieldname: "State" },
        { fieldname: "Pincode" }
    ]
}
export default config