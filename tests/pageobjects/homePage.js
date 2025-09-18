// pageobjects/HomePage.js

class HomePage {
    // --- Selectors ---
    get navHomeLink() {
        return $('=Home'); // nav link “Home”
    }
    get navProjectsLink() {
        return $('=Our Projects'); // nav link “Our Projects”
    }
    get navServicesLink() {
        return $('=Our Services'); // nav link “Our Services”
    }
    get navAboutUsLink() {
        return $('=About Us'); // nav link “About Us”
    }
    get navContactLink() {
        return $('=Contact'); // nav link “Contact”
    }
    get navReviewsLink() {
        return $('=Reviews'); // nav link “Reviews”
    }
    get navBlogLink() {
        return $('=The Renovation Hub'); // nav link “The Renovation Hub” (blog)
    }

    get scheduleACallButton() {
        return $('button=Schedule a Call'); // placeholder for “Schedule a Call” button
    }

    get viewAllProjectsButton() {
        return $('=VIEW ALL'); // placeholder for “VIEW ALL” projects
    }

    // Possibly a hero section
    get heroBannerText() {
        return $('.hero'); // placeholder selector for hero banner text or area
    }

    // --- Actions / Navigation ---
    async open() {
        await browser.url('/'); // go to home page
    }

    async goToHome() {
        await this.navHomeLink.click();
    }

    async goToProjects() {
        await this.navProjectsLink.click();
    }

    async goToServices() {
        await this.navServicesLink.click();
    }

    async goToAboutUs() {
        await this.navAboutUsLink.click();
    }

    async goToContact() {
        await this.navContactLink.click();
    }

    async goToReviews() {
        await this.navReviewsLink.click();
    }

    async goToBlog() {
        await this.navBlogLink.click();
    }

    async clickScheduleACall() {
        await this.scheduleACallButton.click();
    }

    async clickViewAllProjects() {
        await this.viewAllProjectsButton.click();
    }

    async isHeroVisible() {
        return await this.heroBannerText.isDisplayed();
    }
}

// export singleton
module.exports = new HomePage();
