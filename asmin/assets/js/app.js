// Asmaul Husna - Interactive App
$(document).ready(function() {
    // Initialize
    renderCards();
    setupEventHandlers();
    hideInfoBox();

    var scrolled = 0;

    // Scroll event handler
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();

        if (scrollVal > 18) {
            // Make header sticky
            $('#headerbox').addClass('sticky');
            $('#options').addClass('options-visible').removeClass('options-hidden');

            if (scrollVal > 100 && scrolled === 0) {
                scrolled = 1;
                // Simulate start count
                $('#startcounter').text(Math.floor(Math.random() * 500000 + 500000));
            }
        } else {
            // Remove sticky
            $('#headerbox').removeClass('sticky');
            $('#options').removeClass('options-visible').addClass('options-hidden');
            scrolled = 0;
        }
    });

    // Start button click
    $('#startBtn').click(function() {
        $('html, body').animate({
            scrollTop: $('#card-0').offset().top - 100
        }, 1000);
    });
});

// Render all divine names as cards
function renderCards() {
    const container = $('#namesContainer');
    container.empty();

    divineNames.forEach((name, index) => {
        const cardHtml = `
            <div class="card ${index % 2 === 1 ? 'cardbg' : ''}" id="card-${index}" data-id="${name.id}" title="Ya ${name.english.split()[0]} Ya ALLAH">
                <div class="card-arabic">${name.arabic}</div>
                <div class="card-title">${name.english}</div>
                ${name.abjad ? `<span class="card-abjad">${name.abjad}</span>` : ''}
                <div class="card-meaning">${name.meaning}</div>
                ${name.malayalam ? `<div class="card-malayalam">${name.malayalam}</div>` : ''}
                <div class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <div class="card-benefits"><strong>Benefits of Reading:</strong> Reciting this Divine Name brings spiritual benefits and inner peace.</div>
            </div>
        `;
        container.append(cardHtml);
    });
}

// Setup event handlers
function setupEventHandlers() {
    // Card hover effects
    $(document).on('mouseenter', '.card', function() {
        const englishName = $(this).find('.card-title').text();
        const arabicName = $(this).find('.card-arabic').text();
        showInfoBox(`Ya ${englishName.split()[0]} Ya ALLAH`);
        $('.statustxt').text(`Ya ${englishName} Ya ALLAH`);
    });

    $(document).on('mouseleave', '.card', function() {
        hideInfoBox();
    });

    // Toggle options
    $('#etitleopt').on('click', function() {
        toggleOption(this, '.card-title');
    });

    $('#descopt').on('click', function() {
        toggleOption(this, '.card-description');
    });

    $('#benefitopt').on('click', function() {
        toggleOption(this, '.card-benefits');
    });

    $('#malopt').on('click', function() {
        toggleOption(this, '.card-malayalam');
    });

    // Go to name by ID
    $('#goname').on('change', function() {
        const nameId = parseInt($(this).val());
        if (nameId >= 1 && nameId <= 99) {
            const cardIndex = nameId - 1;
            const card = $(`#card-${cardIndex}`);
            if (card.length) {
                $('html, body').animate({
                    scrollTop: card.offset().top - 100
                }, 800);
                $('.statustxt').text(`Name #${nameId}`);
            }
        }
        $(this).val('');
    });
}

// Show info box with invocation
function showInfoBox(text) {
    const infobox = $('#infobox');
    infobox.find('.callbox').text(text);
    infobox.fadeIn(100).css('top', '50px');
}

// Hide info box
function hideInfoBox() {
    $('#infobox').stop().fadeOut(1000);
}

// Toggle visibility of card elements
function toggleOption(element, selector) {
    event.preventDefault();

    $(element).toggleClass('active');

    if ($(element).hasClass('active')) {
        $(element).css({
            'text-decoration': 'line-through',
            'background-color': '#F3F3F3'
        });
    } else {
        $(element).css({
            'text-decoration': 'none',
            'background-color': '#FDFDFD'
        });
    }

    // Toggle visibility of all matching elements
    $(selector).toggleClass('visible', $(element).hasClass('active'));
}

// Utility: Animate counter
function animateCounter(element, targetValue) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100);

    const interval = setInterval(function() {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
        }
        $(element).text(currentValue.toLocaleString() + '+');
    }, 10);
}

// Export for use in other scripts
window.AsmaulHusnaApp = {
    renderCards,
    setupEventHandlers,
    showInfoBox,
    hideInfoBox,
    animateCounter
};
