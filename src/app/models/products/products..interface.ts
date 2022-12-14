export interface IProducts {
    productId: number,
    productName: string,
    stars: number,
    imageUrl: string,
    listPrice: number,
    price: number,
    installments: IInstallments[]
}


export interface IInstallments {
    quantity: number,
    value: number
}


export interface IShoppingCart {
    productId: number,
    productName: string,
    quantity?: number
}
