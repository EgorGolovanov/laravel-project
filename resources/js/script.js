document.querySelector('edit').addEventListener('click', () => {
    $('.edit-form').removeClass('hidden');
    $('.edit').addClass('hidden');
    $('.delete').addClass('hidden');
});

document.querySelector('cancel').addEventListener('click', () => {
    $('.edit-form').addClass('hidden');
    $('.edit').removeClass('hidden');
    $('.delete').removeClass('hidden');
});