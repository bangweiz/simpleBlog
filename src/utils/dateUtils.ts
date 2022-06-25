export const formatDate = (timestamp: number | string): string => {
    let time: number
    if (typeof timestamp === 'string') {
        time = parseInt(timestamp)
        if (isNaN(time)) {
            return 'Unknown Date'
        }
    } else {
        time = timestamp
    }
    const date = new Date(time)
    if (isNaN(date.valueOf())) {
        return 'Unknown Date'
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const date1 = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    return `${year}-${month}-${date1} ${hour}:${minute}`
}