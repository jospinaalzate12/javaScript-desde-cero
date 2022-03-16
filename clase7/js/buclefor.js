let italianos=['Masseratti', 'Pagani', 'Lamborghini', 'Ferrari',
'Alfa Romeo', 'Alpine', 'Abarth', 'Bugatti', 'Fiat',
'Lancia', 'Fornasari']
let cantidad=italianos.length
document.write('<ul>')
for (let index = 0; index < cantidad; index++) {
    document.write('<li>'+italianos[index]+'</li>');
}
document.write('</ul>')