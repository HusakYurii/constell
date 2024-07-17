import { RestClient } from "@clients/sharedAxios"
import { TeamResourceData } from "@local-types/resources/teams";

export const getTeams = async () => {
    const response = await RestClient.get<TeamResourceData[]>("/api/v1/teams");
    return response.data;
}

export const createTeam = async () => {
    const response = await RestClient.post<TeamResourceData>("/api/v1/teams");
    return response.data;
}