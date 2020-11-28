const text = document.getElementById('text');
let shadow = '';

for (let i = 0; i < 500; i++){
    shadow += (shadow ? ',' : '') + 1 * i + 'px ' + 1 * i + 'px 0 #01ded3';
}

text.style.textShadow = shadow;