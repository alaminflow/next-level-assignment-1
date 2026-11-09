function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2
    }
    return value * multiplier
}


function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase()
    } else if (typeof input === "number") {
        return input * 10
    } else {
        return input ? "Active" : "Inactive"
    }
}


