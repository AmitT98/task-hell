export function sendData2grave(evt){
    document.getElementById('ip1').value = evt.target.innerText
    document.getElementById('ip2').value = evt.target.getAttribute("title")
    document.getElementById('ip3').value = evt.target.getAttribute("data-duration")
    evt.target.remove()
}