/* Poruci */

function validacija() {

  if (document.forms[0].ime.value=='') {
    alert("Niste uneli Vase ime i prezime!");
    document.forms[0].ime.focus();
    return false
  }
      
  if (document.forms[0].mail.value=='') {
    alert("Niste uneli e-mail adresu!");
    document.forms[0].mail.focus();
    return false;
  }

  if(document.forms[0].mail.value.indexOf('@') == -1)
  {
    alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
    document.forms[0].mail.focus();
    return false;
  }
      
  if (document.forms[0].telefon.value=='') {
    alert("Niste uneli Vas broj telefona!");
    document.forms[0].telefon.focus();
    return false;
  }
    
  return confirm("Da li želite da završite sa poručivanjem?");
}

/* Proveri podatke, prvo su skriveni pa se posle kopira sadrzaj iz polja u formi */

function proveri() {
  $(document).ready(function(){
    $("#pime").toggle();
    $("#pimee").toggle();
    document.getElementById("pimee").value = document.getElementById("ime").value;
  })
  $(document).ready(function(){
    $("#ptele").toggle();
    $("#ptelee").toggle();
    document.getElementById("ptelee").value = document.getElementById("telefon").value;
  })
  $(document).ready(function(){
    $("#pmejl").toggle();
    $("#pmejle").toggle();
    document.getElementById("pmejle").value = document.getElementById("mail").value;
  })
}

$(document).ready(function(){
  $("#pime").hide();
  $("#ptele").hide();
  $("#pmejl").hide();
  $("#pimee").hide();
  $("#ptelee").hide();
  $("#pmejle").hide();
});


/* Specijalitet meseca fade in and out */

$(document).ready(function(){
  $("#spec").click(function(){
    $("#spec_").css("display", "inline").fadeOut(3000);
  });
});
$(document).ready(function(){
  $("#spec_").hide();
});
    