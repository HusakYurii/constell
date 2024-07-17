import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { attachMockForTeams } from "./teams/mock"
import { attachMockForUsers } from "./contacts/mock"

/**
   * Depending on environment the mock can be enabled or disabled
   */
if (true) {
    const mockAxiosInstance = new MockAdapter(axios, {
        delayResponse: Math.random() * 200 + 100
    });

    attachMockForUsers(mockAxiosInstance);
    attachMockForTeams(mockAxiosInstance);
}


export {
    axios as RestClient
}