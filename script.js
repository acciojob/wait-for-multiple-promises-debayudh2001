//your JS code here. If required.
let p1 = new Promise((res, rej) => {
	let time = Math.floor(1 + (Math.random()*3))
	setTimeout(() => {
		res(time)
	}, time*1000)
})
let p2 = new Promise((res, rej) => {
	let time = Math.floor(1 + (Math.random()*3))
	setTimeout(() => {
		res(time)
	}, time*1000)
})
let p3 = new Promise((res, rej) => {
	let time = Math.floor(1 + (Math.random()*3))
	setTimeout(() => {
		res(time)
	}, time*1000)
})

Promise.all([p1,p2,p3]).then((values) => {
	let tbody = document.querySelector("#output")
	document.querySelector("#loading").remove()
	for(let i=0; i<values.length; i++){
		let tr = document.createElement("tr")
	    tbody.append(tr)
		let td1 = document.createElement("td")
		td1.innerText = `Promise ${i+1}`
		let td2 = document.createElement("td")
		td2.innerText = values[i]
		tr.append(td1,td2)
	}
	let tr = document.createElement("tr")
	tbody.append(tr)
	let td1 = document.createElement("td")
	td1.innerText = "Total"
	let td2 = document.createElement("td")
	td2.innerText = Math.max(...values)
	tr.append(td1,td2)
})