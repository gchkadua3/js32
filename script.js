const profile = ['Kate B']
const profileNameLastName = document.querySelector('.profile p');
const footer = [
    {tagA:'contact',
    linkA:' https://google.com'},
    {tagA:'help',
    linkA:' https://google.com'},
    {tagA:'terms of use',
    linkA:' https://google.com'},
    {tagA:'privacy policy',
    linkA:' https://google.com'}
]

const footerSocials = [
    {socialLink: 'https://twitter.com'},
    {socialLink: 'https://facebook.com'},
    {socialLink: 'https://youtube.com'}
]

const cardContent = [
    {
        title: 'Headset',
        subtitle: 'Fidelity first. See more than ever before',
        description: 'We"ve pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.',
        commentCount: '55',
        views: '49500',
        shareLink: 'https://google.com',
        img:'cardimage.png'
    },

    {
        subtitle: 'Your hands, in Virtual Reality',
        description: 'Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.',
        commentCount: '349',
        views: '48212',
        shareLink: 'https://google.com',
        img:'cardimage.png'
    },

    {
        title: 'Base Stations',
        subtitle: 'Best-in-industry room-scale tracking',
        description: 'The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.',
        commentCount: '349',
        views: '49321',
        shareLink: 'https://google.com',
        img:'cardimage.png'
    }
]

const cards = document.querySelectorAll('.card');

cardContent.forEach((card, index) => {
    const currentCard = cards[index];
    const titleElement = currentCard.querySelector('.title');
    const subTitleElement = currentCard.querySelector('.subtitle')
    const descriptionElement = currentCard.querySelector('.description');
    const commentElement = currentCard.querySelector('.commentCount')
    const viewElement  = currentCard.querySelector('.viewCount');
    const shareLink = currentCard.querySelector('.share');
    if(index === 1){
        titleElement.style.display = 'none';
    }
    if (titleElement) {
      titleElement.textContent = card.title;
      subTitleElement.textContent = card.subtitle;
      descriptionElement.textContent = card.description;
      commentElement.textContent = card.commentCount;
      viewElement.textContent = card.views;
      shareLink.href = card.shareLink;
      shareLink.target = '_blank';
    }
  });

  const footerTags = document.querySelectorAll('.footerA');
  const footerTagsArray = Array.from(footerTags);
  
  footer.forEach((item, index) => {
      if (footerTagsArray[index]) {
          const anchorTag = footerTagsArray[index];
          anchorTag.textContent = item.tagA.toUpperCase();
          anchorTag.href = item.linkA;
      }
  });
  
  const socialHref = document.querySelectorAll('.social');
    const socialHrefArray = Array.from(socialHref);

footerSocials.forEach((item, index) => {
    if (socialHrefArray[index]) {
        const socialTag = socialHrefArray[index];
        socialTag.href = item.socialLink;
    }
});

  

profileNameLastName.textContent = profile[0];