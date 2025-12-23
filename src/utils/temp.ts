const seededRandom = (seed: number) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = (date: Date) => {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

export const submitAPI = (formData: any) => {
    console.log(formData);
    return true;
};

export const updateTimes = (state: { times: string[] }, action: { type: string, date?: Date }) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return { times: fetchAPI(action.date || new Date()) };
        default:
            return state;
    }
};

export const initializeTimes = () => {
    const today = new Date();
    return { times: fetchAPI(today) };
};
