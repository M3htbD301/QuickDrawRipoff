random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);

console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];

document.getElementById("base_sketch"),innerHTML=sketch;


    timer_counter = 0;
     timer_check = "";
      drawn_sketch = "";
       answer_holder = "";
        score = 0;