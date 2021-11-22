export interface User {
    userName: string,
    email: string
}

export interface UserAttribute {
    Name: string,
    Value: string
}

export interface Space {
    spaceID: string,
    name: string,
    location: string,
    photoUrl?: string,
}