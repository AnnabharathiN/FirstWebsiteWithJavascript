function selection() {
    var boxes= document.querySelectorAll('input[name="platform"]');
    var selectedBoxes = [];
    for (let i = 0; i < boxes.length; i++)
         {
        if (boxes[i].checked) {
            selectedBoxes.push(boxes[i].value);
        }
    }
    return selectedBoxes;
}   
const form = document.querySelector('form');
form.addEventListener('submit', function(event){
const platform = selection();
 {
   if(platform.length === 0) 
    {
      event.preventDefault();
      alert('Please select at least one gaming platform.');}
      else {
        alert('Form submitted successfully!') + platform.join(', ');  
      }
   }} );       
   const rows = document.querySelectorAll('table tbody tr');

   for(i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function() 
     {
        const cells = this.cells;
        const game = cells[0].textContent;
        const duration = cells[1].textContent;
        alert(game + '  lasts  ' + duration);
    })}