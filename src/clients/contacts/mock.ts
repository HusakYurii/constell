import MockAdapter from "axios-mock-adapter";
import { cloneDeep } from 'lodash'
import { ContactDataResource } from "@local-types/resources/contacts";
import { parseIdFromURLFactory } from "@clients/utils";

const users: ContactDataResource[] = [
    {
        id: 1000,
        fullName: "Staffy de Nielden",
        displayName: "Staffy",
        initials: "SN",
        email: "staff_1@venue.com",
        phoneNumber: "68872901",
        phoneCountryPrefix: "+31",
        teamIds: [1, 3],
        image: null,
        address: {
            id: 1,
            addressLineOne: "Fake Street 1",
            addressLineTwo: "Apt up",
            city: "Amsterdam",
            country: "NL",
            postalCode: "1010TD",
            state: "",
        },
        isEmployee: true,
        role: "First Chef",
        userPermissions: []
    },
    {
        id: 1002,
        fullName: "Maria Garcia",
        displayName: "Maria",
        initials: "MG",
        email: "maria_garcia@venue.com",
        phoneNumber: "715672890",
        phoneCountryPrefix: "+34",
        teamIds: [1, 2],
        image: null,
        address: {
            id: 3,
            addressLineOne: "Calle Falsa 123",
            addressLineTwo: "",
            city: "Madrid",
            country: "ES",
            postalCode: "28013",
            state: "Madrid",
        },
        isEmployee: true,
        role: "Event Coordinator",
        userPermissions: []
    },
    {
        id: 1003,
        fullName: "Alexandria Johnson",
        displayName: "Alex",
        initials: "AJ",
        email: "alex_johnson@venue.com",
        phoneNumber: "987654321",
        phoneCountryPrefix: "+1",
        teamIds: [1, 2, 3],
        image: null,
        address: {
            id: 4,
            addressLineOne: "123 Elm Street",
            addressLineTwo: "Apt 4B",
            city: "New York",
            country: "US",
            postalCode: "10001",
            state: "NY",
        },
        isEmployee: false,
        role: "Technician",
        userPermissions: []
    }
];


const parseIdFromURL = parseIdFromURLFactory(new RegExp("api/v1/contacts/(\\d+)"));

export const attachMockForUsers = (mockAxiosInstance: MockAdapter) => {
    mockAxiosInstance.onGet(new RegExp("/api/v1/contacts")).reply(() => {
        return [200, users.map(cloneDeep)];
    });

    mockAxiosInstance.onGet(new RegExp("/api/v1/contacts/\\d+")).reply(config => {
        const id = parseIdFromURL(config.url || "")
        const user = users.find(user => user.id === id);
        if (user) {
            return [200, cloneDeep(user)];
        } else {
            return [404, { message: "Team not found" }];
        }
    });

    mockAxiosInstance.onPost(new RegExp("/api/v1/contacts")).reply((config) => {
        const data = config.data as Omit<ContactDataResource, "id">;

        const id = Math.ceil(Math.random() * 1000000);
        const newUser: ContactDataResource = {
            ...data,
            id,
        };

        users.push(cloneDeep(newUser));

        return [201, cloneDeep(newUser)];
    });

    mockAxiosInstance.onPut(new RegExp("/api/v1/contacts")).reply((config) => {
        const data = config.data as ContactDataResource;
        const id = parseIdFromURL(config.url || "")

        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1, cloneDeep(data));
            return [200, cloneDeep(data)];
        }

        return [400, { message: "Can not update! User not found" }];
    });

    mockAxiosInstance.onDelete(new RegExp("/api/v1/contacts")).reply((config) => {
        const id = parseIdFromURL(config.url || "")
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            const [removed] = users.splice(index, 1);
            return [200, removed];
        }

        return [400, { message: "Can not delete! User not found" }];
    });
}