var countUsers = 0;
var countDoves = 0;
$('[data-target="create-dove"]').on('click', function(e) {
  e.preventDefault();
  countDoves = 1;
  console.log('criou pombo');
  $('[data-target="dove"]').html(
    '<span class="m-1 badge badge-info">' + countDoves + ' <i class="fas fa-dove"></i></span>'
  );
  $('#CreateDove').modal('toggle');
});

$('[data-target="create-user"]').on('click', function(e) {
  e.preventDefault();
  countUsers++;
  console.log('criou pombo');
  $('[data-target="users"]').append(
    '<span class="m-1 badge badge-primary">' + countUsers + ' <i class="fas fa-user"></i></span>'
  );
  $('#CreateUser').modal('toggle');
});
