import { RestClient } from "@clients/sharedAxios"
import { UserDataResource } from "@local-types/resources/users";

export const getUsers = async () => {
    const response = await RestClient.get<UserDataResource[]>("/api/v1/users");
    return response.data;
}

export const createUser = async (data: Omit<UserDataResource, "id" | "iri">) => {
    const response = await RestClient.post<UserDataResource>("/api/v1/users", {
        data
    });
    return response.data;
}

export const updateUser = async (id: number, data: UserDataResource) => {
    const response = await RestClient.put<UserDataResource>(`/api/v1/users/${id}`, {
        data
    });
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await RestClient.delete<UserDataResource>(`/api/v1/users/${id}`);
    return response.data;
}