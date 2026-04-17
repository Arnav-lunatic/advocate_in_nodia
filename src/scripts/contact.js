import emailjs from "@emailjs/browser";
// Initialize EmailJS
emailjs.init({
	publicKey: import.meta.env.PUBLIC_KEY, // Replace with your EmailJS public key
});

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".contact-form");
	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			// Get form values
			const fullname = document.getElementById("fullname").value;
			const email = document.getElementById("email").value;
			const phone = document.getElementById("phone").value;
			const message = document.getElementById("message").value;

			// Show loading state
			const submitBtn = form.querySelector(".submit-btn");
			const originalText = submitBtn.textContent;
			submitBtn.textContent = "Sending...";
			submitBtn.disabled = true;

			// Send email via EmailJS
			emailjs
				.send(
					import.meta.env.PUBLIC_SERVICE_ID, // Replace with your EmailJS service ID
					import.meta.env.PUBLIC_TEMPLATE_ID, // Replace with your EmailJS template ID
					{
						from_name: fullname,
						from_email: email,
						phone_number: phone,
						message: message,
						to_email: "contact@advocatejasvir.com", // Replace with your email
					},
				)
				.then(
					function (response) {
						// Success
						submitBtn.textContent = "Message Sent!";
						submitBtn.style.background = "#10b981";

						setTimeout(() => {
							form.reset();
							submitBtn.textContent = originalText;
							submitBtn.style.background = "";
							submitBtn.disabled = false;
						}, 3000);

						// Optional: Show success message
						alert("Your message has been sent successfully!");
					},
					function (error) {
						// Error
						console.error("EmailJS Error:", error);
						submitBtn.textContent = "Failed to Send";
						submitBtn.style.background = "#ef4444";
						submitBtn.disabled = false;

						// Optional: Show error message
						alert("Failed to send message. Please try again.");

						setTimeout(() => {
							submitBtn.textContent = originalText;
							submitBtn.style.background = "";
						}, 3000);
					},
				);
		});
	}
});
