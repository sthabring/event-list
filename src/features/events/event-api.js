import eventData from "./event-data";

export function fetchEvents() {
    return new Promise(resolve => {
        let timeout = setTimeout(function () {
            resolve(eventData);

            clearTimeout(timeout);
        }, 2000)
    })
}