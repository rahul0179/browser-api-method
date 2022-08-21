console.log("i am hare");
//alert('mom is coming');
const maComing = () => {
    alert("mom is coming !!! vag milka vag")
}
const askPicnic = () => {
    const res = confirm(" Go picnic (yes or no)")
    console.log(res);
    if (res === true) {
        alert('pay the picnic fee');
    }
    else {
        alert('GMD de MXD')
    }
}

const askname = () => {
    const name = prompt('what is your Name')
    if (name) {
        console.log(name)
    }
}