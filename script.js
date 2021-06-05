function display() {
    var sname = document.getElementById("sname").value;
    var deptname = document.getElementById("deptname").value;
    var firstGraduate = document.getElementById("firstGraduate").checked;
    var result = document.getElementById("result");

    if (deptname == 'mbbs') {
        var adfee = 2300000;
        var tufee = 90000;
    }
    else if (deptname == 'bds') {
        adfee = 1500000;
        tufee = 80000;
    }
    else if (deptname == 'bhms') {
        adfee = 1235000;
        tufee = 95000;
    }

    var radios = document.getElementsByName('hostel');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var val = radios[i].value;
        }
    }
    if (val == 'Yes') {
        var hfee = 96000;
    }
    else {
        hfee = 0;
    }
    var colgfee = adfee + tufee + hfee;
    if (firstGraduate == true) {
        colgfee = colgfee - 25000;
    }
    result.innerHTML = "Hi " + sname + ",<br>" + "Your Admission Fee is Rs. " + adfee + "<br>Tution Fee is Rs. " + tufee + "<br> Hostel Fee is Rs. " + hfee + "<br> Total College Fee is Rs. " + colgfee;
    return false;
}