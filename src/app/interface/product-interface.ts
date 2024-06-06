export interface IproductDetails {
    map(arg0: (item: IproductDetails) => { id: number; name: string; price: number; description: string; imageUrl: string; general: string; quantity: number; rating: number }): IproductDetails[]
    title: string
    image:string
    category:string
    target:string
    id: number
    name: string
    price: number
    description: string
    imageUrl: string
    general: string
    quantity: number;
    rating: number
}



