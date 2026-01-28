
import './reset.css';
import './style.css';



// LIAME DNA ENOHP ELIBOM
const moi = 'ihatetoast';
const domain = 'gmail.com';
const email = moi+'@'+domain;

const ac = '512';
const three = '763';
const four = '6129';
const phone = '('+ac+') '+three+'-'+four;

document.getElementById("email").innerHTML= '<a href="mailto:'+email+'">'+email+'</a>';
document.getElementById('mob').innerHTML = '<a href="tel:+1'+ac+three+four+'">'+phone+'</a>';


