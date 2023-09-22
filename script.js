const footer = document.querySelector(".footer-container");
const footerP = document.querySelector(".terms");
const header = document.querySelector("header");

// Store the original content of footer, footerP, and header
const originalFooterContent = footer.innerHTML;
const originalFooterPContent = footerP.innerHTML;
const originalHeaderContent = header.innerHTML;

window.addEventListener("resize", () => {
    if (window.innerWidth < 650) {
        footer.innerHTML = `
            <div class="wrapper">
            <div class="header-container" style="margin: 0 auto; display: flex; flex-direction: column;">
                <header>
                    <img src="/images/Лого.svg" alt="Logo" />
                    <!-- Navigation -->
                    <nav>
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Catalog</li></a>
                            <a href="#"><li>About Store</li></a>
                            <a href="#"><li>Contact Us</li></a>
                            <a href="#"><li>Search</li></a>
                        </ul>
                    </nav>

                    <hr/>
                    <p>Library Bookstore EACamp</p>
                    <p>© 2003-2023</p>
                </header>
            </div>
            </div>
        `;
        footerP.innerHTML = "";
        header.innerHTML = ""; // Clear the header content
    } else {
        // Restore the original content
        footer.innerHTML = originalFooterContent;
        footerP.innerHTML = originalFooterPContent;
        header.innerHTML = originalHeaderContent;
    }
});
