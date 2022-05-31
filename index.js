
$("#welcomeModal").modal("show");

$("#feedbackForm").submit(function (event) {
  alert("Thank you for your feedback! We will get back to you as soon as possible!");
  event.preventDefault();
  $('#feedbackForm')[0].reset();
});
