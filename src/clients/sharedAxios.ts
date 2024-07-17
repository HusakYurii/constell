import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { TeamResourceData } from "@local-types/resources/teams";

export const teams: TeamResourceData[] = [
    {
        iri: "/api/v1/teams/1",
        id: 1,
        name: "Front of the house",
        color: "#FFC9C9",
        abbreviation: "F",
        teamPermissions: [],
    },
    {
        iri: "/api/v1/teams/2",
        id: 2,
        name: "Management",
        color: "#A5A4D4",
        abbreviation: "M",
        teamPermissions: [],
    },
    {
        iri: "/api/v1/teams/3",
        id: 3,
        name: "Back of the house",
        color: "#C1E0B9",
        abbreviation: "B",
        teamPermissions: [],
    }
];

/**
 * Depending on environment the mock can be enabled or disabled
 */
const mockAxiosInstance = new MockAdapter(axios, {
    delayResponse: Math.random() * 200 + 100
});


mockAxiosInstance.onGet(new RegExp("/api/v1/teams")).reply(() => {
    return [200, JSON.parse(JSON.stringify(teams))];
});

mockAxiosInstance.onPost(new RegExp("/api/v1/teams")).reply(() => {
    const id = Math.ceil(Math.random() * 1000000);
    var color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const newTeam: TeamResourceData = {
        iri: `/api/v1/teams/${id}`,
        id,
        name: "New Team",
        color: color,
        abbreviation: "NT",
        teamPermissions: [],
    }
    teams.push(newTeam);

    return [200, JSON.parse(JSON.stringify(newTeam))];
});

mockAxiosInstance.onGet(new RegExp("/api/v1/teams/\\d+")).reply(config => {
    const matched = config.url?.match(new RegExp("api/v1/teams/(\\d+)")) || [];
    const [_, id = "-1"] = matched;

    const team = teams.find(team => team.id === parseInt(id, 10));

    if (team) {
        return [200, team];
    } else {
        return [404, { message: "Team not found" }];
    }
});


export {
    axios as RestClient
}