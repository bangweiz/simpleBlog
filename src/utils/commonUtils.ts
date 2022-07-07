export const debounce = (fn: (e: Event) => void, time: number) => {
    let timer: NodeJS.Timeout;
    return (e: Event) => {
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(e)
        }, time)
    }
}