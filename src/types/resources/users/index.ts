export type UserAddressResource = {
    iri: string;
    id: number,
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    country: string;
    postalCode: string;
    state: string,
};


export type UserDataResource = {
    iri: string;
    id: number;
    fullName: string;
    displayName: string;
    initials: string;
    email: string;
    phoneNumber: string;
    phoneCountryPrefix: string;
    teamIds: number[];
    image: string;
    address: UserAddressResource;
    isEmployee: boolean;
    functionName: string;
    userPermissions: []
}