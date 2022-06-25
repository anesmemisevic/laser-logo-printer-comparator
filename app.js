const readline = require('readline');
let arr = []

class Logo {
    constructor(name, array, engravements) {
        this.name = name;
        this.array = array;
        this.engravements = engravements
        console.log(name + " defined")
        this.engraved = false
        // console.log("printing engrv for " + name + " " + this.engravements)
    }
}


function createAndFillTwoDArray({
    rows,
    columns,
    defaultValue
}) {
    return Array.from({ length: rows }, () => (
        Array.from({ length: columns }, () => defaultValue)
    ))
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log(i)
        for (let x = 0; x < array[i].length; x++) {
            process.stdout.write(array[i][x])
        }
        console.log()
    }
    return ""
}

function findEngrave(name) {
    let engravements_to_return = ""
    arr.forEach(myFunction);
    function myFunction(item) {
        if (String(item.name) == name) {
            engravements_to_return = item.engravements
        }
    }
    return engravements_to_return
}


function get_engraved(name) {
    // console.log("Referencing " + name)
    // let array_to_return = []
    arr.forEach(myFunction);
    function myFunction(item) {
        if (String(item.name) == name) {
            engrv = item.engraved
        }
    }
    return engrv
}


function set_engraved(name) {
    // console.log("Referencing " + name)
    // let array_to_return = []
    arr.forEach(myFunction);
    function myFunction(item) {
        if (String(item.name) == name) {
            engrv = item.engraved
            item.engraved = true
        }
    }
}


function findLogo(name) {
    // console.log("Referencing " + name)
    // let array_to_return = []
    arr.forEach(myFunction);
    function myFunction(item) {
        if (String(item.name) == name) {
            array_to_return = item.array
        }
    }
    return array_to_return
}

function styleArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let q = 0; q < array[i].length; q++) {
            if (i % 2 != 0) {
                array[i][q] = " ";
            }
            else {
                if (q % 2 != 0) {
                    array[i][q] = " ";
                }
            }
        }
    }
}

function engrave(name, coords1, coords2) {
    // printArray(findLogo(name))
    array = findLogo(name)
    // var old_array = array.map(function (arr) {
    //     return arr.slice();
    // });

    // console.log(name)
    eng = findEngrave(name)
    let position1 = (coords1 - 1) * 2
    let position2 = (coords2 - 1) * 2
    for (let q = 0; q < eng.length; q++) {
        let letter = eng[q]
        // console.log(letter)
        if (letter == "D") {
            array[position1 + 1][position2] = "|"
            position1 = position1 + 2
            position2 = position2
            // printArray(findLogo(name))

            // console.log(position1, position2)
            if (position2 < 0 || position2 > 20) {
                // console.log(position1, position2)
                throw new Error()
            }

        } else if (letter == "U") {
            array[position1 - 1][position2] = "|"
            position1 = position1 - 2
            position2 = position2
            // console.log(position1, position2)
            // printArray(findLogo(name))

            if (position2 < 0 || position2 > 20) {
                // console.log(position1, position2)
                // printArray(findLogo(name))
                throw new Error()
            }
            // printArray(findLogo(name))
        } else if (letter == "L") {
            array[position1][position2 - 1] = "-"
            position1 = position1
            position2 = position2 - 2
            // console.log(position1, position2)
            // printArray(findLogo(name))

            if (position2 < 0 || position2 > 20) {
                // console.log(position1, position2)
                // printArray(findLogo(name))
                throw new Error()
            }

            // printArray(findLogo(name))
        } else if (letter == "R") {
            array[position1][position2 + 1] = "-"
            position1 = position1
            position2 = position2 + 2
            // printArray(findLogo(name))

            // console.log(position1, position2)
            if (position2 < 0 || position2 > 20) {
                // console.log(position1, position2)
                // printArray(findLogo(name))
                throw new Error()
            }
            // printArray(findLogo(name))
        }
    }

    set_engraved(name)
    return true
}


