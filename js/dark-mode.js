function transform_body() {
    let b = document.getElementsByTagName("body");
    if (b.length === 1) {
        b = b[0];
        b.classList.toggle("eg-light-grey");
        b.classList.toggle("eg-dark-grey");
    } else {
        console.log("Can't locate the body! What have you done!?");
    }
}
function transform_left_column() {
    ld = document.getElementsByClassName("eg-card-4");
    if (ld.length <= 0) {
        console.log("Can't locate left div");
    } else {
        /* be careful with the order, first class: bg, second class:text */
        // noinspection JSValidateTypes
        ld = ld[0];
        ld.classList.toggle("eg-white");
        ld.classList.toggle("eg-text-black");
        ld.classList.toggle("eg-card-4");
        // Second Part
        ld.classList.toggle("eg-black");
        ld.classList.toggle("eg-white");
        ld.classList.toggle("eg-card-4");
        // get paragraphs
        p = ld.getElementsByTagName("p");
        for (let i = 0; i < p.length; i++) {
            cur = p[i];
            if (ld.classList.contains("eg-black")) {
                cur.style = "color:#fff";
            } else {
                cur.style = "";
            }
        }
    }
}
function transform_right_column() {
    rd = document.getElementsByClassName("eg-card");
    if (rd.length <= 0) {
        console.log("Can't locate right div");
    } else {
        for (let j = 0; j < rd.length; j++) {
            let i;
            right_cur = rd[j];
            right_cur.classList.toggle("eg-white");
            right_cur.classList.toggle("eg-black");
            // get h2s
            h2 = right_cur.getElementsByTagName("h2");
            for (i = 0; i < h2.length; i++) {
                cur = h2[i];
                cur.classList.toggle("eg-text-black");
                cur.classList.toggle("eg-text-white");
            }
            // get h5s
            h5 = right_cur.getElementsByTagName("h5");
            for (i = 0; i < h5.length; i++) {
                cur = h5[i];
                cur.classList.toggle("eg-text-white");
                cur.classList.toggle("eg-text-black");
            }
            // get paragraphs
            p = right_cur.getElementsByTagName("p");
            for (i = 0; i < p.length; i++) {
                cur = p[i];
                if (right_cur.classList.contains("eg-black")) {
                    cur.style = "color:#fff";
                } else {
                    cur.style = "";
                }
            }
        }
    }
}
function transform_footer() {
    let f = document.getElementsByTagName("footer");
    if (f.length === 1) {
        // noinspection JSValidateTypes
        f = f[0];
        f.classList.toggle("eg-light-grey");
        f.classList.toggle("eg-dark-grey");
        // get p's
        p = f.getElementsByTagName("p");
        if (p.length > 0) {
            cur = p[0];
            if (f.classList.contains("eg-dark-grey")) {
                cur.style = "font-size: 20px;color:#fff";
            } else {
                cur.style = "font-size: 20px";
            }
        }
    } else {
        console.log("Can't locate the footer... No big deal");
    }
    let fn = document.getElementsByClassName('eg-footer-note');
    if (fn.length <= 0){
        console.log("Can't locate footer div");
    } else {
        let ps = document.getElementsByTagName('p');
        ps.classList.toggle('eg-text-cyan');
        ps.classList.toggle('eg-text-light-blue');
    }
}
function transform_all() {
    transform_body();
    transform_left_column();
    transform_right_column();
    transform_footer();
}

window.onload = function () {
    const x = window.matchMedia("(prefers-color-scheme: dark)");
    if (x.matches){
        transform_all();
    }
};




    
