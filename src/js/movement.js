let htmlTbody = ''
const movement = () => {
    htmlTbody += '<tr>'
    htmlTbody += `<td>${user.movement[contador].date}</td>`
    htmlTbody += `<td>${user.movement[contador].description}</td>`
    htmlTbody += `<td>${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(user.movement[contador].amount)}</td>`
    htmlTbody += '</tr>'
    console.log('hola', user.movement[contador].amount)
    document.getElementById('tbody').innerHTML = htmlTbody
}