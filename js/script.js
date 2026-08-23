(function() { 
    $(document).ready(function() {
        loadHeader(); 
        loadFooter(); 
    }); 

    function loadHeader() { 
        let defaultPage = 'bags';

        var headerHtml = `
            <a href="../${defaultPage}"><h1>My Stuff</h1></a>
            <nav>
                

              

                <span class="navSectionHeader-desktop">WEARABLES</span>


                <!--<a href="../watches"> 
                    <span class="nav-icon">&#8986;</span>
                    <span class="nav-text">Watches</span>
                </a>--> 

                <a href="../bags"> 
                    <span class="nav-icon">&#128092;</span>
                    <span class="nav-text">Bags</span>
                </a> 


                <span class="navSectionHeader-desktop">LIGHTERS</span>
                <span class="navSectionHeader-mobile">|</span>


                <a href="../zippo"> 
                    <span class="nav-icon">&#128293;</span>
                    <span class="nav-text">Zippo</span>
                </a> 


                <span class="navSectionHeader-desktop">ELECTRONICS</span>
                <span class="navSectionHeader-mobile">|</span>

                <a href="../headphones" >
                    <span class="nav-icon">&#127911;</span> 
                    <span class="nav-text">Headphones</span>
                </a>

            </nav>
        `;
        $('header').append(headerHtml); 
        

    
        // read url and highlight tab 
        var pages = [
            // 'home',

            'headphones', 
            'computers',

            'watches', 
            'bags',

            'zippo',
        ]; 
    
        let index = window.location.href.indexOf('collections/') + 'collections/'.length; 
        let currentPageStr = window.location.href.substring(index); 
    
        let currentPage = pages.find(x => currentPageStr.includes(x.toLowerCase() +'/'));
        if (currentPage) { 
            $(`a[href*="./${currentPage}"]`).addClass('current-tab');
        } else { 
            // redirect to home page
            window.location.href = window.location.origin + `/collections/html/${defaultPage}`; 
        }
    
    }
    
    
    function loadFooter() {
        $('footer').append('&nbsp;');
    }
    
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                          .exec(window.location.search);
    
        return (results !== null) ? results[1] || 0 : false;
    }



})(); 

function readablePrice(number) { 
    if (number) { 
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }
    return 0;
}

