export interface Business {
     id: number, 
     name: string, 
     description: string, 
     phone: string | number, 
     image: string, 
     email: string, 
     address: BusinessAddress
}

export interface BusinessAddress {
    number: string | number,
    street: string, 
    zip: string | number,
    city: string, 
    country: string
}

export interface TableData {
    key: number | string, 
    name: string, 
    description: string
}