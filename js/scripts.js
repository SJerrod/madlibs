$(document).ready(function() {
  console.log("Script executing!");
  $("#formOne").submit(function() {
    event.preventDefault();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();
    
    let inputs = ["person1", "person2", "animal", "exclamation", "verb","noun"];
    
    inputs.forEach(function(input) {
      let madInput = $("input#" + input).val(); 
      $("." + input).text(madInput);
      console.log(madInput)
    });

    // $(".person2").text(person2Input)
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();
  });
});