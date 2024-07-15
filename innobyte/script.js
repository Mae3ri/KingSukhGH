document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.hover .nav-item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all items
        items.forEach(i => i.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');
      });
    });
  });

  function openWhatsApp() {
    var phoneNumber = "+919007062180"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }


    document.addEventListener("DOMContentLoaded", function() {
        const shortPara = document.querySelector('.short-para');
        const readMoreBtn = document.querySelector('.read-more');

        readMoreBtn.addEventListener('click', function() {
            shortPara.classList.toggle('expanded');
            readMoreBtn.textContent = shortPara.classList.contains('expanded') ? 'Read less' : 'Read more';
        });
    });



