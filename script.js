//this is the lastOpinionButton section
$('#lastOpinionButton').click(function(){
  $('#rightBox').html("<h1>Last Opinions<h1><div><div class='noBorder'><img class='imgOpinion' src='images/ritz.jpg'> <!-- image of ritx  --><h5>Hotel Ritz</h5> <!-- hotel name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>16-5-1986</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is my favorite hotel in Madrid! The hotel restaurant is amazing - I would definitely recommend trying the lobster! The location is perfect and is near many of the main tourist sights that you should see when you are visiting the city! It is a little expensive, but worth it!</p> <!-- hotel review  --></div></div> <!-- close div object 1  --><div> <!-- start new div object  --><div class='noBorder'><img class='imgOpinion' src='images/laArdosa.jpg'><!-- La Ardosa image   --><h5>La Adorsa</h5> <!-- restaurant name  --><h5>Madrid, Spain</h5> <!-- location  --><h5>23-8-2005</h5> <!-- date  --></div><div class='noBorder'><p id='opinions'>This is a great bodega in a busy and popular area of the city. It gets pretty crowded at night so I would recommend getting there early to secure a good seat. I heard that they are famous for their tortillas and they lived up to the expectation! Very fair pricing as well. </p> <!-- restaurant review  --></div>  </div> <!-- close reviews div object  --></div>");
});
//here ends the lastOpinionButton section

//this is the personalInformationButton section
$('#personalInformationButton').click(function(){
  $('#rightBox').html("<h1>Personal Information</h1> <!-- beginning of right box personal information section  --><br><br><form> <!-- start of form object  --><input type = 'text' id = 'firstName' value = 'First Name'> <!-- insert first name box  -->&nbsp &nbsp &nbsp<input type = 'text' id = 'lastName' value = 'Last Name'> <!-- insert last name box  --><br><br><input type = 'text' id = 'email' value = 'Email address'> <!-- insert email box  --> <br><br><input type = 'text' id = 'address' value = 'Home address'> <!-- insert address box  --> &nbsp &nbsp &nbsp<input type = 'text' id = 'phone' value = 'Phone number'> <!-- insert phone number box  --><br><br><input type = 'text' id = 'birthday' value = 'Birthday'> <!-- insert birthday box  --><br><br><p> <button type='submit'>Submit Information</button> </p> <!-- submit information button  --><br><br></form> <!-- end of form object  --><h2> My Activity in the App </h2> <!-- my activiyy in the app section --><br><br><div class='activity'>POINTS: 2</div> <!-- points circle  --><div class='activity'>LEVEL: 10</div> <!-- level circle  --><div class='activity'>OPINIONS: 3</div> <!-- opinions circle  --> <div class='activity'>PHOTOS: 5</div> <!-- photos circle  -->");
});
//here ends the personalInformationButton section

//this is the myPreferenceButton section
var count = 3;
var allowx = true;
$('#myPreferenceButton').click(function (event){
  if(allowx==false){
    event.preventDefault();
    return false;
  }
  count++;
  //this part appends a new box
  $('#preferencesAdded').append("<div id = 'pref'>   <input type = 'text' id = 'firstNameIn' value = ''><!-- preference x  --><button class='btn'><i class='fa fa-close'></i></button> <!-- x button  --></div> <br>");
  $('#pref').attr('id','pref'+count);
  $('#firstNameIn').attr('id','firstNameIn'+count);
   allowx = false;
   //this part will stop the listening of myPreferenceButton as well as change the input to a text
  $('#firstNameIn'+count).on('keyup', function(event) {
      if (event.keyCode === 13) {
          allowx=true;
         tex = $('#firstNameIn'+count).val();
         var id1 = $(this).parent().attr('id');
         $('#'+id1).html("<!-- preference x  --><button class='btn'><i class='fa fa-close'></i></button> <!-- x button  -->");
         $('#'+id1).prepend(tex);
         $('i').click(function(){
         var id1 = $(this).parent().parent().attr('id');
         $('#'+id1).remove();
          });
     }
  });
});
//this sets the remove button
$('i').click(function(){
var id1 = $(this).parent().parent().attr('id');
$('#'+id1).remove();
});
//here ends the myPreferenceButton section
