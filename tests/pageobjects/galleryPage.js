// pageobjects/GalleryPage.js

class GalleryPage {
    // --- Selectors ---
    get galleryContainer() {
        return $('.gallery'); // placeholder for main gallery container
    }

    get projectThumbnails() {
        return $$('.gallery-item'); // placeholder for list of thumbnails
    }

    get viewAllButton() {
        return $('=VIEW ALL'); // placeholder for "VIEW ALL" projects
    }

    get modalImage() {
        return $('.modal img'); // placeholder for modal image when opened
    }

    get modalCloseButton() {
        return $('.modal .close'); // placeholder for modal close button
    }

    // --- Actions ---
    async open() {
        await browser.url('/our-projects'); // navigates directly to Projects/Gallery page
    }

    async clickViewAll() {
        await this.viewAllButton.click();
    }

    async openProjectByIndex(index) {
        const thumbnails = await this.projectThumbnails;
        if (thumbnails.length > index) {
            await thumbnails[index].click();
        }
    }

    async isGalleryVisible() {
        return await this.galleryContainer.isDisplayed();
    }

    async closeModal() {
        await this.modalCloseButton.click();
    }
}

// --- Export as singleton ---
module.exports = new GalleryPage();
