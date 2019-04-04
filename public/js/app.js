var countUsers = 0;
var countDoves = 0;
// cria o pombo
$('[data-target="create-dove"]').on('click', function(e) {
  e.preventDefault();
  countDoves = 1;
  console.log('criou pombo');
  $('[data-target="dove"]').html(
    '<span class="m-1 badge badge-info">' + countDoves + ' <i class="fas fa-dove"></i></span>'
  );
  $('.dove-container').css({ display: 'block' });
  $('#CreateDove').modal('toggle');
  pigeonFly(50, 'right');
});

function HelloWorld() {
  print('hello');
}

// cria o usuario
$('[data-target="create-user"]').on('click', function(e) {
  e.preventDefault();
  countUsers++;
  console.log('criou usuario');
  $('[data-target="users"]').append(
    '<span class="m-1 badge badge-primary">' + countUsers + ' <i class="fas fa-user"></i></span>'
  );

  $('#CreateUser').modal('toggle');
});

// verifica se existe ao menos um usuario e um pombo
$(document).ready(function() {
  setInterval(function() {
    var dove = $('[data-target="dove"]').html().length;
    var users = $('[data-target="users"]').html().length;
    if (users > 0 && dove > 0) {
      $('[data-target="start"]').css({ display: 'block' });
    }
  }, 300);
});
function killDove() {
  console.log('kill the dove');
}

function killUser(id) {
  console.log(id);
}

function pigeonFly(time, direction) {
  var screenSIze = $(window).width();
  var walkPace = screenSIze / time;
  var totalWalked = 0;

  console.log(screenSIze);
  setInterval(function() {
    if (screenSIze > totalWalked) {
      if (direction == 'right') {
        console.log(walkPace);
        pace = totalWalked + walkPace;
        console.log(pace);
        $('.pigeon img').css({ left: pace });
        totalWalked += pace;
        console.log(totalWalked);
      }
    }
  }, 1000);
}

$('[data-target="start"]').click(function() {
  $('[data-target="buttons"]').css({ display: 'none' });
  $('[data-target="start"]').html(
    '<button data-target="stop" class="btn btn-danger btn-block">Parar Processo</button>'
  );
});

$('[data-target="stop"]').click(function() {
  console.log('stop');
  $('[data-target="buttons"]').css({ display: 'block' });
  $('[data-target="start"]').html(
    '<button data-target="start" class="btn btn-success btn-block">Começar</button>'
  );
});
