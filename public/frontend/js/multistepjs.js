$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
function checkbox() {
    document.getElementById('house').style.display = 'block';
    var x = document.getElementById('item_name');
    x.setAttribute('value', 'home');
    var btn_yes = document.getElementById('btn_yes');
    var btn_no = document.getElementById('btn_no');
    btn_yes.classList.add('btn_yes_active');
    btn_no.classList.remove('btn_no_active');
    var item_value = document.getElementById('home_type');
    item_value.setAttribute('value', 'house');

}
function checkbox_one() {
    var x = document.getElementById('home')
    x.setAttribute('value', '')
    document.getElementById('house').style.display = 'none';
    var btn_yes = document.getElementById('btn_yes')
    var btn_no = document.getElementById('btn_no')
    btn_yes.classList.remove('btn_yes_active')
    btn_no.classList.add('btn_no_active')
}
function checkbox_one_m() {
    var btn_yes = document.getElementById('btn_yes_m')
    var btn_no = document.getElementById('btn_no_m')
    btn_yes.classList.remove('btn_yes_active')
    btn_no.classList.add('btn_no_active')
    var text_b = document.getElementById("movable_inline");
    var display_btn_m = document.getElementById('btn_movable')
    text_b.style.display = "none";
    display_btn_m.style.display = "none";
    var x = document.getElementById('movable_type');
    x.setAttribute('value','')
}
function checkbox_one_im() {
    var btn_yes = document.getElementById('btn_yes_im')
    var btn_no = document.getElementById('btn_no_im')
    btn_yes.classList.remove('btn_yes_active')
    btn_no.classList.add('btn_no_active')
    var imtext = document.getElementById("immovable_inline");
    var display_btn = document.getElementById('btn_immovable')
    var x = document.getElementById('immovable_type');
    x.setAttribute('value', '')
    imtext.style.display = "none";
    display_btn.style.display = "none";
}

function my_Function() {
    var btn_yes = document.getElementById('btn_yes_m');
    var btn_no = document.getElementById('btn_no_m');
    btn_yes.classList.add('btn_yes_active');
    btn_no.classList.remove('btn_no_active');

    var text_b = document.getElementById("movable_inline");
    var display_btn_m = document.getElementById('btn_movable')
    text_b.style.display = "block";
    display_btn_m.style.display = "block";
    var imtext = document.getElementById("immovable_inline");
    var display_btn = document.getElementById('btn_immovable')
    imtext.style.display = "none";
    display_btn.style.display = "none";
    var x = document.getElementById('movable_type');
    x.setAttribute('value', 'movable')


}
function my_Function_one() {
    var btn_yes = document.getElementById('btn_yes_im');
    var btn_no = document.getElementById('btn_no_im');
    btn_yes.classList.add('btn_yes_active');
    btn_no.classList.remove('btn_no_active');
    var imtext = document.getElementById("immovable_inline");
    var display_btn = document.getElementById('btn_immovable')
    imtext.style.display = "flex";
    display_btn.style.display = "block";
    var text_b = document.getElementById("movable_inline");
    var display_btn_m = document.getElementById('btn_movable')
    text_b.style.display = "none";
    display_btn_m.style.display = "none";
    var x = document.getElementById('immovable_type');
    x.setAttribute('value', 'immovable')


}
function add_item_one_m(div_Name) {
    var new_div = document.createElement('div');
    new_div.setAttribute('id', 'form_group');
    new_div.innerHTML = "<div style='padding-bottom: 0.5em;padding-top:0.5em;'>"+"<p >Item  name </p>"+"</div>"+"<div>"+"<input type = 'text' id = 'home'   name = 'item_name[]'  placeholder = 'Item Name' class='form-control'>"+"</div>" + "<div style='padding-bottom: 0.5em;padding-top:0.5em;'>"+"<p >Item  value </p>"+"</div>" + "<input type='text' id='home' name='item_value[]' placeholder='Item  Value' class='form-control'>" + "<input type='hidden' name='item_type[]' value='movable'  class='form-control'>";
    document.getElementById(div_Name).appendChild(new_div);
}

function add_item_one(divName) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('id', 'form_group');
    newdiv.innerHTML = "<div style='padding-bottom: 0.5em;padding-top:0.5em;'>"+"<p >Item  name </p>"+"</div>"+"<div>"+"<input type = 'text' id = 'home'   name = 'item_name[]'  placeholder = 'Item Name' class='form-control'>"+"</div>" + "<div style='padding-bottom: 0.5em;padding-top:0.5em;'>"+"<p >Item  value </p>"+"</div>" + "<input type='text' id='home' name='item_value[]' placeholder='Item Value' class='form-control'>" + "<input type='hidden' name='item_type[]' value='immovable'  class='form-control'>";
    document.getElementById(divName).appendChild(newdiv);
}
// function to slide show tabs

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    //... and run a function that will display the correct step indicator:
}

function next() {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (!validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + 1;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        return false;
    }

    // Otherwise, display the correct tab:
    showTab(currentTab);
}
function prev() {
    n = -1
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...

    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = true;
        }
    }
    return valid; // return the valid status
}
function login_page()
{
    document.getElementById('login_page').style.display='block';
    document.getElementById('signup_page').style.display ='none';
    var btn_yes = document.getElementById('btn_yes_login');
    var btn_no = document.getElementById('btn_no_login');
    btn_yes.classList.add('btn_yes_active');
    btn_no.classList.remove('btn_no_active');
}
function signup_page()
{
    document.getElementById('login_page').style.display='none';
    document.getElementById('signup_page').style.display ='block';
    var btn_yes = document.getElementById('btn_yes_login');
    var btn_no = document.getElementById('btn_no_login');
    btn_yes.classList.remove('btn_yes_active');
    btn_no.classList.add('btn_no_active');
}
function my_login() {
    var item_name = $('input[name^=item_name]').map(function (idx, elem) {
        return $(elem).val();
    }).get();
    var item_value = $('input[name^=item_value]').map(function (idx, elem) {
        return $(elem).val();
    }).get();
    var item_type = $('input[name^=item_type]').map(function (idx, elem) {
        return $(elem).val();
    }).get();
    var insurer = $('input[name^=insurer]').map(function (idx, elem) {
        return $(elem).val();
    }).get();   
    $('#data_form').submit( function (event) {
        var formData = {
            'email': $('input[name=log_email]').val(),
            'item_name': item_name,
            'item_value': item_value,
            'item_type': item_type,
            'insurer': insurer
        };
        $.ajax({
            type: 'post',
            url: "{{url('client/login')}}",
            data: formData,
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
            success: function () {
                location.reload();

            }
        });
        event.preventDefault();
    });
  

}

function openPage(pageName,elmnt)
 {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";

  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


