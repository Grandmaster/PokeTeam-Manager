$(document).ready(function() {

  console.log("Page loaded with script.js");

  $(".addTeam").on("click", function() {
    event.preventDefault();
    if (!$(".teamName").val().trim()) {
      return;
    }
    console.log("You submitted!");
    console.log($(".teamName").val().trim());
    $.post("/api/teams", {teamName: $(".teamName").val().trim()})
      .then(console.log("Submitted a team"));
  });

  $(".addPokemon").on("click", function() {
    event.preventDefault();
    if (!$(".pokemonName").val().trim()) {
      return;
    }
    console.log("You submitted!");
    $.post("/api/pokemons",
      $(".pokemonName").val().trim()
    )
      .then(console.log("Submitted a team"));
  });

  // $(".editTeam").on("click", function() {
  //   event.preventDefault();
  //   if (!$(".teamName").val().trim()) {
  //     return;
  //   }
  //   console.log("You submitted!");
  //   $.put("/api/teams",
  //     $(".teamName").val().trim()
  //   )
  //     .then(console.log("Submitted a team"));
  // });

  // $(".editPokemon").on("click", function() {
  //   event.preventDefault();
  //   if (!$(".pokemonName").val().trim()) {
  //     return;
  //   }
  //   console.log("You submitted!");
  //   $.put("/api/pokemons",
  //     $(".pokemonName").val().trim()
  //   )
  //     .then(console.log("Submitted a team"));
  // });

  // $(".deletePokemon").on("click", function() {
  //   event.preventDefault();
  //   if (!$(".pokemonName").val().trim()) {
  //     return;
  //   }
  //   console.log("You submitted!");
  //   $.delete("/api/pokemons",
  //     $(".pokemonName").val().trim()
  //   )
  //     .then(console.log("Submitted a team"));
  // });

  // $(".deletePokemon").on("click", function() {
  //   event.preventDefault();
  //   if (!$(".pokemonName").val().trim()) {
  //     return;
  //   }
  //   console.log("You submitted!");
  //   $.delete("/api/pokemons",
  //     $(".pokemonName").val().trim()
  //   )
  //     .then(console.log("Submitted a team"));
  // });
});