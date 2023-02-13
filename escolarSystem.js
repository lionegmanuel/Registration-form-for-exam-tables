
let inputCourse = document.getElementById("radioFive");
inputCourse.addEventListener("click", (addCourse) => {
  alert("Ingrese la materia adeudada a continuacion");
  document.getElementById("inputCourse").style.visibility = "visible"; //muestra las opciones para ingresar la materia en el cuadro de texto correspondiente
  document.getElementById("textInputCourse").style.visibility = "visible";
});
let formStudent = document.getElementById("buttonStudent");
formStudent.addEventListener("click", (submitForm) => {
  let error = false; //cuando haya un error, no se enviara el formulario de inscripcion
  //obtencion de los datos rellenados en el formulario
  let nameStudent = document.getElementById("nameStudent").value;
  let mailStudent = document.getElementById("emailStudent").value;
  let dniStudent = document.getElementById("dniStudent").value;
  //verificacion de la opcion marcada en los radioButtons...

  let radioButtons = document.querySelector('input[name="course"]:checked'); //verifica si hay elementos marcados
  if (radioButtons) {
    if (radioButtons.value == "Otra") {
      let inputCourseStudent = document.getElementById("inputCourse");
      let courseStudent = inputCourseStudent.value;
      if (nameStudent.length == 0 || mailStudent.length == 0 || dniStudent.length == 0) {
        alert("ERROR...\n¡Complete todos los campos!"); error = true; var userAdvertence = true;
      }
      else alert("DATOS REGISTRADOS\nNOMBRE: " + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent);

    }
    else if (nameStudent.length == 0 || mailStudent.length == 0 || dniStudent.length == 0) {
      alert("ERROR...\n¡Complete todos los campos!"); error = true; var userAdvertence = true;
    }
    else { let courseStudent = radioButtons.value; alert("DATOS REGISTRADOS\nNOMBRE: " + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent); }
  }
  else {
    if (userAdvertence) error = false;
    else {
      alert("ERROR...\n¡Se debe seleccionar una materia!"); error = true;

    }
  }
  if (error) submitForm.preventDefault();  //previene el envio del formulario
  else { alert("INSCRIPCION REALIZADA CON EXITO"); }

})


