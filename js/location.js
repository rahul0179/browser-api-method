const refreshPage = () => {
    location.reload();
    const loop = document.getElementById('loop')
    for (let i = 0; i < 10; i++) {
        console.log(i)
        // loop.innerHTML = `num:${i}`
    }
}
const loop = document.getElementById('loop')
for (let i = 0; i < 10; i++) {
    console.log(i)
    const p = document.createElement('p')
    setInterval(() => {
        p.innerHTML = `Number:${i}`
    }, 4000);
    loop.appendChild(p)
}
const visitSite = () => {
    location.href = 'https://www.youtube.com/'
}