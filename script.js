async function loadData(){

let res = await fetch("data.json")
let data = await res.json()

document.getElementById("pengumuman").innerText = data.pengumuman
document.getElementById("infoMinggu").innerText = data.infoMinggu

let vid = document.getElementById("videoFrame")
vid.src = data.video
vid.play()

updateJadwal(data.jadwal)

}

function updateJadwal(jadwal){

let hari = new Date().toLocaleDateString("id-ID",{weekday:'long'})
let jam = new Date().getHours()

let pelajaran = "Tidak ada pelajaran"

if(jadwal[hari]){

jadwal[hari].forEach(j => {

if(jam >= j.mulai && jam < j.selesai){
pelajaran = j.mapel
}

})

}

document.getElementById("jadwalSekarang").innerText = pelajaran

}

function updateClock(){

let now = new Date()
let jam = now.toLocaleTimeString("id-ID")
document.getElementById("clock").innerText = jam

}

updateClock()
setInterval(updateClock,1000)

loadData()