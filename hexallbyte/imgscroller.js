var showcaseScroller = document.getElementById('showcase-scroller')

var showcaseValue = showcaseScroller.value;

var showcaseValueC = 0;

var showcaseH1 = document.getElementById('showcase-h1');
var showcaseP1 = document.getElementById('showcase-p1');

var imgChangeInterval = setInterval(() => {

    showcaseValue = showcaseScroller.value;

    if(showcaseValue != showcaseValueC){
    
        switch (showcaseValue) {
            case '1':
                showcaseH1.innerText = 'titulito guay 1';

                showcaseP1.innerText = '1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit? At fugit beatae molestias itaque quibusdam vero amet pariatur? Incidunt rem omnis esse ratione facere laboriosam consequuntur ipsa architecto facilis.';
                break;
        
            case '2':
                showcaseH1.innerText = 'titulito guay 2';

                showcaseP1.innerText = '2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit? At fugit beatae molestias itaque quibusdam vero amet pariatur? Incidunt rem omnis esse ratione facere laboriosam consequuntur ipsa architecto facilis.';
                break;

            case '3':
                showcaseH1.innerText = 'titulito guay 3';

                showcaseP1.innerText = '3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit? At fugit beatae molestias itaque quibusdam vero amet pariatur? Incidunt rem omnis esse ratione facere laboriosam consequuntur ipsa architecto facilis.';
                break;

            case '4':
                showcaseH1.innerText = 'titulito guay 4';

                showcaseP1.innerText = '4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit? At fugit beatae molestias itaque quibusdam vero amet pariatur? Incidunt rem omnis esse ratione facere laboriosam consequuntur ipsa architecto facilis.';
                break;

            case '5':
                showcaseH1.innerText = 'titulito guay 5';

                showcaseP1.innerText = '5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, suscipit? At fugit beatae molestias itaque quibusdam vero amet pariatur? Incidunt rem omnis esse ratione facere laboriosam consequuntur ipsa architecto facilis.';
                break;

            default:
                break;
        }

        showcaseValueC = showcaseValue;

    }

}, 150);