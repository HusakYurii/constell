import { RestClient } from "@clients/sharedAxios"
import { ContactDataResource } from "@local-types/resources/contacts";

export const getContacts = async () => {
    const response = await RestClient.get<ContactDataResource[]>("/api/v1/contacts");
    return response.data;
}

export const getContactById = async (id: number) => {
    const response = await RestClient.get<ContactDataResource[]>(`/api/v1/contacts/${id}`);
    return response.data;
}

export const createContact = async (data: Omit<ContactDataResource, "id">) => {
    const response = await RestClient.post<ContactDataResource>("/api/v1/contacts", {
        data
    });
    return response.data;
}

export const updateContact = async (id: number, data: ContactDataResource) => {
    const response = await RestClient.put<ContactDataResource>(`/api/v1/contacts/${id}`, {
        data
    });
    return response.data;
}

export const deleteContact = async (id: number) => {
    const response = await RestClient.delete<ContactDataResource>(`/api/v1/contacts/${id}`);
    return response.data;
}