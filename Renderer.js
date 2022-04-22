const colorsys = require("colorsys")
const { ipcRenderer } = require("electron")

window.addEventListener("DOMContentLoaded", () => {
    // close button
    document.getElementById("closebtn").addEventListener("click", () => {ipcRenderer.send("closeaction")})
    // Max button
    document.getElementById("maxbtn").addEventListener("click", () => {ipcRenderer.send("maxaction")})
    // Min button
    document.getElementById("minbtn").addEventListener("click", () => {ipcRenderer.send("minaction")})

    // RGB Values
    RVALUE = 0
    GVALUE = 0
    BVALUE = 0

    // rgb range values
    let R_RANGE = document.getElementById("R_range")
    let G_RANGE = document.getElementById("G_range")
    let B_RANGE = document.getElementById("B_range")

    // color choosen
    let COLOR_Background = document.getElementById("colorchoosen")

    // Color Picker
    let Color_Picker = document.getElementById("picker")

    // Color Models to been showen
    let rgbmodel = document.getElementById("rgbvalue")
    let hexmodel = document.getElementById("hexvalue")

    R_RANGE.addEventListener("input", () => {
        let x = R_RANGE.value
        RVALUE = x
        COLOR_Background.setAttribute("style",`background-color:rgb(${RVALUE},${GVALUE},${BVALUE})`)
        // RGB model
        rgbmodel.innerHTML = `RGB - (${RVALUE},${GVALUE},${BVALUE})`
        // HEX Model
        data = colorsys.rgb2Hex(RVALUE,GVALUE,BVALUE)
        hexmodel.innerHTML = `HEX - ${data}`
        Color_Picker.value = data
    })

    G_RANGE.addEventListener("input", () => {
        let x = G_RANGE.value
        GVALUE = x
        COLOR_Background.setAttribute("style",`background-color:rgb(${RVALUE},${GVALUE},${BVALUE})`)
        // RGB model
        rgbmodel.innerHTML = `RGB - (${RVALUE},${GVALUE},${BVALUE})`
        // HEX Model
        data = colorsys.rgb2Hex(RVALUE,GVALUE,BVALUE)
        hexmodel.innerHTML = `HEX - ${data}`
        Color_Picker.value = data
    })

    B_RANGE.addEventListener("input", () => {
        let x = B_RANGE.value
        BVALUE = x
        COLOR_Background.setAttribute("style",`background-color:rgb(${RVALUE},${GVALUE},${BVALUE})`)
        // RGB model
        rgbmodel.innerHTML = `RGB - (${RVALUE},${GVALUE},${BVALUE})`
        // HEX Model
        data = colorsys.rgb2Hex(RVALUE,GVALUE,BVALUE)
        hexmodel.innerHTML = `HEX - ${data}`
        Color_Picker.value = data
    })
})