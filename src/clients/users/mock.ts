import MockAdapter from "axios-mock-adapter";
import { UserDataResource } from "@local-types/resources/users";

const users: UserDataResource[] = [
    {
        iri: '/api/v1/users/1000',
        id: 1000,
        fullName: 'Staffy de Nielden',
        displayName: 'Staffy',
        initials: 'SN',
        email: 'staff_1@venue.com',
        phoneNumber: '68872901',
        phoneCountryPrefix: '+31',
        teamIds: [1, 3],
        image: 'image.png',
        address: {
            iri: '/api/v1/users/1000/address',
            id: 1,
            addressLineOne: 'Fake Street 1',
            addressLineTwo: 'Apt up',
            city: 'Amsterdam',
            country: 'NL',
            postalCode: '1010TD',
            state: '',
        },
        isEmployee: true,
        functionName: '1st Chef',
        userPermissions: []
    },
    {
        iri: '/api/v1/users/1001',
        id: 1001,
        fullName: 'Johnathan Smith',
        displayName: 'John',
        initials: 'JS',
        email: 'john_smith@venue.com',
        phoneNumber: '612345678',
        phoneCountryPrefix: '+44',
        teamIds: [2],
        image: 'john_smith.png',
        address: {
            iri: '/api/v1/users/1001/address',
            id: 2,
            addressLineOne: 'Main Street 2',
            addressLineTwo: 'Suite 200',
            city: 'London',
            country: 'UK',
            postalCode: 'W1A 1AA',
            state: '',
        },
        isEmployee: false,
        functionName: 'Manager',
        userPermissions: []
    },
    {
        iri: '/api/v1/users/1002',
        id: 1002,
        fullName: 'Maria Garcia',
        displayName: 'Maria',
        initials: 'MG',
        email: 'maria_garcia@venue.com',
        phoneNumber: '715672890',
        phoneCountryPrefix: '+34',
        teamIds: [1, 2],
        image: 'maria_garcia.png',
        address: {
            iri: '/api/v1/users/1002/address',
            id: 3,
            addressLineOne: 'Calle Falsa 123',
            addressLineTwo: '',
            city: 'Madrid',
            country: 'ES',
            postalCode: '28013',
            state: 'Madrid',
        },
        isEmployee: true,
        functionName: 'Event Coordinator',
        userPermissions: []
    },
    {
        iri: '/api/v1/users/1003',
        id: 1003,
        fullName: 'Alexandria Johnson',
        displayName: 'Alex',
        initials: 'AJ',
        email: 'alex_johnson@venue.com',
        phoneNumber: '987654321',
        phoneCountryPrefix: '+1',
        teamIds: [1, 2, 3],
        image: 'alex_johnson.png',
        address: {
            iri: '/api/v1/users/1003/address',
            id: 4,
            addressLineOne: '123 Elm Street',
            addressLineTwo: 'Apt 4B',
            city: 'New York',
            country: 'US',
            postalCode: '10001',
            state: 'NY',
        },
        isEmployee: false,
        functionName: 'Technician',
        userPermissions: []
    }
];


export const attachMockForUsers = (mockAxiosInstance: MockAdapter) => { }