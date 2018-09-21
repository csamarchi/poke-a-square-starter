
$('button').on('click', () => {
  console.log('click works');
  //when the user clicks the button, populate the square
  createSquare(30);
});

//Create a function named createSquare, that takes a
//parameter of an arbitary number and creates
//divs according to the number in the square class

const createSquare = (numberOfSquares) => {

  for (let i = 0; i <= numberOfSquares; i++){
    //creating squares
    const $div = $('<div/>');
    //attach to the square class
    $('.squares').append($div);

  }
}
