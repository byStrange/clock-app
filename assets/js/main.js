function $(a, b) {
  var elem = document.querySelectorAll(a)[b];
  if (a !== undefined && b !== undefined) {
    return elem;
  } else if (a !== undefined && b == undefined) {
    return document.querySelector(a);
  }
}
function main() {

    let types = ['front', 'left', 'right', 'top', 'front', 'back'],
        index = 0,
        i = 0,
        a = 0,
        o = 0,
        k = 0
    $(`.cube__face--${types[index]}`).innerText = (new Date().getSeconds())
    $(`.cube__face--${types[a]}`, 2).innerText = (new Date().getHours() ? new Date().getHours() : '12');
    $(`.cube__face--${types[i]}`, 1).innerText = (new Date().getMinutes());


    setInterval(me => {
        index += 1;
        if (index >= types.length) {
            index = 0
        }
        const d = new Date().getSeconds();
        o = d
        $(`.cube__face--${types[index]}`).text(d ? d : '0');
        $_cube.className = `cube show-${types[index]}`
        if (o == 1) {
            s()
        }
        if (k == 1) {
            d()
        }
    }, 1000)

    function s() {
        i += 1;
        if (i >= types.length) {
            i = 0
        }
        $(`.cube__face--${types[i]}`, 1).text(new Date().getMinutes());
        $c2.className = `cube show-${types[i]}`
        o = 0
        k = new Date().getMinutes()
    }

    function d() {
        a += 1;
        if (a >= types.length) {
            a = 0
        }
        const d = new Date().getHours();
        $(`.cube__face--${types[a]}`, 2).text(d);
        $c3.className = `cube show-${types[a]}`
    }
}
main()
