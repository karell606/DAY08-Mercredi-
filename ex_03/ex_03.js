document.addEventListener('DOMContentLoaded', function () {
    tippy('.tooltip-element', {
        trigger: 'click',
        animation: 'scale',
        onShow(instance) {
            document.addEventListener('click', function onClickOutside(event) {
                if (!instance.popper.contains(event.target) && !instance.reference.contains(event.target)) {
                    instance.hide();
                    document.removeEventListener('click', onClickOutside);
                }
            });
        }
    });
});
