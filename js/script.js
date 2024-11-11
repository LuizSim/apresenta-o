document.getElementById('play-button').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    const presentation = document.getElementById('presentation');
    presentation.style.display = 'block';

    const h2Element = presentation.querySelector('h2');
    const text = h2Element.textContent;
    h2Element.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            h2Element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 60);
        } else {
            animateButtons();
        }
    }

    typeWriter();

    function animateButtons() {
        const buttons = presentation.querySelectorAll('.button-container button');
        buttons.forEach((button, i) => {
            setTimeout(() => {
                button.style.opacity = 1;
                button.style.transform = 'translateY(0)';


                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-10px)';
                });

                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0)';
                });
            }, i * 350);
        });
    }
});

const buttons = document.querySelectorAll('.button-container button');
buttons.forEach(button => {
    button.style.opacity = 0;
    button.style.transform = 'translateY(20px)';
});

document.getElementById('i2').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('identificacao').style.display = 'block';
    fetch('textos/identificação.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('identificação-text').textContent = data;
    });
});

document.getElementById('i3').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('problema').style.display = 'block';
    fetch('textos/problema.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('problema-text').textContent = data;
    });
});

document.getElementById('i4').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('solucao').style.display = 'block';
    fetch('textos/solução.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('solução-text').textContent = data;
    });
});

document.getElementById('i5').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('RC').style.display = 'block';
    fetch('textos/resultados_e_conclusões.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('RC-text').textContent = data;
    });
});

document.getElementById('i6').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('habilidades').style.display = 'block';
    fetch('textos/habilidades.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('Habilidades-text').textContent = data;
    });
});

document.getElementById('i7').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    fetch('textos/jogo.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('jogo-text').textContent = data;
    });
});

document.getElementById('return-i2').addEventListener('click', function() {
    document.getElementById('identificacao').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('return-i3').addEventListener('click', function() {
    document.getElementById('problema').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('return-i4').addEventListener('click', function() {
    document.getElementById('solucao').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('return-i5').addEventListener('click', function() {
    document.getElementById('RC').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('return-i6').addEventListener('click', function() {
    document.getElementById('habilidades').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('return-i7').addEventListener('click', function() {
    document.getElementById('jogo').style.display = 'none';
    document.getElementById('presentation').style.display = 'block';
});

document.getElementById('i2').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const identificacao = document.getElementById('identificacao');
    identificacao.style.display = 'block';
    identificacao.style.opacity = 0;
    identificacao.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        identificacao.style.opacity = 1;
    }, 100);
});

document.getElementById('i3').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const problema = document.getElementById('problema');
    problema.style.display = 'block';
    problema.style.opacity = 0;
    problema.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        problema.style.opacity = 1;
    }, 100);
});

document.getElementById('i4').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const solucao = document.getElementById('solucao');
    solucao.style.display = 'block';
    solucao.style.opacity = 0;
    solucao.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        solucao.style.opacity = 1;
    }, 100);
});

document.getElementById('i5').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const RC = document.getElementById('RC');
    RC.style.display = 'block';
    RC.style.opacity = 0;
    RC.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        RC.style.opacity = 1;
    }, 100);
});

document.getElementById('i6').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const habilidades = document.getElementById('habilidades');
    habilidades.style.display = 'block';
    habilidades.style.opacity = 0;
    habilidades.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        habilidades.style.opacity = 1;
    }, 100);
});

document.getElementById('i7').addEventListener('click', function() {
    document.getElementById('presentation').style.display = 'none';
    const jogo = document.getElementById('jogo');
    jogo.style.display = 'block';
    jogo.style.opacity = 0;
    jogo.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        jogo.style.opacity = 1;
    }, 100);
});

const img = document.querySelectorAll('.img');

img.forEach((projeto) => {
    projeto.addEventListener('mouseenter', () => {
        projeto.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        projeto.style.boxShadow = '0 0 20px #4fa9d6';
        projeto.style.borderColor = '#4fa9d6';
    });

    projeto.addEventListener('mousemove', (e) => {
        const rect = projeto.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const blurSize = 50;
        projeto.style.setProperty('--mouse-x', `${x}px`);
        projeto.style.setProperty('--mouse-y', `${y}px`);
        projeto.style.setProperty('--blur-size', `${blurSize}px`);

        const rotateX = (y / rect.height - 0.5) * 90;
        const rotateY = (x / rect.width - 0.5) * -90;
        if (!projeto.style.transform.includes('rotateY(180deg)')) {
            projeto.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        }
    });

    projeto.addEventListener('click', () => {
        if (projeto.style.transform.includes('rotateY(180deg)')) {
            projeto.style.transform = 'rotateY(0deg)';
        } else {
            projeto.style.transform = 'rotateY(180deg)';
        }
    });

    projeto.addEventListener('mouseleave', () => {
        projeto.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        projeto.style.boxShadow = 'none';
        projeto.style.borderColor = 'white';
    });
});

function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
        document.body.style.fontSize = '12px';
        document.querySelectorAll('.caixat, .caixatH, .caixatcr, .caixatJG').forEach(element => {
            element.style.width = '90%';
        });
    }
    else if (screenWidth > 600 && screenWidth <= 1024) {
        document.body.style.fontSize = '14px';
        document.querySelectorAll('.caixat, .caixatH, .caixatcr, .caixatJG').forEach(element => {
            element.style.width = '70%';
        });
    }
    else {
        document.body.style.fontSize = '16px';
        document.querySelectorAll('.caixat, .caixatH, .caixatcr, .caixatJG').forEach(element => {
            element.style.width = '50%';
        });
    }
}

adjustLayout();
window.addEventListener('resize', adjustLayout);