// pageobjects/ContactPage.js

class ContactPage {
    // --- Selectors ---
    get nameInput() {
        return $('#name'); // placeholder for "Name" input
    }

    get emailInput() {
        return $('#email'); // placeholder for "Email" input
    }

    get phoneInput() {
        return $('#phone'); // placeholder for "Phone" input
    }

    get messageTextarea() {
        return $('#message'); // placeholder for "Message" textarea
    }

    get submitButton() {
        return $('button=Send'); // placeholder for "Send" button
    }

    get successMessage() {
        return $('.success-message'); // placeholder for confirmation message
    }

    get errorMessage() {
        return $('.error-message'); // placeholder for form validation error
    }

    // --- Actions ---
    async open() {
        await browser.url('/contact'); // navigates directly to Contact page
    }

    async fillForm(name, email, phone, message) {
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.phoneInput.setValue(phone);
        await this.messageTextarea.setValue(message);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async getSuccessText() {
        return await this.successMessage.getText();
    }

    async getErrorText() {
        return await this.errorMessage.getText();
    }
}

// --- Export as singleton ---
module.exports = new ContactPage();
