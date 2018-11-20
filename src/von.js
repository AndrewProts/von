function Von({
    el,
    template,
    width,
    height
}) {
    var canvas = document.getElementById(el)
    var ctx = canvas.getContext('2d')
    var W, H
    var parent = canvas.parentElement
    setMainSize()
    var self = this

    this.draw = function () {
        drawElement({el: template})
    }
    this.draw()

    function drawElement({el}) {
        console.log(el.styles)
        for (let i in el.children) {
            drawElement({el: el.children[i]})
        }
    }

    function setMainSize() {
        if (width.search('px') > 0) {
            W = parseInt(width)
        }
        if (width.search('%') > 0) {
            W = parent.offsetWidth / 100 * parseInt(width)
        }
        if (width.search('vw') > 0) {
            W = window.innerWidth / 100 * parseInt(width)
        }
        if (width.search('vh') > 0) {
            W = window.innerHeight / 100 * parseInt(width)
        }
        if (height.search('px') > 0) {
            H = parseInt(height)
        }
        if (height.search('%') > 0) {
            H = parent.offsetHeight / 100 * parseInt(height)
        }
        if (height.search('vh') > 0) {
            H = window.innerHeight / 100 * parseInt(height)
        }
        if (height.search('vw') > 0) {
            H = window.innerWidth / 100 * parseInt(height)
        }
        canvas.width = W
        canvas.height = H
    }

    window.addEventListener('resize', function () {
        setMainSize()
    })
}
