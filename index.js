const hqLocation = 42
const feetPerBlock = 264

function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(hqLocation - pickUpLocation)
}

function distanceFromHqInFeet(pickUpLocation) {
    const blocks = distanceFromHqInBlocks(pickUpLocation)
    return blocks * feetPerBlock
}

function distanceTravelledInFeet(startStreet, endStreet) {
    return Math.abs(startStreet - endStreet) * feetPerBlock
}

function calculatesFarePrice(startStreet, endStreet) {
    const feetTravelled = distanceTravelledInFeet(startStreet, endStreet)
    if (feetTravelled <= 400) {
        return 0
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * .02
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far'
    }
}