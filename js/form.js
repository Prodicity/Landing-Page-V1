"use script";

if (!HTMLFormElement.prototype.reportValidity) {
  HTMLFormElement.prototype.reportValidity = function () {
    if (this.checkValidity()) return true;
    var btn = document.createElement("button");
    this.appendChild(btn);
    btn.click();
    this.removeChild(btn);
    return false;
  };
}

function SubmitForm(form_name) {
  var form = document.getElementsByName(form_name)[0];
  if (form.reportValidity()) {
    form.submit();
    if (window.submitted) window.submitted();
  }
}
