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
    //if (radioButtons.value == "Otra") {
    //let inputCourseStudent = document.getElementById("inputCourse").style.visibility = "visible";
    //document.getElementById("textInputCourse").style.visibility = "visible";
    //courseStudent = inputCourseStudent.value; //definicion de la materia escogida
    //alert("DATOS REGISTRADOS\nNOMBRE: " + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent);
    if (radioButtons.value == "Otra") { let courseStudent = addCourse(); alert("DATOS REGISTRADOS\nNOMBRE: " + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent); }

    else { let courseStudent = radioButtons.value; alert("DATOS REGISTRADOS\nNOMBRE: " + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent); }

  }
  else {
    alert("No se ha seleccionado ninguna materia");
    error = true;
  }

  if (error) { let buttonForm = document.getElementById("buttonStudent"); buttonForm.preventDefault(); }
  else { alert("INSCRIPCION REALIZADA CON EXITO"); }

})

function addCourse() {

  alert("Ingrese la materia adeudada a continuacion");
  let inputCourseStudent = document.getElementById("inputCourse").style.visibility = "visible"; //muestra las opciones para ingresar la materia en el cuadro de texto correspondiente
  document.getElementById("textInputCourse").style.visibility = "visible";
  let courseStudent = inputCourseStudent.value;
  return courseStudent;

}
let inputOtherCourse = document.getElementById("radioFour");
inputOtherCourse.addEventListener("click", addCourse);

