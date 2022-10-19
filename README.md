# UMD Inclusive Impact
## Description

Previously known as "UMD Inclusive Growth" for INST490 Spring 2022 Capstone.

The UMD Inclusive Impact Website is dedicated to compiling a hub of resources for underrepresented groups in areas including College Park, PG County, and Maryland broadly. Their initiatives include resources for career development, family support &employment, entrepreneurship, healthcare, sustainable housing, and transportation resources for community members. 

The website uses HTML, CSS, and JavaScript. Most of the interface components and screen responsiveness is handled using the Bootstrap v4.0 framework: [Bootstrap v4.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/).

## File Structure
All images, css, and js files are organized within their respective folders inside of the assets folder. The only files are that not in folders are the html pages and the main css stylesheet for quicker access.

## Target Browsers
* iPhone 6/7/8 
* iPhone 6/7/8 Plus
* iPhone X
* Pixel 2/2 XL
* Desktop 13/15 in.

## Links
[Full Developer Manual](https://docs.google.com/document/d/1shYa3CAv9BvmUMrFd6GH0YYDdt7zFlkMq6LDTYGV7Ew/edit?usp=sharing)

# Developer Manual
## How to Install Application & All Dependencies
1. Clone this repository by selecting the green “Code” button and “Open with Github Desktop”.
2. In Github Desktop, select “Open in Visual Studio Code” or text editor of your choice.

## How to Run Application on a Server
1. In VSCode, right-click on any of the html pages you want to view.
2. Select “Copy path”, and paste the path into your browser.
3. If you want to view the changes you made to the code, be sure to save the changes to the file (CTRL+S) on VSCode and then refresh the browser (CTRL+R).

## How to Run Tests for the Software
There is no prewritten tests in this repository. Testing was mainly done through viewing the page locally on a browser and inspecting the page to look at the responsiveness of the website.

## Known Issues
* The search/filter functions on resources.html page only work on the current page, but not across multiple pages.
* The images used for each page are specifically cropped the same size so that they match. If you plan on replacing the images, make sure that they fit the same dimensions as the current images or else the formatting will be uneven on the page.

## Future Development
This is a list of what needs to be improved on the current state of the website, as well as ideas that can be worth implementing in the future.

**Home (index.html):**
* Have detailed descriptions of what each pillar means within each card
* Link the cards to a new page or to the resources page but already filtered
* Replace stock images with content that is specifically from the community and/or university

**Career Services (careerservices.html):**
* None of the buttons are linked. Be sure to get that information.
* Contact information and office hours are filler text. Be sure to get that information.

**Resources (resources.html):**
* Continue to add individual resources provided by UMD Inclusive Impact (POC: Sammy Popat, David Steele)
* Have “pagination” and/or “show more” button so that users can scroll through the resource cards
* Change the card photos to a photo from the organization instead of using stock images
* Add descriptions of each organization to its card that briefly describes its purpose
* Fix the filter and search function (Both only work on resources.html, so this fix will depend on whether the team decides to implement pagination or continuous scrolling on one page (through a "Show More" button))

**Find Events (findevents.html):**
* Replace cards that have stock images with the organization’s content (Employ Prince George’s Calendar and Prince George’s Economic Development Corporation)
* Add additional relevant organization’s links in the community

**About (about.html):**
* Add data visualization graphics created by Jesse Anderson to portray the organization’s impact in the community and more (POC: Sammy Popat, David Steele)
* Link each of the partners under “Our Partners” to their official website

**Other Suggestions:**
* Individual pages for each pillar with more details
* Have the website be able to translate text into different languages, especially in Spanish
* Update the footer to link to future social media accounts, contact information, and other details necessary
* Add search function in the navigation bar to search through all pages, instead of just within the resources.html page
* Include UMD IG Logo on navigation bar and as a favicon

## Previous Team Members
**Developers**
* Chika Chuku
* Katherine Vo
* Emily Zheng
