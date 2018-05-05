var draw = SVG('tile').size(500, 200)

// var base = draw.polygon('50,0 150,0 100,86.666 0,86.666').fill('rgb(12,12,18)')
// var base = draw.polygon('50,0 150,0 100,86.666 0,86.666').fill('rgb(12,12,18)').move(100,0)
// var base = draw.polygon('50,0 150,0 100,86.666 0,86.666').fill('rgb(12,12,18)').move(150,86.666)
// var base = draw.polygon('50,0 150,0 100,86.666 0,86.666').fill('rgb(12,12,18)').move(50,86.666)
// 
// var back = draw.polygon('50 0, 150 0, 93.8 12.5, 68.8 12.5').fill('rgb(0,0,6)')
// var back = draw.polygon('50 0, 150 0, 93.8 12.5, 68.8 12.5').fill('rgb(0,0,6)').move(150,0)
// var back = draw.polygon('50 0, 150 0, 93.8 12.5, 68.8 12.5').fill('rgb(0,0,6)').move(200,86.666)
// var back = draw.polygon('50 0, 150 0, 93.8 12.5, 68.8 12.5').fill('rgb(0,0,6)').move(100,86.666)
// 
// var side = draw.polygon('50 0, 0 86.666, 56.3 34.1, 68.8 12.5').fill('rgb(6,6,12)')
// var side = draw.polygon('50 0, 0 86.666, 56.3 34.1, 68.8 12.5').fill('rgb(6,6,12)').move(100,0)
// var side = draw.polygon('50 0, 0 86.666, 56.3 34.1, 68.8 12.5').fill('rgb(6,6,12)').move(150,86.666)
// var side = draw.polygon('50 0, 0 86.666, 56.3 34.1, 68.8 12.5').fill('rgb(6,6,12)').move(50,86.666)
// 
// var front = draw.polygon('0 86.6, 100 86.6, 81.3 34.1, 56.3 34.1').fill('rgb(18,18,24)')
// var front = draw.polygon('0 86.6, 100 86.6, 81.3 34.1, 56.3 34.1').fill('rgb(18,18,24)').move(100,34)
// var front = draw.polygon('0 86.6, 100 86.6, 81.3 34.1, 56.3 34.1').fill('rgb(18,18,24)').move(150,120.666)
// var front = draw.polygon('0 86.6, 100 86.6, 81.3 34.1, 56.3 34.1').fill('rgb(18,18,24)').move(50,120.666)
// 
// var top = draw.polygon('68.8 12.5, 93.8 12.5, 81.3 34.1, 56.3 34.1').fill('rgb(24,24,30)')
// var top = draw.polygon('68.8 12.5, 93.8 12.5, 81.3 34.1, 56.3 34.1').fill('rgb(24,24,30)').move(155,13)
// var top = draw.polygon('68.8 12.5, 93.8 12.5, 81.3 34.1, 56.3 34.1').fill('rgb(24,24,30)').move(205,100)
// var top = draw.polygon('68.8 12.5, 93.8 12.5, 81.3 34.1, 56.3 34.1').fill('rgb(24,24,30)').move(105,100)

function drawTile(scale) {
    var base = draw.polygon(`${.5 * scale},0 ${1.5 * scale},0 ${1 * scale},${.866 * scale} 0,${.866 * scale}`).fill('rgb(12,12,18)')
    var back = draw.polygon(`${.5 * scale} 0, ${1.5 * scale} 0, ${.938 * scale} ${.125 * scale}, ${.688 * scale} ${.125 * scale}`).fill('rgb(0,0,6)')
    var side = draw.polygon(`${.5 * scale} 0, 0 ${.866 * scale}, ${.563 * scale} ${.341 * scale}, ${.688 * scale} ${.125 * scale}`).fill('rgb(6,6,12)')
    var front = draw.polygon(`0 ${.866 * scale}, ${1 * scale} ${.866 * scale}, ${.813 * scale} ${.341 * scale}, ${.563 * scale} ${.341 * scale}`).fill('rgb(18,18,24)')
    var top = draw.polygon(`${.688 * scale} ${.125 * scale}, ${.938 * scale} ${.125 * scale}, ${.813 * scale} ${.341 * scale}, ${.563 * scale} ${.341 * scale}`).fill('rgb(24,24,30)')
    return
    }
    
drawTile(100)
