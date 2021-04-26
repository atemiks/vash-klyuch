$(function () {
    if($('.filter-wrapper').length) {
        console.log('found');
        let filterToggle = $('.filter-toggle'),
            filterContainer = $('.filter-wrapper'),
            filterBg = filterContainer.find('.filter-bg');

        function showFilter() {
            console.log('show filter');
            filterContainer.addClass('show');
            filterBg.addClass('show');
        }

        function closeFilter() {
            console.log('close filter');
            filterContainer.removeClass('show');
            filterBg.removeClass('show');
        }


        $(filterToggle).on('click', showFilter);
        $(filterBg).on('click', closeFilter);


        // filter collapse group
        $(document).on('click', '.filter-group-toggle', function(e) {
            let target = $(e.currentTarget),
                groupContainer = target.closest('.filter-group'),
                groupContentContainer = groupContainer.find('.filter-group-body');

            target.toggleClass('hide');
            groupContentContainer.slideToggle();
        });

        // filter collpase variants
        $(document).on('click', '.filter-variants-toggle', function(e) {
            let target = $(e.currentTarget),
                groupContainer = target.closest('.filter-group'),
                variantsList = groupContainer.find('.filter-variants-list'),
                variantsSecondaryElements =  variantsList.find('.filter-variant-secondary-item');

            if (target.data('expended') == false) {
                variantsSecondaryElements.slideDown();
            } else {
                variantsSecondaryElements.slideUp();
            }

            groupContainer.find('.filter-variants-toggle').removeClass('d-none');
            target.addClass('d-none');
        });
    }
});