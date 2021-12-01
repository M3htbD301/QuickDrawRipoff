random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);

console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];

document.getElementById("base_sketch"),innerHTML=sketch;


    timer_counter = 0;
     timer_check = "";
      drawn_sketch = "";
       answer_holder = "";
        score = 0;

    function draw() {
background("white");
check_sketch();
if(drawn_sketch==sketch) {
    answer_holder="set";
    score++;
    document.getElementById("score").innerHTML="score "+score;

}
    }

   function check_sketch() {
timer_counter++;
document.getElementById("time").innerHTML="timer" +timer_counter;
if (timer_counter>400){
    timer_counter=0;
    timer_check="comepleted";
}
    if(timer_check =="completed" || answer_holder == "set")
    {
    timer_check = "";
    answer_holder = "";
    updateCanvas();
    }

   }
 
   function updateCanvas() {
    background("white");
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
    }