function checkRowsHorizontally(logo1Array, logo2Array) {
    logo1RowNumberWithModif = 0
    logo2RowNumberWithModif = 0

    logo1RightLeftSymbol = 0
    logo2RightLeftSymbol = 0

    logo1UpDownSymbol = 0
    logo2UpDownSymbol = 0


    for (let i = 0; i < logo1Array.length; i++) {
        for (let q = 0; q < logo1Array[i].length; q++) {
            if (logo1Array[i][q] == "-" || logo1Array[i][q] == "|") {
                logo1RowNumberWithModif++
                break
            }
        }
    }

    for (let i = 0; i < logo1Array.length; i++) {
        for (let q = 0; q < logo1Array[i].length; q++) {
            if (logo1Array[i][q] == "-") {
                logo1RightLeftSymbol++
            }
            else if (logo1Array[i][q] == "|") {
                logo1UpDownSymbol++
            }
        }
    }

    for (let j = 0; j < logo2Array.length; j++) {
        for (let x = 0; x < logo2Array[j].length; x++) {
            if (logo2Array[j][x] == "-" || logo2Array[j][x] == "|") {
                logo2RowNumberWithModif++
                break
            }
        }
    }

    for (let j = 0; j < logo2Array.length; j++) {
        for (let x = 0; x < logo2Array[j].length; x++) {
            if (logo2Array[j][x] == "-") {
                logo2RightLeftSymbol++
            }
            else if (logo2Array[j][x] == "|") {
                logo2UpDownSymbol++
            }
        }
    }

    // console.log("Logo1 Horizontally: ", logo1RowNumberWithModif, logo1RightLeftSymbol, logo1UpDownSymbol)
    // console.log("Logo2 Horizontally: ", logo2RowNumberWithModif, logo2RightLeftSymbol, logo2UpDownSymbol)
    if (logo1RowNumberWithModif == logo2RowNumberWithModif &&
        logo1RightLeftSymbol == logo2RightLeftSymbol &&
        logo1UpDownSymbol == logo2UpDownSymbol) {
        // console.log("YES Horizontally")
        return true
    }
    else {
        // console.log("No Horizontally")
        return false
    }
}

function checkRowsVertically(logo1Array, logo2Array) {
    logo1RowNumberWithModifVertically = 0
    logo2RowNumberWithModifVertically = 0

    logo1RightLeftSymbolVertically = 0
    logo2RightLeftSymbolVertically = 0

    logo1UpDownSymbolVertically = 0
    logo2UpDownSymbolVertically = 0

    for (let i = 0; i < logo1Array.length; i++) {
        for (let q = 0; q < logo1Array.length; q++) {
            if (logo1Array[q][i] == "-" || logo1Array[q][i] == "|") {
                logo1RowNumberWithModifVertically++
                break
            }
        }
    }

    for (let i = 0; i < logo1Array.length; i++) {
        for (let q = 0; q < logo1Array.length; q++) {
            if (logo1Array[q][i] == "-") {
                // console.log("naso vertical logo1 - ", q, i)
                logo1RightLeftSymbolVertically++
            }
            else if (logo1Array[q][i] == "|") {
                // console.log("naso vertical logo 1| ", q, i)
                logo1UpDownSymbolVertically++
            }
        }
    }

    for (let j = 0; j < logo2Array.length; j++) {
        for (let x = 0; x < logo2Array.length; x++) {
            if (logo2Array[x][j] == "-" || logo2Array[x][j] == "|") {
                logo2RowNumberWithModifVertically++
                break
            }
        }
    }

    for (let j = 0; j < logo2Array.length; j++) {
        for (let x = 0; x < logo2Array.length; x++) {
            if (logo2Array[x][j] == "-") {
                // console.log("naso vertical logo2 - ", x, j)
                logo2RightLeftSymbolVertically++
            }
            else if (logo2Array[x][j] == "|") {
                // console.log("naso vertical logo 2|", x, j)

                logo2UpDownSymbolVertically++
            }
        }
    }

    // console.log("Logo1 Vertically: ", logo1RowNumberWithModifVertically, logo1RightLeftSymbolVertically, logo1UpDownSymbolVertically)
    // console.log("Logo2 Vertically: ", logo2RowNumberWithModifVertically, logo2RightLeftSymbolVertically, logo2UpDownSymbolVertically)
    if (logo1RowNumberWithModifVertically == logo2RowNumberWithModifVertically &&
        logo1RightLeftSymbolVertically == logo2RightLeftSymbolVertically &&
        logo1UpDownSymbolVertically == logo2UpDownSymbolVertically) {
        // console.log("YES Vertically")
        return true
    }
    else {
        // console.log("NO Vertically")
        return false
    }
}

