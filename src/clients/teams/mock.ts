import MockAdapter from "axios-mock-adapter";
import { cloneDeep } from "lodash"
import { TeamDataResource } from "@local-types/resources/teams";
import { parseIdFromURLFactory } from "@clients/utils";

const teams: TeamDataResource[] = [
    {
        id: 1,
        name: "Front of the house",
        color: "#FFC9C9",
        abbreviation: "F",
        teamPermissions: [],
    },
    {
        id: 2,
        name: "Management",
        color: "#A5A4D4",
        abbreviation: "M",
        teamPermissions: [],
    },
    {
        id: 3,
        name: "Back of the house",
        color: "#C1E0B9",
        abbreviation: "B",
        teamPermissions: [],
    }
];


const parseIdFromURL = parseIdFromURLFactory(new RegExp("api/v1/teams/(\\d+)"));

export const attachMockForTeams = (mockAxiosInstance: MockAdapter) => {

    mockAxiosInstance.onGet(new RegExp("/api/v1/teams")).reply(() => {
        return [200, cloneDeep(teams)];
    });

    mockAxiosInstance.onPost(new RegExp("/api/v1/teams")).reply(() => {
        const id = Math.ceil(Math.random() * 1000000);
        var color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        const newTeam: TeamDataResource = {
            id,
            name: "New Team",
            color: color,
            abbreviation: "NT",
            teamPermissions: [],
        }
        teams.push(newTeam);

        return [201, cloneDeep(newTeam)];
    });

    mockAxiosInstance.onGet(new RegExp("/api/v1/teams/\\d+")).reply(config => {
        const id = parseIdFromURL(config.url || "")
        const team = teams.find(team => team.id === id);

        if (team) {
            return [200, cloneDeep(team)];
        } else {
            return [404, { message: "Team not found" }];
        }
    });

}