import { RestClient } from "@clients/sharedAxios"
import { TeamDataResource } from "@local-types/resources/teams";

export const getTeams = async () => {
    const response = await RestClient.get<TeamDataResource[]>("/api/v1/teams");
    return response.data;
}

export const createTeam = async () => {
    const response = await RestClient.post<TeamDataResource>("/api/v1/teams");
    return response.data;
}