function checkLineByLine(logo1Array, logo2Array) {
    logo1dummy = logo1Array
    logo2dummy = logo2Array

    function findStartHor(array) {
        for (let i = 0; i < array.length; i++) {
            for (let q = 0; q < array[i].length; q++) {
                if (array[i][q] == "-" || array[i][q] == "|") {
                    return i
                }
            }
        }
    }

    logo1startingpointHorizontal = findStartHor(logo1Array)
    logo2startingpointHorizontal = findStartHor(logo2Array)

    function findEndHor(array, start) {
        let i = start
        for (; i < array.length - 1; i++) {
            // console.log(array[i], i)
            if (!array[i].includes("-") && !array[i].includes("|") &&
                !array[i + 1].includes("-") && !array[i + 1].includes("|")) {
                // if (start == 0) {
                //     i++
                // }
                return --i
            }
        }
        if (array[array.length - 1].includes("-") || array[array.length - 1].includes("|")) {
            return i
        }
        // if (start == 0) {
        //     ++i
        // }
        return --i
    }

    logo1endingpointHorizontal = findEndHor(logo1Array, logo1startingpointHorizontal)
    logo2endingpointHorizontal = findEndHor(logo2Array, logo2startingpointHorizontal)

    function findStartVer(array) {
        for (let i = 0; i < array.length; i++) {
            for (let q = 0; q < array.length; q++) {
                if (array[q][i] == "-" || array[q][i] == "|") {
                    return i
                }
            }
        }
    }

    logo1startingpointVertical = findStartVer(logo1Array)
    logo2startingpointVertical = findStartVer(logo2Array)

    function findEndVer(array, start) {
        let i = start
        let temp_array = []
        let temp_array_next = []
        for (; i < array.length - 1; i++) {
            let arr1 = []
            let arr2 = []
            for (let q = 0; q < array.length; q++) {
                arr1.push(array[q][i])
                arr2.push(array[q][i + 1])
                temp_array = arr1
                temp_array_next = arr2
            }

            if (!temp_array.includes("-") && !temp_array.includes("|") &&
                !temp_array_next.includes("-") && !temp_array_next.includes("|")) {
                return --i
            }
        }
        if (temp_array_next.includes("-") || temp_array_next.includes("|")) {
            return i
        }
        return --i
    }

    logo1endingpointVertical = findEndVer(logo1Array, logo1startingpointVertical)
    logo2endingpointVertical = findEndVer(logo2Array, logo2startingpointVertical)

    logo1TotalLengthHorizontal = logo1endingpointHorizontal - logo1startingpointHorizontal
    logo2TotalLengthHorizontal = logo2endingpointHorizontal - logo2startingpointHorizontal

    logo1TotalLengthVertical = logo1endingpointVertical - logo1startingpointVertical
    logo2TotalLengthVertical = logo2endingpointVertical - logo2startingpointVertical

    // console.log("Logo1: horizontal", logo1startingpointHorizontal, logo1endingpointHorizontal)
    // console.log("Logo2: horizontal", logo2startingpointHorizontal, logo2endingpointHorizontal)

    // console.log("Logo1: vertical", logo1startingpointVertical, logo1endingpointVertical)
    // console.log("Logo2: vertical", logo2startingpointVertical, logo2endingpointVertical)


    // console.log("horizontal total: ", logo1TotalLengthHorizontal, logo2TotalLengthHorizontal, logo2endingpointHorizontal, logo2startingpointHorizontal, logo1endingpointHorizontal, logo1startingpointHorizontal)
    // console.log("vertical total: ", logo1TotalLengthVertical, logo2TotalLengthVertical, logo2endingpointVertical, logo2startingpointVertical, logo1endingpointVertical, logo1startingpointVertical)

    if (logo1TotalLengthHorizontal != logo2TotalLengthHorizontal && logo1TotalLengthVertical != logo2TotalLengthVertical) {
        // console.log("something not same")
        return false
    }
    else {

        // printArray(logo1Array)
        // printArray(logo2Array)

        // console.log("vertical")
        // console.log(logo1startingpointVertical, logo1endingpointVertical)
        // console.log(logo2startingpointVertical, logo2endingpointVertical)

        // console.log("hor")
        // console.log(logo1startingpointHorizontal, logo1endingpointHorizontal)
        // console.log(logo2startingpointHorizontal, logo2endingpointHorizontal)

        for (; logo1startingpointHorizontal <= logo1endingpointHorizontal && logo2startingpointHorizontal <= logo2endingpointHorizontal;
            logo1startingpointHorizontal++, logo2startingpointHorizontal++) {
            //start point and end point for vert
            array1 = logo1Array[logo1startingpointHorizontal]
            // console.log("Array1 ", array1)
            array2 = logo2Array[logo2startingpointHorizontal]

            // console.log("for " + logo1startingpointHorizontal, logo2startingpointHorizontal + "testing ", array1, " vs ", array2)
            // console.log("Array2 ", array2)
            for (let q = logo1startingpointVertical, k = logo2startingpointVertical;
                q <= logo1endingpointVertical && k <= logo2endingpointVertical; q++, k++) {
                // console.log("array1: " + array1[q], q, "array2: " + array2[k], k)
                if (array1[q] != array2[k]) {
                    // console.log(array1 + " not same as " + array2)

                    return false
                }
            }
        }
    }
    return true
}

