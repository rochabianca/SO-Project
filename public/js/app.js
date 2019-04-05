var countUsers = 0;
var countDoves = 0;
var maximoCaixaMensagens = 0;

function updateCaixaMensagens(numeroDeMensagens) {
  // atualizar o numero de mensagens no icone
  atualizarCaixaDeEntrada(numeroDeMensagens);
}

function mudancaEstadoPomboCorreio(estado) {
  // mudar a cor do pombo de acordo com os estados
  var pombo = $('[data-target="kill-dove"]');
  var estadoAnterior = pombo.data('state');
  pombo.removeClass('badge-' + estadoAnterior);
  pombo.data('state', estado);
  pombo.addClass('badge-' + estado);

  $('[data-target="console"]').prepend(
    '<li class="list-group-item">O Pombo mudou seu estado para ' + estado + ' </li>'
  );
}

function mudancaEstadoUsuario(id, estado) {
  // mudar a cor do usuario de acordo com os estados
  var userId = '#' + id;
  var previousState = $(userId).data('state');
  $(userId).removeClass('badge-' + previousState);
  $(userId).data('state', estado);
  $(userId).addClass('badge-' + estado);
  $('[data-target="console"]').prepend(
    '<li class="list-group-item">O Usuário ' + id + ' mudou seu estado para ' + estado + ' </li>'
  );
}
// cria o pombo
$('[data-target="create-dove"]').on('click', function(e) {
  e.preventDefault();
  var maxMensagens = $('#n').val();
  var tempoCarga = $('#tempo-carga').val();
  var tempoVoo = $('#tempo-voo').val();
  var tempoDescarga = $('#tempo-descarga').val();
  countDoves = 1;
  //numero mensagens, tempo carga, tempo voo, tempo descarga
  javaobj.criarPombo(maxMensagens, tempoCarga, tempoVoo, tempoDescarga);
  $('[data-target="dove"]').html(
    '<span data-target="kill-dove" data-state="info" class="m-1 p-2 badge badge-info dove">' +
      countDoves +
      ' <i class="fas fa-dove"></i></span>'
  );
  $('.dove-container').css({ display: 'block' });
  $('#CreateDove').modal('toggle');
  pigeonFly(50, 'right', 1000);
});

$('[data-target="dove"]').click(function() {
  $('[data-target="kill-dove"]').html('');
  killDove();
});

// cria o usuario
$('[data-target="create-user"]').on('click', function(e) {
  e.preventDefault();
  // tempo de escrita
  var tempoEscrita = $('#tempo-escrita').val();
  var id;
  id = javaobj.criarUsuario(tempoEscrita);
  $('[data-add="users"]').append(
    '<span id="' +
      id +
      '" data-toggle="kill-user" data-state="primary" class="m-1 p-2 badge badge-primary user">' +
      id +
      ' <i class="fas fa-user"></i></span>'
  );

  $('#CreateUser').modal('toggle');
});

$('[data-add="users"]').on('click', function(e) {
  var id = '#' + e.target.id;
  $(id).remove();
  killUser(e.target.id);
});

$('[data-target="create-inbox"]').on('click', function(e) {
  e.preventDefault();
  maximoCaixaMensagens = $('#inbox').val();
  atualizarCaixaDeEntrada(maximoCaixaMensagens);
  $('#CreateInbox').modal('toggle');
});

function atualizarCaixaDeEntrada(numInbox) {
  var inboxes = $('[data-target="inboxes"]');
  inboxes.html(
    '<span class="m-1 p-2 badge badge-dark">' + numInbox + ' <i class="fas fa-inbox"></i></span>'
  );
}
// verifica se existe ao menos um usuario e um pombo
$(document).ready(function() {
  setInterval(function() {
    var dove = $('[data-target="dove"]').html().length;
    var users = $('[data-add="users"]').html().length;
    if (users > 0 && dove > 0) {
      $('[data-target="start"]').css({ display: 'block' });
    }
  }, 300);
});

function killDove() {
  $('.dove-container').css({ display: 'none' });
  javaobj.matarPombo();
}

function killUser(id) {
  javaobj.matarUsuario(id);
}

// function pigeonFly(pace, direction, timePace) {
//   var screenSIze = $(window).width();
//   var walkPace = screenSIze / pace;
//   var totalWalked = 0;

//   setInterval(function() {
//     if (screenSIze - 100 > totalWalked) {
//       if (direction == 'right') {
//         pace = totalWalked + walkPace;
//         $('.pigeon img').css({ left: pace });
//         totalWalked = pace;
//       }
//     }
//   }, timePace);
// }

// iniciar
$('[data-target="start"]').click(function() {
  $('[data-target="buttons"]').css({ display: 'none' });
  $('[data-target="start"]').css({ display: 'none', visibility: 'hidden' });
  $('[data-target="stop"]').css({ display: 'block', visibility: 'visible' });
  javaobj.iniciar(maximoCaixaMensagens);
});

$('[data-target="stop"]').click(function() {
  $('[data-target="buttons"]').css({ display: 'block' });
  $('[data-add="users"]').html('');
  $('[data-target="dove"]').html('');
  $('[data-target="start"]').css({ display: 'block', visibility: 'visible' });
  $('[data-target="stop"]').css({ display: 'none', visibility: 'hidden' });
  javaobj.parar();
});
