enum WeekDay {
    Mon, Tue, Wed, Thu = Tue + Wed
}

let thu2 : number = 10 * 2;

enum WeekDay2 {
    Mon = 10, Tue, Wed = 10 << 2, Thu = thu2
}

enum WeekDay3 {
    Mon = "Monday", Tue = "TuesDay"
}

console.log("1." + JSON.stringify(WeekDay))
console.log("2." + JSON.stringify(WeekDay2))
console.log("3." + JSON.stringify(WeekDay3))