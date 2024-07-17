export const parseIdFromURLFactory = (regExp: RegExp) => {
    return (url: string) => {
        const matched = url.match(regExp) || [];
        const [_, id = "-1"] = matched;
        return parseInt(id, 10);
    }
};