let style = document.createElement('style')
let body = document.getElementsByTagName('body')[0];
let root = document.createElement('div');
let card = document.createElement('section')
let html = `  <div class="card__wrapper">
<img src="https://randomuser.me/api/portraits/men/90.jpg" class="card__user-img">
<div class=card__info>
    <span class="card__name">Steve Kai</span>
    <span class="card__title">UI/UX Designer</span>
</div>
<div class="card__socials">

    <div class="card__icon card__icon--fb">
        <span class="card__icon-box">
            <i class="fab fa-facebook-f"></i>
        </span>
        <span class="card__icon--title">Facebook</span>
    </div>

    <div class="card__icon card__icon--ig">
        <span class="card__icon-box">
            <i class="fab fa-instagram"></i>
        </span>
        <span class="card__icon--title">Instagram</span>
    </div>

    <div class="card__icon card__icon--db">
        <span class="card__icon-box">
            <i class="fab fa-dribbble"></i>
        </span>
        <span class="card__icon--title">Dribbble</span>
    </div>
</div>
</div>`;

body.prepend(root)
root.classList.add('root')
card.classList.add("card")
root.prepend(card)
root.style.cssText = `
bacnground: url('https://wallpaperaccess.com/full/636909.jpg')
background-size: cover; 
background-position: center;
`;