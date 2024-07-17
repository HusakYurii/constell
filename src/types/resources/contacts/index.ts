export type ContactAddressResource = {
    id: number,
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    country: string;
    postalCode: string;
    state: string,
};


export type ContactDataResource = {
    id: number;
    fullName: string;
    displayName: string;
    initials: string;
    email: string;
    phoneNumber: string;
    phoneCountryPrefix: string;
    teamIds: number[];
    image: string | null;
    address: ContactAddressResource;
    isEmployee: boolean;
    role: string;
    userPermissions: []
}