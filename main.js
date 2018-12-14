function iniciar() {

  D = abrirJanela('letras/D.html', 200, 150, 100, 0);
  E = abrirJanela('letras/E.html', 200, 150, 100, 200);
  L = abrirJanela('letras/L.html', 200, 150, 100, 400);
  T = abrirJanela('letras/T.html', 200, 150, 100, 600);
  A = abrirJanela('letras/A.html', 200, 150, 100, 800);

  R = abrirJanela('letras/R.html', 200, 150, 350, 0);
  U = abrirJanela('letras/U.html', 200, 150, 350, 200);
  N = abrirJanela('letras/N.html', 200, 150, 350, 400);
  E2 = abrirJanela('letras/E.html', 200, 150, 350, 600);


  if(D == null || E == null || L == null || T == null) {
    m = document.getElementById('mensagemInicial');
    m.innerText = "Ops, parece que não tenho permissão para mostrar Pop Up";
    return false;
  }

  setTimeout(() => {D.close();}, 2000);
  setTimeout(() => {E.close();}, 2200);
  setTimeout(() => {L.close();}, 2400);
  setTimeout(() => {T.close();}, 2600);
  setTimeout(() => {A.close();}, 2800);
  setTimeout(() => {R.close();}, 3000);
  setTimeout(() => {U.close();}, 3200);
  setTimeout(() => {N.close();}, 3400);

  setTimeout(() => {E2.close(); fase2();}, 3600);

}

function fase2() {
  sans = abrirJanela('sans.html', 200, 300, 100, 100);
  audio = document.getElementById("audio");
  setTimeout(function () {audio.play();}, 300);


  setTimeout(function () {sans.moveTo(1000, 100);}, 450);
  setTimeout(function () {sans.moveTo(400, 500);}, 600);
  setTimeout(function () {sans.moveTo(400, 100);}, 750);

  setTimeout(function () {sans.close();}, 1500);
}

function abrirJanela(src, w, h, t, l) {
  // Min width 200px
  return window.open(src, "_blank", 'width='+w.toString()+',height='+h.toString()+',top='+t.toString()+',left='+l.toString()+',menubar=no,status=no');
}