function transform(logo1Array, logo2Array) {

    const n = logo2Array.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            k = logo2Array[i][j];
            logo2Array[i][j] = logo2Array[y - j][i];
            logo2Array[y - j][i] = logo2Array[y - i][y - j];
            logo2Array[y - i][y - j] = logo2Array[j][y - i]
            logo2Array[j][y - i] = k
        }
    }
    for (let i = 0; i < logo2Array.length; i++) {
        for (let j = 0; j < logo2Array[i].length; j++) {
            if (logo2Array[i][j] == "-") {
                logo2Array[i][j] = "|"
            }
            else if (logo2Array[i][j] == "|") {
                logo2Array[i][j] = "-"
            }
        }
    }
}

// can be used as transpose if needed.
function trans2(logo1Array, logo2Array) {
    output = logo2Array[0].map((_, colIndex) => array.map(row => row[colIndex]));
    for (let i = 0; i < output.length; i++) {
        for (let j = 0; j < output[i].length; j++) {
            if (output[i][j] == "-") {
                output[i][j] = "|"
            }
            else if (output[i][j] == "|") {
                output[i][j] = "-"
            }
        }
    }
    return output
}

function checkSame(logo1, logo2) {

    function engraveforcheck(logo) {
        for (let i = 1; i <= 11; i++) {
            for (let q = 1; q <= 11; q++) {
                try {
                    // console.log(i, q)
                    let engr = engrave(logo, i, q)
                    set_engraved(logo)
                    return engr
                    // engrave(logo2, i, q)
                } catch (error) {
                    for (let w = 0; w < arr.length; w++) {
                        if (String(arr[w].name) == String(logo)) {
                            for (let x = 0; x < arr[w].array.length; x++) {
                                // console.log(arr[w].name + " ime ")
                                // console.log("deleting " + logo)
                                for (let s = 0; s < arr[w].array.length; s++) {
                                    arr[w].array[x][s] = "."
                                }
                            }
                        }
                        else if (arr[w].name != logo) {
                            continue
                        }
                        styleArray(arr[w].array)
                    }
                    continue
                }
            }
        }
    }


    if (get_engraved(logo1) == false) {
        let logo1_check = engraveforcheck(logo1)
    }

    if (get_engraved(logo2) == false) {
        let logo2_check = engraveforcheck(logo2)
    }



    logo1Array = findLogo(logo1)
    logo2Array = findLogo(logo2)

    // 90 180 270 degrees

    for (let i = 0; i < 4; i++) {
        let { vertically, horizontally } = checkfinal();
        if (vertically == true && horizontally == true) {
            // same spot same angle and same logo or different spot same angle and same logo
            let linebyline = checkLineByLine(logo1Array, logo2Array);
            if (linebyline == true) {
                // for (let i = 0; i < arr.length; i++) {
                //     printArray(arr[i].array)
                //     console.log()
                // }
                return true
            }
        }
        transform(logo1Array, logo2Array);
    }

    function checkfinal() {
        //what if same & different position
        let vertically = checkRowsVertically(logo1Array, logo2Array);
        let horizontally = checkRowsHorizontally(logo1Array, logo2Array);
        return { vertically, horizontally };
    }
    // console.log("Failed")
    return false
}

function takeInput() {
    return new Promise(function (resolve, reject) {
        let rl = readline.createInterface(process.stdin, process.stdout)
        rl.setPrompt('')
        rl.prompt();
        rl.on('line', function (line) {
            if (line === "exit" || line === "quit" || line == 'q') {
                rl.close()
                return // bail here, so rl.prompt() isn't called again
            }
            if (line.split(" ")[0] == "LOGO") {
                input = (String(line)).split(" ")
                arr.push(new Logo(input[1], createAndFillTwoDArray({ rows: 21, columns: 21, defaultValue: '.' }), input[2]))
                styleArray(findLogo(input[1]))
                // printArray(findLogo(input[1]))
            } else if (line.split(" ")[0] == "ENGRAVE") {
                input = (String(line)).split(" ")
                engrave(input[1], input[2], input[3])
                printArray(findLogo(input[1]))
            }
            else if (line.split(" ")[0] == "SAME") {
                input = (String(line)).split(" ")
                if (checkSame(input[1], input[2]) == true) {
                    console.log("Yes")
                }
                else {
                    console.log("No")
                }
            }
            else {
                console.log(`unknown command: "${line}"`)
            }
            rl.prompt()

        }).on('close', function () {
            resolve()
        });
    })
}

async function run() {
    try {
        let result = await takeInput()
        // for (let i = 0; i < arr.length; i++) {
        //     printArray(arr[i].array)
        //     console.log()
        // }
    } catch (e) {
        console.log('failed:', e)
    }
}

run()
