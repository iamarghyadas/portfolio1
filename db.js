window.onload=function(){
    document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
 
    var name=getInputVal('name');
    var email=getInputVal('email');
    var service=getInputVal('service');
    var message=getInputVal('message');

    console.log(name);


}

function getInputVal(id){
    return document.getElementById(id).value;
}

}
