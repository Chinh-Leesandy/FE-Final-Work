import { createSelector } from "reselect";
export const productAllSeclector = state => state.product.product
export const sortSelector = state => state.product.Sort
export const textSelector = state => state.filter.searchText
export const mainProduct = createSelector(
    productAllSeclector, sortSelector,textSelector,(product, Sort, text) => {
        const productList = product.filter((product) => product.product_name.toLowerCase().includes(text.toLowerCase()))
        if (Sort === "0") {
            return productList
      } else if (Sort === "1") {
        return productList.sort((a, b) =>
          a.product_name.localeCompare(b.product_name)
        )
      } else if (Sort === "2") {
        return productList.sort((a, b) =>
          b.product_name.localeCompare(a.product_name)
        )
      } else if (Sort === "3") {
        return productList.sort((a, b) => a.price - b.price)
      } else if (Sort === "4") {
        return productList.sort((a, b) => b.price - a.price)
      }
    }
)